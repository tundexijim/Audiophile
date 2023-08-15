import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Others = ({others}) => {
  return (
            <div className='mt-[120px] text-center px-6 mb-[120px] lg:px-[165px]'>
                <h4 className='mb-[40px] uppercase text-[24px] font-bold lg:mb-[64px]'>You may also like</h4>
                <div className='flex flex-col gap-14 lg:flex-row lg:gap-[30px]'>
                  {others && others.map((item, index) => <div key={index} className='flex flex-col gap-8 flex-1'>
              <div className='relative h-[120px] lg:h-[318px]'>
            <picture className=''>
                <source media="(max-width: 650px)" srcSet={item.image.mobile} />
                <source media="(max-width: 768px)" srcSet={item.image.tablet} />
                <Image src={item.image.desktop} alt="other-product" fill/>
            </picture>
            </div>
            <section className='flex flex-col gap-8'>
                <h5 className='text-[24px] font-bold uppercase'>{item.name}</h5>
                <Link href={"/products/" + item.slug}><button className='uppercase bg-[#D87D4A] px-[30px] py-[15px] text-[13px] text-white font-bold'>see product</button></Link>
            </section>
            </div>
            )}
                </div>
            </div>
  )
}

export default Others