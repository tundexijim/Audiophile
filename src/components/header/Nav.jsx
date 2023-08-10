"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Nav = () => {
    const pathname = usePathname()
  return (
    <div className='hidden lg:flex gap-8 text-[13px]'>
    <Link href='/' className='uppercase hover:text-[#D87D4A]' style={{color: pathname == "/" ? "#D87D4A" : ""}}>Home</Link>
    <Link href='/categories/headphones' className='uppercase hover:text-[#D87D4A]' style={{color: pathname == "/categories/headphones" ? "#D87D4A" : ""}}>Headphones</Link>
    <Link href='/categories/speakers' className='uppercase hover:text-[#D87D4A]' style={{color: pathname == "/categories/speakers" ? "#D87D4A" : ""}}>Speakers</Link>
    <Link href='/categories/earphones' className='uppercase hover:text-[#D87D4A]' style={{color: pathname == "/categories/earphones" ? "#D87D4A" : ""}}>Earphones</Link>
    </div>
  )
}

export default Nav