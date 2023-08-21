import React from 'react'
import { useCart } from 'react-use-cart'
import SummaryProduct from './SummaryProduct';
const Summary = () => {
  const {items} = useCart();
  const total = items.reduce((acc, item) => acc + item.itemTotal, 0);
  const shipping = 50;
  const vat = (20 * total) / 100;
  const grandTotal = total + shipping + vat
  const summary = [
                    { name: 'Total', value: total },
                    { name: 'Shipping', value: shipping },
                    { name: 'Vat (Included)', value: vat },
                    { name: 'Grand Total', value: grandTotal }
                  ]
  return (
    <div className='px-6 py-8 bg-white rounded-lg lg:w-[30%] lg:h-1/2 lg:p-8'>
    <h3 className='text-[18px] font-bold uppercase mb-8'>Summary</h3>
    <div className='flex flex-col gap-6'>
        {items && items.map((item) => <SummaryProduct key={item.id} short={item.short} price={item.price} image={item.image.desktop} quantity={item.quantity} />)}
    </div>
    {items.length !== 0 &&
        <div className='mt-8'>
            {summary.map((item, index) => item.value ?
                <div key={index} className={item.name === 'Grand Total' ? 'flex justify-between mt-6' : 'flex justify-between mt-2'}>
                    <span className='text-[15px] opacity-50 uppercase'>{item.name}</span>
                    <h5 className='text-[18px] font-bold'>${new Intl.NumberFormat('en-US').format(item.value)}</h5>
                </div>
                : null
            )}
            <button className='mt-8 w-[100%] py-[15px] bg-[#D87D4A] uppercase text-white font-bold' disabled={items.length === 0}>continue & pay</button>
        </div>
    }
    {/* <button className='' disabled={items.length === 0}>continue & pay</button> */}
    {/* {showModal && <CheckoutModal setShowModal={setShowModal} grandTotal={grandTotal} productsInCart={productsInCart} />} */}
</div>
  )
}

export default Summary