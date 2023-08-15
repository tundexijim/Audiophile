import React from 'react'
import Image from 'next/image'
import Back from './Back'

const ProductDetail = ({ name, status, description, price, image, children}) => {
  
  return (
    <div className='px-6 lg:px-[165px]'>
    <Back />
    <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center'>
        <picture className='h-[327px] relative lg:h-[560px] lg:w-[540px]'>
            <source media="(max-width: 650px)" srcSet={image.mobile} />
            <source media="(max-width: 768px)" srcSet={image.tablet} />
            <Image src={image.desktop} alt="category-product" fill/>
        </picture>
        <div className='flex flex-col gap-6  lg:w-[445px]'>
            {status && <span className='uppercase text-[#D87D4A] tracking-[10px]'>New product</span>}
            <h3 className='font-bold text-[28px] uppercase'>{name}</h3>
            <p className='opacity-50'>{description}</p>
            <h4 className='text-[18px] font-bold'>${new Intl.NumberFormat('en-US').format(price)}</h4>
           {children}
        </div>
    </div>
</div>
  )
}

export default ProductDetail