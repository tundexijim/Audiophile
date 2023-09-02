import { NextResponse } from 'next/server';
import data from  '../../../../../public/data.json'

export const GET = async (req, {params})=>{
try{
    const {category} = params;
    const CategoryProducts =  data.filter(product => product.category === category)
    return new NextResponse(JSON.stringify(CategoryProducts),
    { status: 200 }
  );
} catch (error){
    return new NextResponse("Something went wrong!",
        { status: 500 }
      );
}
}