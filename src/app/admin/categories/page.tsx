"use client";
import Sidebar from "@/app/components/admin/Sidebar";
// import DataTable from "@/app/components/Datatable/DataTable";
import { DataTable } from "@/app/components/Datatable/DataTable"
import { categoryColumns } from "@/app/components/Datatable/columns";
import { useEffect, useState } from "react";
import { addCategory, getCategories } from "@/lib/services/fileservice";

export interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}
export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await getCategories();
        console.log(response);
        setCategories(response);
      }
      catch (ex) {

      }
    };
    getAllCategory();
  }, [])
  const handleSaveCategory = async () => {
    if (!categoryName.trim()) return;

    try {
      setSaving(true);

      const payload = {
        categoryName: categoryName.trim(),
      };

      const response:any = await addCategory(payload);
      if (response.response_code === 1) {
        console.log(response);

        // setCategories((prev) => [
        //   ...prev,
        //   {
        //     categoryId: Date.now(),
        //     categoryName: payload.categoryName,
        //     isActive: true,
        //   },
        // ]);
      }

      setShowModal(false);
      setCategoryName("");
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex bg-[#f7f7f9] min-h-screen">

      <Sidebar />

      {/* MAIN */}
      <main className="flex-1 p-8">

        {/* BREADCRUMB */}
        <p className="text-sm text-gray-500 mb-2">
          Dashboard / Catalog / Categories
        </p>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Product Categories</h1>
            <p className="text-gray-600">
              Manage your product lines and visibility.
            </p>
          </div>

          {/* <button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
            ➕ Add New Category
          </button> */}
           <button
                       
                        onClick={() => setShowModal(true)}
                        className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium
                   hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {"Add Category"}
                    </button>
        </div>



        {/* TABLE */}
        {/* <DataTable
          data={categories}
          columns={categoryColumns}
          //loading={false}
        /> */}
        <DataTable
                            data={categories}
                            columns={categoryColumns}
                            searchColumn="categoryName"
                            searchPlaceholder = "Search Category"
        
                            //loading={false}
                        />

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <InfoCard
            title="Visibility Control"
            desc="Use the toggle to instantly show or hide categories on the public site."
            icon="👁"
          />
          <InfoCard
            title="Thumbnails"
            desc="High-quality thumbnails improve navigation. Recommended size: 400×400px."
            icon="🖼"
          />
          <InfoCard
            title="Zero Products"
            desc="Categories with zero products are automatically hidden from catalog."
            icon="🚫"
          />
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl w-full max-w-md shadow-lg">

              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h2 className="text-lg font-semibold">Add New Category</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Category Name
                  </label>
                  <input
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder="Enter category name"
                    className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-lg border"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSaveCategory}
                    disabled={saving}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
