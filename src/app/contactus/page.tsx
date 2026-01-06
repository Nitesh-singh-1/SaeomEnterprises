"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { postPublic } from "@/lib/services/baseService";
import { getCategories } from "@/lib/services/fileservice";

export interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

export default function ContactPage() {
const [categories, setCategories] = useState<Category[]>([]);
const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);


  useEffect(()=>{
    const getAllCategory = async ()=>{
      try{
        const response = await getCategories("actv");
        console.log(response);
        setCategories(response);
      }
      catch(ex){

      }
    };
    getAllCategory();
  },[])

  return (
    <div>
    <Header />
    <main className="bg-[#f7f7f9] min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4 py-16">
        
        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Let&apos;s Build Your Space
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Fill out the form below for a quote on our portable cabins or
            prefabricated structures. Our engineering team typically responds
            within 24 hours.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
            <form className="grid md:grid-cols-2 gap-6">
              
              {/* FULL NAME */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* WORK EMAIL */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter Mobile"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* PRODUCT */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Interested Product
                </label>
                <select
    value={selectedCategoryId}
    onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
    className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value={0}>Select a structure type...</option>

    {categories.map((cat) => (
      <option key={cat.categoryId} value={cat.categoryId}>
        {cat.categoryName}
      </option>
    ))}
  </select>
              </div>

              {/* DETAILS */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your requirements, dimensions, or specific needs..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* SUBMIT */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message →
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="space-y-6">
            
            {/* CONTACT CARD */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-6">
                Contact Info
              </h3>

              <div className="space-y-5 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-gray-900">Headquarters</p>
                  <p>
                    123 Modular Way, Suite 400 <br />
                    Industrial District <br />
                    Austin, TX 78701
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-blue-700 font-medium">
                    Mon–Fri, 9am – 6pm EST
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p>sales@prefabpro.com</p>
                  <p>support@prefabpro.com</p>
                </div>
              </div>
            </div>

            {/* MAP CARD */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <button className="bg-white px-4 py-2 rounded-full shadow font-semibold text-sm flex items-center gap-2">
                  📍 View on Map
                </button>
              </div>
            </div>

            {/* BADGES */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                ✅ <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                🚚 <span>Nationwide Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="border-t bg-[#0e1117]">
        <div className="max-w-[1280px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between text-sm text-[#99a1af] gap-4">
          <p>© 2023 PrefabPro Structures. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-700 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-gray-700 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
