import React from 'react'
import Image from 'next/image'
const BottomInfo = () => {
  return (
    <div className='flex flex-col-reverse px-6 mb-[120px] gap-10 lg:flex-row lg:px-[165px] lg:gap-[125px] lg:justify-between'>
    <section className='text-center w-[327px] m-auto lg:text-left lg:flex-1'>
        <h3 className='uppercase text-[28px] font-bold mb-8 lg:text-[40px] lg:w-[445px]'>Bringing you the <span className='text-[#D87D4A]'>best</span> gear</h3>
        <p className='opacity-50 lg:w-[445px]'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </section>
    <div className='relative h-[300px] lg:h-[588px] lg:flex-1'>
    <picture>
        <source media="(max-width: 650px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874463/audiophiles/assets/shared/mobile/image-best-gear_zjblsu.jpg" />
        <source media="(max-width: 768px)" srcSet="https://res.cloudinary.com/tundexijim/image/upload/v1690874464/audiophiles/assets/shared/tablet/image-best-gear_e1rwss.jpg" />
        <Image src="https://res.cloudinary.com/tundexijim/image/upload/v1690874461/audiophiles/assets/shared/desktop/image-best-gear_fy1blx.jpg" alt="bottomInfo" className='rounded-lg' fill />
    </picture>
    </div>
</div>
  )
}

export default BottomInfo