import React from 'react'
import Image from 'next/image'

const Gallery = ({gallery}) => {
  return (
    <div className='mt-[88px] px-6 flex flex-col gap-6 lg:px-[165px] lg:grid' style={{ gridTemplateColumns: '40% 60%' }}>
            <picture className='h-[174px] relative col-start-1 col-end-2 row-start-1 row-end-2 lg:h-[280px]' >
                <source media="(max-width: 650px)" srcSet={gallery.first.mobile} />
                <source media="(max-width: 768px)" srcSet={gallery.first.tablet} />
                <Image src={gallery.first.desktop} alt="gallery-first" className=' rounded-lg' fill/>
            </picture>
            <picture className='h-[174px] relative col-start-1 col-end-2 row-start-2 row-end-3 lg:h-[280px]'>
                <source media="(max-width: 650px)" srcSet={gallery.second.mobile} />
                <source media="(max-width: 768px)" srcSet={gallery.second.tablet} />
                <Image src={gallery.second.desktop} alt="gallery-second" className=' rounded-lg' fill/>
            </picture>
            <picture className='h-[368px] relative col-start-2 col-end-3 row-start-1 row-end-3 lg:h-[100%]'>
                <source media="(max-width: 650px)" srcSet={gallery.third.mobile} />
                <source media="(max-width: 768px)" srcSet={gallery.third.tablet} />
                <Image src={gallery.third.desktop} alt="gallery-third" className=' rounded-lg' fill/>
            </picture>
        </div>
  )
}

export default Gallery