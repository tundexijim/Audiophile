"use client"
import Form from '@/components/form/Form'
import React from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
const Summary = dynamic(() => import('@/components/form/Summary'), { ssr: false })
const Checkoutpage = () => {
  const router = useRouter();
  return (
    <div className='mt-[101px] px-6 mb-[97px] lg:px-[165px] lg:mt-[164px] lg:mb-[141px]'>
      <button className='opacity-50 text-[15px] mb-6 lg:mb-[37px]' onClick={router.back}>Go Back</button>
      <div className=' flex flex-col gap-8  lg:flex-row lg:gap-[30px]'>
        <Form />
        <Summary />
      </div>
    </div>
  )
}

export default Checkoutpage