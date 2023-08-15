"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const Back = () => {
    const router = useRouter();
  return (
    <div>
        <button className='mb-6 opacity-50 text-[15px]' onClick={router.back} >Go Back</button>
    </div>
  )
}

export default Back