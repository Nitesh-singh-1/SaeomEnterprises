"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { postPublic } from "@/lib/services/baseService";
import { getCategories, addEnquiry } from "@/lib/services/fileservice";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import CustomSelect from "@/components/CustomSelect";

export interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

export default function ContactPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const searchParams = useSearchParams();
  const categoryIdFromUrl = Number(searchParams.get("categoryId"));
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    categoryId: 0,
    message: "",
  });


  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const response = await getCategories("actv");
        console.log(response);
        setCategories(response);
      }
      catch (ex) {

      }
    };
    getAllCategory();
  }, [])

  useEffect(() => {
    if (categoryIdFromUrl) {
      setForm(prev => ({
        ...prev,
        categoryId: categoryIdFromUrl,
      }));
    }
  }, [categoryIdFromUrl]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // ✅ Frontend validation
    if (!form.fullName.trim() || !form.phone.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Missing required details",
        // html: `
        //   <p>Please fill the following mandatory fields:</p>
        //   <ul style="text-align:left; margin-top:10px">
        //     ${!form.fullName ? "<li>• Full Name</li>" : ""}
        //     ${!form.phone ? "<li>• Phone Number</li>" : ""}
        //   </ul>
        // `,
        text:"Please fill full name and phone to continue.",
        confirmButtonColor: "#1d4ed8",
      });
      return;
    }
  
    if (!form.categoryId) {
      Swal.fire({
        icon: "warning",
        title: "Select a product",
        text: "Please select an Interested Product before submitting.",
        confirmButtonColor: "#1d4ed8",
      });
      return;
    }
  
    const payload = {
      FullName: form.fullName,
      ContactNumber: form.phone,
      Email: form.email,
      Company: form.company,
      ProductCategoryID: form.categoryId,
      QueryMade: form.message,
    };
  
    try {
      await addEnquiry(payload);
  
      Swal.fire({
        icon: "success",
        title: "Enquiry Sent!",
        width: 360,
        padding: "1.5rem",
        text: "Thank you for contacting us. Our team will reach out within 24 hours.",
        confirmButtonColor: "#1d4ed8",
        customClass: {
          popup: "swal-compact",
          title: "swal-compact-title",
          htmlContainer: "swal-compact-text",
          icon: "swal-compact-icon",
        },
      });
  
      // reset form
      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        categoryId: 0,
        message: "",
      });
  
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Submission failed",
        text: err.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#1d4ed8",
      });
    }
  };
  

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
  Full Name <span className="text-red-500">*</span>
</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    placeholder="Enter Full Name"
                    onChange={handleChange}
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* PHONE */}
                <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
  Phone Number <span className="text-red-500">*</span>
</label>
                  <input
                    type="tel"
                    value={form.phone}
                    name="phone"
                    required
                    onChange={handleChange}
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
                    value={form.company}
                    name="company"
                    onChange={handleChange}
                    placeholder="Enter Company Name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* PRODUCT */}
                <div className="md:col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
  Interested Product <span className="text-red-500">*</span>
</label>
                  {/* <select
                    value={form.categoryId}
                    name="categoryId"
                    required
                    // onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value={0}>Select a structure type...</option>

                    {categories.map((cat) => (
                      <option key={cat.categoryId} value={cat.categoryId}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select> */}
                  <CustomSelect
    value={form.categoryId}
    placeholder="Select a structure type..."
    options={categories.map(cat => ({
      value: cat.categoryId,
      label: cat.categoryName,
    }))}
    onChange={(val) =>
      setForm(prev => ({ ...prev, categoryId: val }))
    }
  />
                </div>

                {/* DETAILS */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    name="message"
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, dimensions, or specific needs..."
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* SUBMIT */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    onClick={handleSubmit}
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
                    <p className="font-semibold text-gray-900">Office Address</p>
                    <p>
                      House No. 2213, Near Siddhivinayak Kata <br />
                      Patil Compound,
                      Behind Prince Dhaba <br />
                      Pimpri Dahisar – 400612
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p>+91-91362 58447 / 92266 23329</p>
                    <p className="text-blue-700 font-medium">
                      Mon–Fri, 9am – 6pm EST
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p>Saieomenterprise@gmail.com</p>
                    {/* <p>support@prefabpro.com</p> */}
                  </div>
                </div>
              </div>

              {/* MAP CARD */}
              <div className="bg-white rounded-xl shadow-sm p-6">
  <h3 className="font-bold text-lg text-gray-900 mb-4">
    Our Location
  </h3>

  <div className="rounded-lg overflow-hidden border">
    <iframe
      title="Saieom Enterprises Location"
      src="https://www.google.com/maps?q=19.1183683,73.0569212&z=15&output=embed"
      width="100%"
      height="280"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="border-0"
    />
  </div>

  {/* Open in Google Maps */}
  <a
   href="https://www.google.com/maps?q=19.1183683,73.0569212&z=15&output=embed"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"
  >
    📍 Open in Google Maps
  </a>
</div>


              {/* BADGES */}
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  ✅ <span>ISO G001-2015 Certified</span>
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
