import React from 'react'
import { getallProducts } from '@/utils/getallProducts'
import Link from 'next/link'
import Image from 'next/image'
import Category from '@/components/shared/Category'
import BottomInfo from '@/components/shared/BottomInfo'

const getData = async (category) =>{
  const res = await fetch(`${process.env.VERCEL_URL}/api/categories/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();

}
const categorypage = async ({params}) => {
  const {category} = params
 const newdata = await getData(category)
  return (
    <div>
      <div className='relative bg-[#191919] flex justify-center h-[192px] lg:h-[336px]'><h2 className=' absolute text-white bottom-[32px] uppercase text-[28px] font-bold lg:bottom-[97px] lg:text-[40px]'>{category}</h2></div>
      <div className='mt-16 mb-[120px] px-6 flex flex-col gap-[120px] lg:gap-40 lg:mb-40 lg:mt-40 lg:px-[165px]'>
      {newdata && newdata.map((product, index) =>  <div key={index} className='flex flex-col gap-8 lg:even:flex-row-reverse lg:flex-row lg:items-center lg:gap-[125px] lg:justify-between'>
            {product.image && 
              <picture className='relative h-[352px] lg:h-[560px] lg:w-[540px]'>
                <source media="(max-width: 650px)" srcSet={product.image.mobile} />
                <source media="(max-width: 768px)" srcSet={product.image.tablet} />
                <Image src={product.image.desktop} alt="category-product" fill/>
              </picture>
              
            }
            <section className='text-center flex flex-col gap-6 items-center lg:text-left lg:items-start'>
                {product.new && <span className='text-[#D87D4A] tracking-[10px] uppercase'>new product</span>}
                <h3 className='uppercase text-[28px] w-[327px] font-bold lg:w-[445px] lg:text-[40px]'>{product.name}</h3>
                <p className='w-[327px] opacity-50 lg:w-[445px]'>{product.description}</p>
                <Link href={"/products/" + product.slug}><button className='uppercase bg-[#D87D4A] text-white px-[31px] py-[15px] text-[13px]'>see product</button></Link>
            </section>
        </div>
        )}
        </div>
        <Category />
        <BottomInfo />
    </div>
  )
}
export const generateStaticParams = async () => {
 const Products = await getallProducts()
return Products.map(product => ({
    category: product.category,
  }))
}
export const dynamicParams = false

export default categorypage
