import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function ProductCard({da}) {
    const {category,product_name,price,image,_id}=da
  return (
    <div className='h-full'>
    <div className='h-[400px]'>
        <Image 
          src={image}
        height={400}
        width={400}
        alt={product_name}
        className='h-full w-full object-cover object-center bg-gray-50 rounded-lg p-2'
        />
        </div>
       
        <div className='mt-3'>
            <p className='opacity-80'>{category}</p>
            <h2 className='text-lg font-semibold'>{product_name}</h2>
            <p  className='text-lg font-semibold flex justify-between items-center'>${price}<Link href={`/products/${_id}`}><FaArrowRight /></Link></p>
        </div>
        
        
    </div>
  )
}