import { Form, Formik } from 'formik'
import React, {useState} from 'react'
import TextInput from './TextInput'
import { initialValues } from './utils/forminitialvalues';
import { validationSchema } from './utils/formvalidation';
import PaymentButtons from './PaymentButtons';
import _ from 'lodash';
const FormContent = () => {
   const [method, setMethod] = useState('e-money')
  return (
        <div className='px-6 pt-6 pb-[31px] bg-white rounded-lg lg:w-[70%] lg:px-12 lg:pt-[54px] lg:pb-[48px]'>
             <h1 className='mb-8 text-[28px] uppercase font-bold'>Checkout</h1>
             <Formik initialValues={initialValues} validationSchema={validationSchema}>
             {(formik) =><Form>
                {/* {console.log(formik.values)} */}
                    <div className='mb-8'>
                        <h1 className='uppercase mb-4 text-[#D87D4A] font-bold'>Billing Details</h1>
                        <div className='flex flex-col gap-6 mb-6'>
                            <TextInput label="Name" id="name" name="name" type="text" placeholder="Alexei Ward" />
                            <TextInput  label="Email Address" id="email" name="email" type="email" placeholder="alexeiward@mail.com"/>
                        </div>
                            <TextInput label="Phone Number" id="phone_number" name="phone_number" type="tel" placeholder="+1 202-555-0136"/>
                    </div>
                    <div className=''>
                        <h4 className='mb-4 text-[#D87D4A] text-[13px] uppercase font-bold'>Shipping Info</h4>
                         <div className='flex flex-col gap-6'>
                             <TextInput label="Address" id="address" name="address" type="text" placeholder="1137 Williams Avenue" />
                         <div className='flex flex-col gap-6'>
                            <TextInput label="Zip Code" id="zip_code" name="zip_code" type="text" placeholder="10010" />
                            <TextInput label="City" id="city" name="city" type="text" placeholder="New York" />
                         </div>
                         <div className=''>
                            <TextInput label="Country" id="country" name="country" type="text"  placeholder="United States" />      
                        </div>
                         </div>
                    </div>
                    <div className='mt-8'>
                        <h4 className='text-[#D87D4A] text-[13px] uppercase font-bold mb-4'>Payment Details</h4>
                    <div className=''>
                    <div className='flex flex-col gap-[17px] mb-8'>
                            <label htmlFor="paymentMethod" className='text-[12px] font-bold'>Payment Method</label>
                            <div className='flex flex-col gap-4'>
                            {
                            ["e-Money", "Cash On Delivery"].map(type =>
                                <PaymentButtons formik={formik} key={type} type={type} setMethod={setMethod} active={method === _.kebabCase(type)} />
                            )}
                            </div>
                    </div>
                    {
                    method === "e-money" &&
                    <div className='flex flex-col gap-6'>
                        <TextInput label="e-Money Number" id="e_money_number" name="e_money_number" type="text" placeholder="238521993" />
                        <TextInput label="e-Money PIN" id="e_money_pin" name="e_money_pin" type="text" placeholder="6891" />
                    </div>
                    }
                    {
                    method == "cash-on-delivery" &&
                    <div className='flex justify-between'>
                        <figure>
                            <img src="/delivery.png" alt="delivery" />
                        </figure>
                        <p className='opacity-50'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                    </div>
                    }
                </div>
            </div>
            </Form>}
            </Formik>
        </div>
  )
}

export default FormContent