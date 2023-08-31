import React from 'react'
import parse from 'html-react-parser';

const Features = ({features, include}) => {
  return (
    <div className='mt-[88px] px-6 flex flex-col gap-[88px] lg:flex-row lg:px-[165px] lg:gap-[125px]'>
    <section className=''>
        <h4 className='uppercase font-bold text-[24px] mb-6'>Features</h4>
        <p className='opacity-50 text-[15px] lg:w-[635px]'>{parse(features.replace(/\n/gi, '<br/>'))}</p>
    </section>
    <section className=''>
        <h4 className='uppercase text-[24px] font-bold mb-6'>In the box</h4>
        <div className='flex flex-col gap-2 text-[15px]'>
            {include && include.map((item, index) => <div key={index} className='flex gap-6'>
                <span className='text-[#D87D4A]'>{item.quantity}x</span>
                <span className='opacity-50'>{item.item}</span>
            </div>)}
          </div>
    </section>
</div>
  )
}

export default Features