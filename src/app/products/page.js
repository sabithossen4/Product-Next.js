// app/products/page.jsx
import Link from "next/link";
import React from "react";

export default async function ProductsPage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      cache: "no-store", // 
    });
    const products = await res.json();

    return (
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="mb-2">{product.description}</p>
              <p className="font-bold text-green-600 mb-2">${product.price}</p>
              <Link href={`/products/${product._id}`} className="text-blue-500 hover:underline">
      View Details
    </Link>
            </div>
            
          ))}
          
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 text-red-600">
        Failed to load products: {error.message}
      </div>
    );
  }
}
