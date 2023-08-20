import Image from 'next/image'
import React from 'react'

const SummaryProduct = ({short, price, image, quantity}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-4 items-center'>
            <picture>
                <Image src={image} alt={short} width={64} height={64} className='w-auto h-auto' />
            </picture>
                <div>
                    <h5 className='text-[15px] font-bold'>{short}</h5>
                    <h6 className='opacity-50 text-[14px] font-bold'>${new Intl.NumberFormat('en-US').format(price)}</h6>
                </div>
        </div>
            <span className='opacity-50 text-[15px] font-bold'>x{quantity}</span>
           
        </div>
  )
}

export default SummaryProduct