import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MyProduct({dat,index}) {
   const {category,product_name,price,features,
product_code,availability,image
}=dat
  return (
    <tr>
        <th>          
            {index+1}         
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Image
                  src={image}
                  width={500}
                  height={500}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product_name}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
        {product_code}
          <br />
          <span className="badge badge-ghost badge-sm">{price}</span>
        </td>
        <td>{availability}</td>
        <th className='flex items-center gap-2 '>
        <Link href={`/products/${dat._id}`}><button className="btn btn-info text-white btn-sm">Details</button></Link>
         
        </th>
      </tr>
  )
}