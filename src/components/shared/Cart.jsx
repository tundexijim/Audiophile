"use client"
import React, { useRef} from 'react'
import { useCart } from 'react-use-cart'
import CartProduct from './CartProduct';
import Link from 'next/link';
const Cart = ({setShowCart}) => {
    const {items, updateItemQuantity, emptyCart} = useCart();
    // const total = (items.map(item => item.itemTotal)).reduce((acc, b) => acc + b);
    const total = items.reduce((acc, item) => acc + item.itemTotal, 0);
    const overlayRef = useRef(null)
    const closeCart = (e) => {
        if (e.target === overlayRef.current) {
            setShowCart(false)
        }
    }
  return (
    <div className='fixed h-[100vh] w-screen top-0 left-0 z-20 px-6' style={{backgroundColor: 'rgba(0,0,0,0.5)'}} ref={overlayRef} onClick={closeCart}>
            <div className=' relative top-24 bg-white p-8 rounded-lg flex flex-col gap-8 lg:absolute lg:w-[377px] lg:right-[165px]'>
                <div className='flex justify-between'>
                    <h3 className='text-[18px] font-bold uppercase'>Cart ({items.length})</h3>
                    {items.length !== 0 ? <button className='text-[15px] opacity-50' onClick={()=>emptyCart()}>Remove all</button> : null}
                </div>
                <div className='flex flex-col gap-6'>
                    {items && items.map(item => <CartProduct key={item.id} item={item} updateItemQuantity = {updateItemQuantity} />)}
                </div>
                {total ?<div>
                  <div className='flex justify-between mb-6'>
                        <span className='text-[15px] opacity-50 uppercase'>Total</span>
                        <h4 className='text-[18px] font-bold'>${new Intl.NumberFormat('en-US').format(total)}</h4>
                    </div> 
                    <Link href={items.length !== 0 ? "/checkout" : ""}><button className='bg-[#D87D4A] w-[100%] py-[15px] uppercase text-[13px] font-bold text-white' disabled={items.length === 0}>checkout</button></Link>
                </div> : null} 
            </div>
        </div>
  )
}

export default Cart