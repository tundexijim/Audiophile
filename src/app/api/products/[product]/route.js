import { NextResponse } from 'next/server';
import data from '../../../../../public/data.json'
export const GET = async (req, {params})=>{
try{
    const {product} = params;
    const Products =  data.find(item => item.slug === product)
    return new NextResponse(JSON.stringify(Products),
    { status: 200 }
  );
} catch (error){
    return new NextResponse("Something went wrong!",
        { status: 500 }
      );
}
}