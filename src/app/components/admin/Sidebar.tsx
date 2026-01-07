"use client";

import { logout } from "@/lib/services/fileservice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const response: any = await logout();
      if (response.response_code === 1) {
        localStorage.removeItem("token");
        router.replace("/");
        alert("Logout Successful");
      } else {
        alert("Something went wrong");
      }
    } catch (ex) {
      alert("Logout failed");
    }
  };

  const navItemClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition
     ${
       pathname === path
         ? "bg-blue-50 text-blue-600 font-semibold"
         : "hover:bg-gray-100 text-gray-700"
     }`;

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
          <Link href="/admin/dashboard" className={navItemClass("/admin/dashboard")}>
            📊 Dashboard
          </Link>

          <Link href="/admin/categories" className={navItemClass("/admin/categories")}>
            🗂 Categories
          </Link>

          <Link href="/admin/product" className={navItemClass("/admin/product")}>
            📦 Products
          </Link>

          <Link href="/admin/customers" className={navItemClass("/admin/customers")}>
            👥 Customers
          </Link>
        </nav>
      </div>

      {/* FOOTER */}
      <div className="px-4 py-6 border-t space-y-3 text-sm">
        <Link href="/admin/settings" className={navItemClass("/admin/settings")}>
          ⚙ Settings
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 w-full"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}
