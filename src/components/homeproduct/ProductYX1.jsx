import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const ProductYX1 = () => {
  return (
    <div className='flex flex-col gap-6 h-[424px] lg:flex-row lg:h-[320px]'>
    <picture className='flex-1 relative'> 
        <source media="(max-width: 650px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/mobile/image-earphones-yx1_txx4y1.jpg" />
        <source media="(max-width: 768px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/mobile/image-earphones-yx1_txx4y1.jpg" />
        <Image src="https://res.cloudinary.com/tundexijim/image/upload/v1690874466/audiophiles/assets/home/desktop/image-earphones-yx1_br3ch5.jpg" className='rounded-lg' alt='' fill/>
    </picture>
    <section className='bg-[#F1F1F1] font-bold flex-1 rounded-lg flex flex-col justify-center pl-6 lg:pl-[95px]'>
        <h3 className='text-[28px] mb-8 uppercase'>YX1 earphones</h3>
        <Link href={"/products/" + 'yx1-earphones'}><button className='px-[31px] py-[15px] border border-solid border-black text-[13px] hover:bg-black hover:text-white'>SEE PRODUCT</button></Link>
    </section>
</div>
  )
}

export default ProductYX1