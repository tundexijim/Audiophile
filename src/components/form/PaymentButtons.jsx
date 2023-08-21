import React from 'react'
import _ from 'lodash';
const PaymentButtons = ({formik, type, setMethod, active}) => {
    const chooseMethod = () =>{
        setMethod(_.kebabCase(type))
        formik.setFieldValue('payment_method', type)
    }
  return (
    <div className={!active ? 'border border-gray-300 rounded-lg pl-6 py-[18px] hover:border-[#D87D4A] flex items-center gap-4 cursor-pointer' : 'border border-[#D87D4A] rounded-lg pl-6 py-[18px] flex items-center gap-4 cursor-pointer'} onClick={chooseMethod}>
            <div className='w-[20px] h-[20px] border border-[#CFCFCF] rounded-[50%] flex justify-center items-center'>{active ? <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="#D87D4A"/></svg> : ''}</div>
            <span>{type}</span>
        </div>
  )
}

export default PaymentButtons