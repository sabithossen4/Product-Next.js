import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET=async()=>{
    const products=dbConnect("products")
    const result=await products.find({}).sort({price:1}).limit(6).toArray();
    
    return NextResponse.json(result)
}