"use client"
import React from 'react'
import { useField } from 'formik';

const TextInput = ({label, ...props }) => {
    const [ field, meta] = useField(props);
  return (
    <div className='flex flex-col relative'>
            {label && <label className='text-[12px] font-bold mb-[9px]' htmlFor={props.id || props.name}>{label}</label>}
            <input  className={meta.touched && meta.error ? 'border-[#D87D4A] border rounded-lg py-[18px] pl-6 focus:outline-none' : 'border border-gray-300 rounded-lg py-[18px] pl-6 hover:border-[#D87D4A] focus:outline-none'}
                {...field}
                {...props}
            />
            {meta.touched && meta.error && <div className='absolute top-0 right-0 text-[#D87D4A] text-[12px]'>
                {meta.error}
            </div>}
        </div>
  )
}

export default TextInput