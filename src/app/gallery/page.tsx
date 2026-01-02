"use client";

import Link from "next/link";
import Header from "../components/Header";
const filters = [
  "All Projects",
  "Exteriors",
  "Interiors",
  "Commercial",
  "On-Site",
];

const projects = [
  {
    category: "Residential",
    title: "Eco-Lodge Series A",
    location: "Austin, Texas",
    image: "/images/gallery/eco-lodge.jpg",
  },
  {
    category: "Interior",
    title: "Custom Stairway",
    location: "Denver, CO",
    image: "/images/gallery/stairway.jpg",
  },
  {
    category: "Residential",
    title: "Studio Pod",
    location: "San Francisco, CA",
    image: "/images/gallery/studio-pod.jpg",
  },
  {
    category: "Interior",
    title: "Executive Office Suite",
    location: "Seattle, WA",
    image: "/images/gallery/office.jpg",
  },
  {
    category: "Residential",
    title: "Alpine Retreat",
    location: "Aspen, CO",
    image: "/images/gallery/alpine.jpg",
  },
  {
    category: "On-Site",
    title: "Logistics Hub Phase 1",
    location: "Phoenix, AZ",
    image: "/images/gallery/logistics.jpg",
  },
  {
    category: "Commercial",
    title: "Pop-up Retail Unit",
    location: "Portland, OR",
    image: "/images/gallery/retail.jpg",
  },
  {
    category: "Interior",
    title: "Luxury Finishings",
    location: "Miami, FL",
    image: "/images/gallery/luxury.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div>
        <Header/>
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
            <Link
              href="/catalog"
              className="inline-block mt-8 bg-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              View Catalog →
            </Link>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition
                ${
                  i === 0
                    ? "bg-blue-700 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GALLERY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="break-inside-avoid bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />

              <div className="p-4">
                <span className="text-xs font-semibold text-primary uppercase">
                  {project.category}
                </span>
                <h3 className="mt-1 font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  📍 {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="text-center mt-12">
          <button className="text-sm font-semibold text-gray-600 hover:text-primary">
            Load more projects ↓
          </button>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#f3f4f6] py-20 mt-20">
        <div className="max-w-[640px] mx-auto text-center px-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            🧭
          </div>

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to build your space?
          </h2>

          <p className="mt-4 text-gray-600">
            Whether you need a single office unit or a multi-story modular
            complex, our engineers are ready to discuss your project
            specifications.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="bg-white border px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER MINI */}
      <footer className="bg-[#0e1117] border-t">
        <div className="max-w-[1280px] mx-auto px-4 py-6 flex justify-between text-sm text-[#99a1af]">
          <span>© 2024 PrefabStruct Industries. All rights reserved.</span>
          <span>PrefabStruct</span>
        </div>
      </footer>
    </main>
    </div>
  );
}
