import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const ProductZX9 = () => {
  return (
    <div className="h-[600px] relative  bg-[#D87D4A] flex flex-col items-center py-[57px] rounded-lg lg:h-[580px] lg:flex-row lg:justify-between overflow-hidden">
    <picture>
        <source media="(max-width: 650px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874468/audiophiles/assets/home/mobile/image-speaker-zx9_erq9qt.png" width={172} />
        <source media="(max-width: 768px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874468/audiophiles/assets/home/tablet/image-speaker-zx9_i1cb6f.png" />
        <Image className='lg:absolute top-[96px] left-[117px]' src="https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/desktop/image-speaker-zx9_kfaxdb.png" alt='' width={410} height={493} />
    </picture>
    <section className='text-center text-white mt-8 lg:text-left lg:mr-[95px]'>
        <h3 className='text-[36px] font-bold mb-6 lg:text-[56px] lg:w-[261px] leading-[56px] font uppercase'>zx9 speaker</h3>
        <p className='mb-6 text-[15px] opacity-75 w-[280px]  lg:w-[349px]'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link href={"/products/" + 'zx9-speaker'}><button className='bg-black px-[31px] py-[15px] hover:bg-[#4C4C4C]'>SEE PRODUCT</button></Link>
    </section>
</div>
  )
}

export default ProductZX9