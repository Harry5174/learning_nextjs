import { StaticImageData } from "next/image";

export type Product = {
  id: number,
  name: string,
  price: number,
  type: string,
  category?: string,
  image: string | StaticImageData,

};

