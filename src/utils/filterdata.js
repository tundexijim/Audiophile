export const categoryData = (Products, category) =>{
  const CategoryProducts =  Products.filter(product => product.category === category)
   return CategoryProducts;
}

export const productData = (Products, slug) =>{
    const Product =  Products.find(product => product.slug === slug)
    return Product;
}