import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/router";

function ProductCard(props: {
  id:number;
  title: string;
  price: number;
  img: StaticImageData;
  type?: string;
  imgHeight: number;
  imgWidth: number;
}) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className=" hover:scale-110 transition-transform duration-500  p-10 mt-52 mb-32">
      <Button className="flex-col">
        <Image
          src={props.img}
          alt="product"
          height={props.imgHeight}
          width={props.imgWidth}
        />
        <h3 className="font-bold text-lg mt-3">{props.title} </h3>
        <p className="font-bold opacity-40">{props.type}</p>
        <p className="font-bold text-lg">${props.price}</p>
      </Button>
    </div>
    </Link>
  );
}

export default ProductCard;
