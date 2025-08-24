import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// ✅ POST - Add Product
export async function POST(req) {
  try {
    const body = await req.json();
    const collection = dbConnect(collectionNamesObj.productCollection);

    const res = await collection.insertOne(body);

    return new Response(
      JSON.stringify({ message: "Product added successfully!", insertedId: res.insertedId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to add product", error: error.message }),
      { status: 500 }
    );
  }
}

// ✅ GET - Get All Products
export async function GET() {
  try {
    const collection = dbConnect(collectionNamesObj.productCollection);
    const products = await collection.find().toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch products", error: error.message }),
      { status: 500 }
    );
  }
}
