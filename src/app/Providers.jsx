"use client"
import React from 'react'
import { CartProvider } from 'react-use-cart'
const Providers = ({children}) => {
  return (
    <CartProvider>
        {children}
    </CartProvider>
  )
}

export default Providers