
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET=async()=>{
     const session=await getServerSession(authOptions)
  console.log(session)
   if(session)
   { 
      const email=session?.user?.email
      const products=dbConnect("products")
   const result=await products.find({email}).toArray();
   console.log(result)
    return NextResponse.json(result)
   
   }
   
   return NextResponse.json([])

    
}