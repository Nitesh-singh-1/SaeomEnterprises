// 'use client';
// import { getAllProduct } from "@/lib/services/fileservice";
// import { useEffect, useState } from "react";
// export interface Product {
//     productId: number;
//     productName: string;
//     productDescription: string;
//     categoryId: number;
//     categoryName: string;
//     isActive: boolean;
//     createdOn: string;
//     primaryImage: string;
//     images: Image[];
// }
// export interface Image {
//     imageId: number;
//     imagePath: string;
//     isPrimary: boolean;
// }
// export default function productPublic(){
//     const [products, setProduct] = useState<Product[]>([]);
//     useEffect(() => {
//         const getAProduct = async () => {
//             try {
//                 const response: any = await getAllProduct();
//                 console.log(response);
//                 setProduct(response.data);
//             }
//             catch (ex) {

//             }
//         };
//         getAProduct();
//     }, [])

//     return(
// <div>
//     <p>Hi from public product page</p>
// </div>
//     );
// }

"use client";

import { getAllProduct } from "@/lib/services/fileservice";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

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

const IMAGE_BASE_URL = "https://localhost:7257/"; 
// example: https://api.yoursite.com/

export default function ProductPublic() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res: any = await getAllProduct();
        setProducts(res.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="text-gray-500">Loading products...</span>
      </div>
    );
  }

  return (
    <div>
        <Header />
      {/* <Hero /> */}
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Products
        </h1>
        <p className="text-gray-500 mt-2">
          Engineered spaces for every requirement
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.productId}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <div className="h-56 w-full overflow-hidden bg-gray-100">
              <img
                src={`${IMAGE_BASE_URL}${product.primaryImage}`}
                alt={product.productName}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="text-xs text-blue-600 font-medium uppercase">
                {product.categoryName}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-gray-800">
                {product.productName}
              </h3>

              <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                {product.productDescription}
              </p>

              {/* Button */}
              <button
                className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition"
                onClick={() =>
                  console.log("Get quote for", product.productId)
                }
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {products.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          No products available.
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}
