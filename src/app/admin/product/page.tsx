"use client";
import Sidebar from "@/app/components/admin/Sidebar";
import { productColumn } from "@/app/components/Datatable/columns";
import { DataTable } from "@/app/components/Datatable/DataTable"
import { addCategory, getAllProduct, getCategories } from "@/lib/services/fileservice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface Product {
    productId: number;
    productName: string;
    productDescription: string;
    categoryId: number;
    categoryName: string;
    isActive: boolean;
    createdOn: string;
    primaryImage: string;
    images: Image[];
}
export interface Image {
    imageId: number;
    imagePath: string;
    isPrimary: boolean;
}

export default function Product() {
    const [products, setProduct] = useState<Product[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [productName, setProductName] = useState("");
    const [saving, setSaving] = useState(false);
    const router = useRouter();
    // const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

    useEffect(() => {
        const getAProduct = async () => {
            try {
                const response: any = await getAllProduct();
                console.log(response);
                setProduct(response.data);
            }
            catch (ex) {

            }
        };
        getAProduct();
    }, [])
    const handleProductAdd = () => {
        router.push('/admin/product/AddProduct')
    }

    return (
        <div className="flex bg-[#f7f7f9] min-h-screen">

            <Sidebar />

            {/* MAIN */}
            <main className="flex-1 p-8">

                {/* BREADCRUMB */}
                <p className="text-sm text-gray-500 mb-2">
                    Dashboard / Catalog / products
                </p>

                {/* HEADER */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">Manage Products</h1>
                        <p className="text-gray-600">
                            Manage your product lines and visibility.
                        </p>
                    </div>

                    {/* <button onClick={handleProductAdd} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
                        ➕ Add New Product
                    </button> */}
                    {/* <div className="flex justify-end gap-3 pt-6 border-t"> */}
                    <button
                        //disabled={saving}
                        onClick={handleProductAdd}
                        className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium
                   hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        { "Add Product"}
                    </button>
                    {/* </div> */}
                </div>



                {/* TABLE */}
                <DataTable
                    data={products}
                    columns={productColumn}
                    searchColumn="productName"
                    searchPlaceholder="Search Product"
                    linkColumn={{
                        columnId: "productName",
                        getHref: (row) => `/admin/product/AddProduct?productId=${row.productId}`,
                    }}

                //loading={false}
                />

                {/* INFO CARDS */}
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <InfoCard
                        title="Visibility Control"
                        desc="Use the toggle to instantly show or hide products on the public site."
                        icon="👁"
                    />
                    <InfoCard
                        title="Thumbnails"
                        desc="High-quality thumbnails improve navigation. Recommended size: 400×400px."
                        icon="🖼"
                    />
                    <InfoCard
                        title="Zero Products"
                        desc="products with zero products are automatically hidden from catalog."
                        icon="🚫"
                    />
                </div>

            </main>
        </div>
    );
}
function InfoCard({ title, desc, icon }: any) {
    return (
        <div className="bg-white border rounded-xl p-6">
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}