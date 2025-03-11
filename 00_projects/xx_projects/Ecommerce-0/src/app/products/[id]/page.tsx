import { Products } from "@/utils/mock";
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);

  return (
    <div className="flex justify-evenly flex-wrap mt-10 ">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between p-10 gap-2">
          <Image
            src={product.image}
            alt={product.name}
            height={500}
            width={500}
          />
          <div className="font-bold mt-20">
            <p className="text-4xl font-normal">{product.name}</p>
            <p className="text-2xl text-gray-400 font-medium">{product.type}</p>
            <p className="font-medium mt-3">Category: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
