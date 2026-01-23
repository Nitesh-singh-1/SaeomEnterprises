

"use client";

import { useEffect, useState } from "react";
import { getAllProduct } from "@/lib/services/fileservice";
import { API_BASE_URL } from "@/config/apiurl";
import { useRouter } from "next/navigation";
export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  categoryId: number;
  categoryName: string;
  isActive: boolean;
  createdOn: string;
  primaryImage: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res: any = await getAllProduct();
        setProducts(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className="py-20" id="products">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Our Product Range</h2>

        <div className="flex justify-between items-end w-full mb-8">
          <p className="text-gray-500 text-sm font-medium">
            Robust, modular solutions tailored for every environment.
          </p>

          <a
            href="/product"
            className="text-blue-700 font-bold text-sm hover:underline"
          >
            View Full Catalog →
          </a>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-gray-500">Loading products...</p>
        )}

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((p) => (
            <div
              key={p.productId}
              className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow"
            >
              {/* Image */}
              <div className="h-40 mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={`${API_BASE_URL}${p.primaryImage}`}
                  alt={p.productName}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">
                {p.productName}
              </h3>

              <p className="text-gray-500 mb-4 line-clamp-2">
                {p.productDescription}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600 font-semibold">
                  {p.categoryName}
                </span>

                <button className="text-primary font-bold" onClick={() =>
    router.push(
      `/contactus?categoryId=${p.categoryId}`
    )
  } >
                  Send Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products available.
          </p>
        )}
      </div>
    </section>
  );
}
