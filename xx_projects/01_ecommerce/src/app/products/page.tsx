import React from 'react'
import ProductCard from '@/components/ui/ProductCard'
import { Products } from '@/utils/mock'
import { StaticImageData } from 'next/image'

const Allproducts = () => {
  
  
    return <div className="flex justify-evenly flex-wrap mt-10 ">
    {Products.map((product) => (
      <ProductCard 
        key={product.id}
        title={product.name}
        type={product.type}
        price={product.price}
        img={product.image as StaticImageData}
        imgWidth={200}
        imgHeight={200}
        id={product.id}

      />
    ))}
  </div>
}

export default Allproducts 