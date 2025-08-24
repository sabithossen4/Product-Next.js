import React from "react";

export default async function ProductDetailsPage({ params }) {
  try {
    const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });

    const product = await res.json();

    if (!res.ok) {
      return <p className="p-6 text-red-600">{product.message || "Product not found"}</p>;
    }

    return (
      <div className="max-w-3xl mx-auto p-6 border rounded shadow mt-10">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="mb-2"><span className="font-semibold">Description:</span> {product.description}</p>
        <p className="mb-2"><span className="font-semibold">Price:</span> ${product.price}</p>
        <p className="text-gray-500 text-sm">Created at: {new Date(product.createdAt).toLocaleString()}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 text-red-600">
        Failed to load product: {error.message}
      </div>
    );
  }
}
