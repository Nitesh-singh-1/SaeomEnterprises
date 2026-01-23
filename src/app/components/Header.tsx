"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              🏠
            </div>
            <h2 className="font-bold text-lg">Saieom Enterprises</h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/">Home</Link>
            <Link href="/product">Products</Link>
            <Link href="/whyus">Why Us</Link>
            <Link href="/gallery">Gallery</Link>
            <Link
              href="/contactus"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg font-bold"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-bold">Menu</h3>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/product" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/whyus" onClick={() => setOpen(false)}>Why Us</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link
            href="/contactus"
            onClick={() => setOpen(false)}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}
