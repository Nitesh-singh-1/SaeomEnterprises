const categories = [
  {
    name: "Site Offices",
    id: "CAT-001",
    description: "Premium insulated portable cabins for offices",
    products: 12,
    date: "Oct 24, 2023",
    active: true,
  },
  {
    name: "Portable Toilets",
    id: "CAT-002",
    description: "Hygienic sanitation units for construction sites",
    products: 8,
    date: "Nov 02, 2023",
    active: true,
  },
  {
    name: "Storage Containers",
    id: "CAT-003",
    description: "Heavy-duty steel containers for secure storage",
    products: 0,
    date: "Dec 15, 2023",
    active: false,
  },
  {
    name: "Security Cabins",
    id: "CAT-004",
    description: "Compact cabins designed for security staff",
    products: 5,
    date: "Jan 10, 2024",
    active: true,
  },
];

export default function CategoryTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">
      
      {/* HEADER */}
      <div className="grid grid-cols-6 px-6 py-4 text-xs font-semibold text-gray-500 uppercase border-b">
        <span className="col-span-2">Category</span>
        <span>Description</span>
        <span>Products</span>
        <span>Created Date</span>
        <span>Status</span>
      </div>

      {/* ROWS */}
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="grid grid-cols-6 px-6 py-5 items-center border-b last:border-none text-sm"
        >
          <div className="col-span-2">
            <p className="font-semibold">{cat.name}</p>
            <p className="text-gray-500 text-xs">ID: {cat.id}</p>
          </div>

          <p className="text-gray-600 truncate">{cat.description}</p>

          <span className="text-blue-600 font-semibold bg-blue-50 w-fit px-3 py-1 rounded-full text-xs">
            {cat.products}
          </span>

          <span className="text-gray-600">{cat.date}</span>

          {/* TOGGLE */}
          <div>
            <div
              className={`w-11 h-6 rounded-full flex items-center px-1 cursor-pointer ${
                cat.active ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div className="w-4 h-4 bg-white rounded-full transition-transform" />
            </div>
          </div>
        </div>
      ))}

      {/* FOOTER */}
      <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-600">
        <span>Showing 1 to 4 of 12 results</span>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">‹</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </div>
  );
}
