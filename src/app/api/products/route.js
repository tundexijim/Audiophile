import { NextResponse } from 'next/server';
import data from '../../../../public/data.json'

export const GET = async ()=>{
try{
    return new NextResponse(JSON.stringify(data),
    { status: 200 }
  );
} catch (error){
    return new NextResponse("Something went wrong!",
        { status: 500 }
      );
}
}