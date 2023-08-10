import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { categories } from './CategoryData'
import { IoChevronForward } from 'react-icons/io5'

const Category = () => {
  return (
    <div className='flex flex-col h-[651px] mt-4 mb-[120px] px-6 lg:h-[284px] lg:mt-[120px] lg:mb-[168px] lg:flex-row lg:px-[165px] lg:gap-[30px]'>
        {categories.map((category, index) => <div key={index} className='flex flex-col items-center flex-1  lg:h-[284px] relative'>
            <div className='absolute bg-[#F1F1F1] w-[100%] h-[165px] rounded-[8px] bottom-0 lg:h-[204px]'></div>
            <div className='relative h-[104px] w-[79px] lg:h-[160px] lg:w-[123px]'>
            <Image src={category.image} alt={category.name} className='object-cover' fill/>
            </div>
            <h2 className='uppercase z-10 text-[15px] font-bold mb-[17px]'>{category.name}</h2>
            <Link className= 'z-10' href={category.link}>
                <div className='flex items-center gap-1'>
                    <span className='opacity-50 text-bold text-[13px] hover:text-[#D87D4A]'>SHOP</span>
                    <span className='text-[#D87D4A]'><IoChevronForward size={11}/></span>
                </div>
            </Link>
        </div>)}
    </div>
  )
}

export default Category