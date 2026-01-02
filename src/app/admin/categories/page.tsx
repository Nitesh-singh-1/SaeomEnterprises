import Sidebar from "@/app/components/admin/Sidebar";
import CategoryTable from "@/app/components/admin/CategoryTable";

export default function CategoriesPage() {
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

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
            ➕ Add New Category
          </button>
        </div>

        {/* FILTERS */}
        <div className="bg-white p-4 rounded-xl border flex gap-4 mb-6">
          <input
            placeholder="Search categories by name..."
            className="flex-1 border rounded-lg px-4 py-2"
          />

          <select className="border rounded-lg px-4 py-2">
            <option>All Statuses</option>
          </select>

          <select className="border rounded-lg px-4 py-2">
            <option>Sort by Date</option>
          </select>
        </div>

        {/* TABLE */}
        <CategoryTable />

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
