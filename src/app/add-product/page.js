"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

export const dynamic = "force-dynamic";

export default function ProductForm() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    category: "",
    product_name: "",
    price: "",
    features: ["", "", ""], // 3 points
    product_code: "",
    availability: "",
    image: "",
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;

    if (name === "feature" && index !== null) {
      const newFeatures = [...formData.features];
      newFeatures[index] = value;
      setFormData((prev) => ({ ...prev, features: newFeatures }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      username: session?.user?.name,
      email: session?.user?.email,
    };
     const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_SITE_URL
      : 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.acknowledged) {
      toast.success("Product Added Successfully!");
    } else {
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="my-20">
      <h2 className="text-4xl font-semibold mb-6 text-center my-10">
        Add Product
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-8 border-2 border-[#318892] rounded-lg shadow-md space-y-6"
      >
        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Product Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Features */}
        <div>
          <label className="block mb-1 font-medium">Features</label>
          {formData.features.map((feat, index) => (
            <input
              key={index}
              type="text"
              name="feature"
              value={feat}
              onChange={(e) => handleChange(e, index)}
              placeholder={`Feature ${index + 1}`}
              className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          ))}
        </div>

        {/* Product Code */}
        <div>
          <label className="block mb-1 font-medium">Product Code</label>
          <input
            type="text"
            name="product_code"
            value={formData.product_code}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Availability */}
        <div>
          <label className="block mb-1 font-medium">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        

        

        <button
          type="submit"
          className="w-full bg-[#318892] text-white p-3 rounded mt-4"
        >
          Submit Product
        </button>
      </form>
    </div>
  );
}