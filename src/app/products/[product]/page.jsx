import React from 'react'
import { productData } from '@/utils/filterdata'
import data from '../../../../src/data.json'
import ProductDetail from '@/components/productdetails/ProductDetail';
import Features from '@/components/productdetails/Features';
import Gallery from '@/components/productdetails/Gallery';
import Others from '@/components/productdetails/Others';
const productpage = ({params}) => {
  const {product} = params;
  const Product = productData(data, product)
  const { id,name, new: is_new, description, price, image } = Product
    const { features, includes } = Product
    const { gallery } = Product
    const { others } = Product
  return (
    <div className='mt-[101px] lg:mt-[164px]'>
      <ProductDetail id={id} name={name} status = {is_new} description={description} price={price} image={image}/>
      <Features features={features} include={includes}/>
      <Gallery gallery={gallery}/>
      <Others others={others}/>
    </div>
  )
}

export const generateStaticParams = () => {
  return data.map((product) => ({
      product: product.slug,
    }))
  }
  export const dynamicParams = false
export default productpage