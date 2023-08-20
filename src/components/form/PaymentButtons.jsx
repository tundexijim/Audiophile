import React from 'react'
import _ from 'lodash';
const PaymentButtons = ({formik, type, setMethod, active}) => {
    const chooseMethod = () =>{
        setMethod(_.kebabCase(type))
        formik.setFieldValue('payment_method', type)
    }
  return (
    <div className={!active ? 'border border-gray-300 rounded-lg pl-6 py-[18px] hover:border-[#D87D4A]' : 'border border-[#D87D4A] rounded-lg pl-6 py-[18px]'} onClick={chooseMethod}>
            <div></div>
            <span>{type}</span>
        </div>
  )
}

export default PaymentButtons