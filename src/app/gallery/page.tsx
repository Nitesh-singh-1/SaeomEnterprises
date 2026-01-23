"use client";

import Link from "next/link";
import Header from "../components/Header";

const images = Array.from({ length: 29 }, (_, i) => 
  `/gallery/gallery-${i + 1}.jpeg`
);

export default function GalleryPage() {
  return (
    <div>
      <Header />
      <main className="bg-[#f7f7f9]">
        <div className="max-w-[1280px] mx-auto px-4 py-12">

          {/* HERO */}
          <div
            className="relative rounded-2xl overflow-hidden mb-14"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('/images/gallery/hero1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="py-24 px-6 text-center text-white max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Craftsmanship in Every Detail
              </h1>
              <p className="mt-4 text-gray-200">
                Explore our portfolio of custom prefabricated structures, from
                remote eco-cabins to fully operational commercial units.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link
                  href="/catalog"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
                >
                  View Catalog →
                </Link>

                <a
                  href="/brochure/Saieom_Enterprises_Broucher.pdf"
                  download
                  className="bg-white/90 text-gray-900 px-6 py-3 rounded-lg font-bold border hover:bg-gray-100 transition"
                >
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {images.map((src, i) => (
    <div
      key={i}
      className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition"
    >
      <img
        src={src}
        alt={`Gallery image ${i + 1}`}
        className="w-full h-72 object-cover hover:scale-105 transition duration-300"
      />
    </div>
  ))}
</div>







        </div>




      </main>
    </div>
  );
}
