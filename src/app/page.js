import Image from 'next/image'
import Link from 'next/link'
import Category from '@/components/shared/Category'
import ProductZX9 from '@/components/homeproduct/ProductZX9'
import ProductZX7 from '@/components/homeproduct/ProductZX7'
import ProductYX1 from '@/components/homeproduct/ProductYX1'
import BottomInfo from '@/components/shared/BottomInfo'
export default function Home() {
  return (
    <main>
    <div className='relative h-[100vh] flex items-center justify-center text-center text-white lg:text-left lg:p-[165px] lg:justify-start'>
        <picture>
          <source srcSet='https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/mobile/image-header_ltouni.jpg' media="(max-width: 650px)"/>
          <source srcSet='https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/tablet/image-header_ze3vaf.jpg' media="(max-width: 768px)" />
          <Image src='https://res.cloudinary.com/tundexijim/image/upload/v1690874467/audiophiles/assets/home/desktop/image-hero_v4kbch.jpg' alt='' fill/>
        </picture>
        <div className='absolute w-[328px] lg:w-[349px]'>
          <p className='uppercase opacity-50 text-[14px] mb-4 tracking-[10px]'>New Product</p>
          <h1 className='text-[36px] font-bold leading-[40px] mb-6'>XX99 MARK II HEADPHONE</h1>
          <p className='opacity-75 mb-7'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</p>
          <Link href={"/products/" + 'xx99-mark-two-headphones'}><button className='py-[15px] px-[31px] bg-[#D87D4A]'>SEE PRODUCT</button></Link>
        </div>
     </div>
     <Category />
     <div className='flex flex-col px-6 lg:px-[156px] gap-6 mb-[200px]'>
          <ProductZX9 />
          <ProductZX7 />
          <ProductYX1 />
      </div>
      <BottomInfo />
    </main>
  )
}
