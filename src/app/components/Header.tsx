"use client";
import Link from "next/link";

export default function Header() {
  

    return (
        <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-[1280px] bg-[#ffffff] mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                        🏠
                    </div>
                    <h2 className="font-bold text-lg">Saeom Enterprises</h2>
                </div>

                <nav className="hidden md:flex gap-8 items-center">
                    <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium hover:text-primary transition"
          >
            Products
          </Link>

          <Link
            href="/why-us"
            className="text-sm font-medium hover:text-primary transition"
          >
            Why Us
          </Link>

          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-primary transition"
          >
            Gallery
          </Link>

          <Link
            href="/contactus"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Get a Quote
          </Link>
                </nav>
            </div>
        </header>
    );
}
