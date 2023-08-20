import Form from '@/components/form/Form'
import React from 'react'
import dynamic from 'next/dynamic'
const Summary = dynamic(() => import('@/components/form/Summary'), { ssr: false })
const checkoutpage = () => {
  return (
    <div className='px-6 flex flex-col mt-[101px] gap-8 mb-[97px]'>
      <Form />
      <Summary />
    </div>
  )
}

export default checkoutpage