"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
const CartProduct = ({item, updateItemQuantity}) => {
    const [updatedQuantity, setupdatedQuantity] = useState(item.quantity)
    useEffect(()=>{
        updateItemQuantity(item.id, updatedQuantity)
    },[updatedQuantity])
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
            <picture>
                <Image src={item.image.desktop} alt="product" width={64} height={64}/>
            </picture>
            <div className=''>
                <h4 className='text-[15px] font-bold'>{item.short}</h4>
                <span className='text-[14px] opacity-50'>$ {new Intl.NumberFormat('en-US').format(item.price)}</span>
            </div>
        </div>
            <div className=' flex justify-between w-[96px] bg-[#F1F1F1] px-[7px] py-[11px]'>
                <button className='opacity-25' onClick={() => setupdatedQuantity(prev=>prev-1)} disabled={updatedQuantity===1}>-</button>
                <span>{updatedQuantity}</span>
                <button className='opacity-25' onClick={() => setupdatedQuantity(prev=>prev+1)}>+</button>
            </div>
        </div>
  )
}

export default CartProduct