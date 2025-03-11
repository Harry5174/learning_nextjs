import { Products } from "@/utils/mock";
import ProductCard from "@/components/ui/ProductCard";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) =>{
   return  Products.filter((product)=>product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug)

    return <div className="flex justify-evenly flex-wrap mt-10 ">
        {
            result.length>0 ?  result.map((product) => (
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
              )) : <p>No products for this category yet.</p>
        }


  
  </div>
  }