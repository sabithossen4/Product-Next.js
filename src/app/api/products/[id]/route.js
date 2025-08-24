import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    const { id } = params; // URL থেকে ID নেওয়া
    const collection = dbConnect(collectionNamesObj.productCollection);

    const product = await collection.findOne({ _id: new ObjectId(id) });

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to fetch product", error: error.message }), { status: 500 });
  }
}
