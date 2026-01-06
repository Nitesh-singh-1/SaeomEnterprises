"use client";
import Sidebar from "@/app/components/admin/Sidebar";
import { AddProductSave, getCategories } from "@/lib/services/fileservice";
import { useEffect, useState } from "react";

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
        Images: [] as File[],
    });
    const [saving, setSaving] = useState(false);
       const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
    const [categories, setCategories] = useState<Category[]>([]);
      useEffect(()=>{
        const getAllCategory = async ()=>{
          try{
            const response = await getCategories("actv");
            console.log(response);
            setCategories(response);
          }
          catch(ex){
    
          }
        };
        getAllCategory();
      },[])
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

    const response:any = await AddProductSave(formData);
    if(response.response_code===1){
    console.log("Product added:", response);

    alert("Product added successfully");
     setForm({
      ProductName: "",
      ProductDescription: "",
        categoryId: 0,
        Images: [],
    });
    }
    else{
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
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow border p-6">
                    <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

                    <div className="space-y-5">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product Name
                            </label>
                            <input
                                name="ProductName"
                                value={form.ProductName}
                                onChange={handleChange}
                                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter product name"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product Category
                            </label>
                            <select
                                name="categoryId"
                                value={form.categoryId}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500"
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
                            <label className="block text-sm font-medium mb-1">
                                Product Description
                            </label>
                            <textarea
                                rows={4}
                                name="ProductDescription"
                                value={form.ProductDescription}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter product description"
                            />
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Product Images (JPEG / PNG)
                            </label>
                            <input
                                type="file"
                                multiple
                                accept="image/jpeg,image/png"
                                onChange={handleFileChange}
                                className="w-full border rounded-lg px-4 py-2 bg-white"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                You can select multiple images
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button
                                disabled={saving}
                                onClick={handleSaveProduct}
                                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
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