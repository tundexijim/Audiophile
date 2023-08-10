import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductZX7 = () => {
  return (
    <div className='flex items-center relative h-[320px]'>
    <picture>
        <source media="(max-width: 650px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/mobile/image-speaker-zx7_ghg8vm.jpg" />
        <source media="(max-width: 768px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874468/audiophiles/assets/home/tablet/image-speaker-zx7_xqmhaf.jpg" />
        <Image src="https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/desktop/image-speaker-zx7_uv9ouj.jpg" alt='' fill className='rounded-lg'/>
    </picture>
    <section className='absolute left-[24px] font-bold lg:left-[95px]'>
        <h3 className='text-[28px]  mb-8 uppercase'>ZX7 speaker</h3>
        <Link href={"/products/" + 'zx7-speaker'}><button className='px-[31px] py-[15px] border border-solid border-black text-[13px] hover:bg-black hover:text-white'>SEE PRODUCT</button></Link>
    </section>
</div>
  )
}

export default ProductZX7