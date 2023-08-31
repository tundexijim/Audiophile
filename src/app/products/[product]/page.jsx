import React from 'react'
import dynamic from 'next/dynamic'
import { getallProducts } from '@/utils/getallProducts';
import ProductDetail from '@/components/productdetails/ProductDetail';
import Features from '@/components/productdetails/Features';
import Gallery from '@/components/productdetails/Gallery';
import Others from '@/components/productdetails/Others';
import Category from '@/components/shared/Category';
import BottomInfo from '@/components/shared/BottomInfo';
const Button = dynamic(() => import('@/components/productdetails/Button'), { ssr: false })

const getData = async (product) =>{
  const res = await fetch(`http://localhost:3000//api/products/${product}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
}
const productpage = async ({params}) => {
  const {product} = params;
  const Product = await getData(product)
  const { id,name, new: is_new, description, price, image } = Product
    const { features, includes } = Product
    const { gallery } = Product
    const { others } = Product
    const {id: cartid, image: cartimg, short, price: cartprice } = Product
    const CartProduct = {id: cartid, image: cartimg, short, price: cartprice };
  return (
    <div className='mt-[101px] lg:mt-[164px]'>
      <ProductDetail id={id} name={name} status = {is_new} description={description} price={price} image={image}><Button  CartProduct={ CartProduct} /></ProductDetail>
      <Features features={features} include={includes}/>
      <Gallery gallery={gallery}/>
      <Others others={others}/>
      <Category />
      <BottomInfo />
    </div>
  )
}

export const generateStaticParams = async () => {
  const Products = await getallProducts()
  return Products.map(product => ({
      product: product.slug,
    }))
  }
  export const dynamicParams = false
export default productpage