"use client";
import Sidebar from "@/app/components/admin/Sidebar";
import { AddProductSave, getCategories, getProductByID, updateProduct } from "@/lib/services/fileservice";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

export interface Category {
    categoryId: number;
    categoryName: string;
    isActive: boolean;
}
export default function AddProduct() {
    const [productName, setProductName] = useState("");
    const [form, setForm] = useState({
        ProductName: "",
        ProductDescription: "",
        categoryId: 0,
        isActive:"",
        Images: [] as File[],
    });
    const [saving, setSaving] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const searchParams = useSearchParams();
    const productId = searchParams.get("productId");
    const isEditMode = !!productId;
    const API_BASE_URL = "https://localhost:7257/";
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    const [categories, setCategories] = useState<Category[]>([]);
    const [existingImages, setExistingImages] = useState<
  { imageId: number; imagePath: string; isPrimary: boolean }[]
>([]);

    useEffect(() => {
        const getAllCategory = async () => {
            try {
                const response = await getCategories("actv");
                console.log(response);
                setCategories(response);
            }
            catch (ex) {

            }
        };
        getAllCategory();
    }, [])
    useEffect(() => {
        if (!isEditMode) return;

        const fetchProduct = async () => {
            try {
                const payload = {
                    ProductID: Number(productId)
                }
                const response: any = await getProductByID(payload);

                setForm({
                    ProductName: response.productName,
                    ProductDescription: response.productDescription,
                    categoryId: response.categoryId,
                    isActive:response.isActive,
                    Images: [], // images handled separately
                });
                setExistingImages(response.images || []);

            } catch (err) {
                console.error(err);
                alert("Failed to load product details");
            }
        };

        fetchProduct();
    }, [isEditMode, productId]);
    const handleUpdateProduct = async ()=>{
        try{

           const payload={
            productId : Number( productId),
            productName:form.ProductName,
            productDescription:form.ProductDescription,
            categoryId:form.categoryId,
            isActive:form.isActive
            }
            const response:any = await updateProduct(payload);
            if(response.response_code===1){
                alert(response.data.message);
                 setForm({
                    ProductName: response.productName,
                    ProductDescription: response.productDescription,
                    categoryId: response.categoryId,
                    isActive:response.isActive,
                    Images: [], 
                });
                setExistingImages(response.images || []);
            }
        }
        catch(ex){

        }
    }
    const handleSaveProduct = async () => {
        try {
            setSaving(true);

            const formData = new FormData();

            formData.append("ProductName", form.ProductName);
            formData.append("Description", form.ProductDescription);
            formData.append("CategoryId", String(form.categoryId));
            formData.append("PrimaryImageIndex", "0"); // or selected index

            form.Images.forEach((file) => {
                formData.append("Images", file);
            });

            const response: any = await AddProductSave(formData);
            if (response.response_code === 1) {
                console.log("Product added:", response);

                alert("Product added successfully");
                setForm({
                    ProductName: "",
                    ProductDescription: "",
                    categoryId: 0,
                    isActive:"",
                    Images: [],
                });
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            }
            else {
                alert("Something went wrong");
            }

        } catch (err: any) {
            console.error(err);
            alert(err.message || "Failed to add product");
        } finally {
            setSaving(false);
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const files = Array.from(e.target.files);

        setForm((prev) => ({
            ...prev,
            Images: files,
        }));
    };

    return (
        <div className="flex bg-[#f7f7f9] min-h-screen">
            <Sidebar />

            <main className="flex-1 p-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-8">
                        {isEditMode ? "Update Product" : "Add New Product"}
                    </h1>

                    <div className="space-y-6">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Name
                            </label>
                            <input
                                name="ProductName"
                                value={form.ProductName}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter product name"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Category
                            </label>
                            <select
                                name="categoryId"
                                value={form.categoryId}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value={0}>Select category</option>
                                {categories.map((cat) => (
                                    <option key={cat.categoryId} value={cat.categoryId}>
                                        {cat.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Description
                            </label>
                            <textarea
                                rows={4}
                                name="ProductDescription"
                                value={form.ProductDescription}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm resize-none
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter product description"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Product Images
                            </label>
                                {/* Existing Images (Edit Mode) */}
{isEditMode && existingImages.length > 0 && (
  <div className="grid grid-cols-4 gap-3 mb-3">
    {existingImages.map((img) => (
      <div
        key={img.imageId}
        className="relative border rounded-lg overflow-hidden"
      >
        <img
          src={`${API_BASE_URL}/${img.imagePath}`}
          alt="Product"
          className="w-full h-24 object-cover"
        />

        {img.isPrimary && (
          <span className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded">
            Primary
          </span>
        )}
      </div>
    ))}
  </div>
)}

                            <div className="relative border border-dashed border-gray-300 rounded-lg px-4 py-3 bg-gray-50">
                                <input
                                    type="file"
                                    multiple
                                    accept="image/jpeg,image/png"
                                    onChange={handleFileChange}
                                    className="w-full text-sm text-gray-700"
                                    ref={fileInputRef}
                                />
                            </div>

                            <p className="text-xs text-gray-500 mt-1">
                                Upload JPEG or PNG images (multiple allowed)
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 pt-6 border-t">
                            <button
                                disabled={saving}
                                // onClick={handleSaveProduct}
                                onClick={isEditMode ? handleUpdateProduct : handleSaveProduct}
                                className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium
                   hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {saving ? "Saving..." : "Save Product"}
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}