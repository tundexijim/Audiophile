"use client"
import React, {useState} from 'react'
import { useCart } from 'react-use-cart';
const Button = ( {CartProduct}) => {
    const {addItem, inCart} = useCart();
    const [Quantity, setQuantity] = useState(1);
    const changeQuantity = (event) => {
        setQuantity(Number((event.target.value.match(/^[0-9]+$/))))
    }
  return (
    <div className='flex gap-4'>
    {!inCart(CartProduct.id) ? <>
        <div className='bg-[#F1F1F1] flex w-[120px] h-[48px] px-[15px]'>
            <button className='opacity-25' disabled = {Quantity===0} onClick={() =>setQuantity(prev => prev-1)}>-</button>
            <input className='bg-[#F1F1F1] text-center w-[100%] focus:outline-none' type="text" value={Quantity} onChange={changeQuantity}/>
            <button className='opacity-25' onClick={() =>setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='bg-[#D87D4A] px-[34px] text-white uppercase text-[13px] font-bold' onClick={()=>addItem(CartProduct, Quantity)}>Add to cart</button>
    </> :
        <div><button disabled className= ' bg-gray-500 px-[34px] py-[15px] text-white font-bold uppercase text-[13px] cursor-not-allowed'>Item in cart</button></div>
    }
</div>
  )
}

export default Button