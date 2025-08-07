import { Product } from "./types";
import Image from "next/image";
import p1 from "/public/p1.png";
import p2 from "/public/p2.png";
import p3 from "/public/p3.png";
import p4 from "/public/p4.png";
import p5 from "/public/p5.png";
import p6 from "/public/p6.png";
import p7 from "/public/p7.png";
import p8 from "/public/p8.png";
import p9 from "/public/p9.png";
import p10 from "/public/p10.png";
import p11 from "/public/p11.png";
import p12 from "/public/p12.png";

export const Products: Product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    category: "Female",
    type: "Sweater",
    price: 195,
    image: p1,
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    category: "Female",
    type:"Dress",
    price: 545,
    image: p2,
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    category: "Female",
    type:'Sweater',
    price: 175,
    image: p3,
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    category: "Female",
    type:"Pants",
    price: 175,
    image: p4,
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    category: "Female",
    type:"Pants",
    price: 195,
    image: p5,
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    category: "Female",
    type:"Pants",
    price: 150,
    image: p6,
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    category: "Female",
    type:'Jackets',
    price: 525,
    image: p7,
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    category: "male",
    type:'Jackets',
    price: 225,
    image: p8,
  },
  {
    id: 9,
    name: "Muscle Tank",
    category: "Female",
    type:'T Shirt',
    price: 75,
    image: p9,
  },
  {
    id: 10,
    name: "Brushed Bomber",
    category: "Female",
    type:'Jackets',
    price: 225,
    image: p10,
  },
  {
    id: 11,
    name: "Raglan Sweatshirt",
    category: "male",
    type:'Sweater',
    price: 195,
    image: p11,
  },

];
