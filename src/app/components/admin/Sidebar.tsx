"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      
      {/* LOGO */}
      <div>
        <div className="px-6 py-5 flex items-center gap-3 border-b">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            🏠
          </div>
          <span className="font-bold text-lg">CabinCraft</span>
        </div>

        {/* NAV */}
        <nav className="px-4 py-6 space-y-2 text-sm">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            📊 Dashboard
          </Link>

          <Link
            href="/admin/categories"
            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold"
          >
            🗂 Categories
          </Link>

          <Link href="/admin/products" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            📦 Products
          </Link>

          <Link href="/admin/customers" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
            👥 Customers
          </Link>
        </nav>
      </div>

      {/* FOOTER */}
      <div className="px-4 py-6 border-t space-y-3 text-sm">
        <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
          ⚙ Settings
        </Link>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 w-full">
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
