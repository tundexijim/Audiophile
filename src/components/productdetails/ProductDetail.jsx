import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ProductDetail = ({id, name, status, description, price, image}) => {
    console.log(name)
    const inCart = false;
  return (
    <div className='px-6 lg:px-[165px]'>
    <Link href='/'><button className='mb-6 opacity-50 text-[15px]'>Go Back</button></Link>
    <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center'>
        <picture className='h-[327px] relative lg:h-[560px] lg:w-[540px]'>
            <source media="(max-width: 650px)" srcSet={image.mobile} />
            <source media="(max-width: 768px)" srcSet={image.tablet} />
            <Image src={image.desktop} alt="category-product" fill/>
        </picture>
        <section className='flex flex-col gap-6  lg:w-[445px]'>
            {status && <span className='uppercase text-[#D87D4A] tracking-[10px]'>New product</span>}
            <h3 className='font-bold text-[28px] uppercase'>{name}</h3>
            <p className='opacity-50'>{description}</p>
            <h4 className='text-[18px] font-bold'>${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h4>
                <div className='flex gap-4'>
                {!inCart ? <>
                    <div className='bg-[#F1F1F1] flex w-[120px] h-[48px] px-[15px]'>
                        <button className='opacity-25'>-</button>
                        <input className='bg-[#F1F1F1] text-center w-[100%] focus:outline-none' type="text" value={1} />
                        <button className='opacity-25'>+</button>
                    </div>
                    <button className='bg-[#D87D4A] px-[34px] text-white uppercase text-[13px]'>Add to cart</button>
                </> :
                    <button disabled className= ' bg-gray-500 px-[34px] py-[15px] text-white uppercase text-[13px] cursor-not-allowed'>Item in cart</button>
                }
            </div>
        </section>
    </div>
</div>
  )
}

export default ProductDetail