"use client";
import { Products } from "@/utils/mock";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";

const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  if (result.length === 0) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-bold">Product not found</div>;
  }

  const product = result[0];

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize
    });

    // Reset visual feedback after a delay
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="container mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

        {/* Left: Image Gallery (Single Image for now) */}
        <div className="flex-1 relative bg-gray-50 rounded-2xl flex items-center justify-center p-8 lg:p-16">
          <div className="absolute inset-0 bg-gray-100/50 rounded-2xl -z-10 transform -rotate-1" />
          <Image
            src={product.image}
            alt={product.name}
            height={600}
            width={600}
            className="object-contain hover:scale-105 transition-transform duration-500 user-select-none"
            priority
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-premium-black mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-gray-400 font-medium tracking-wide uppercase">{product.type}</p>
          </div>

          <div className="space-y-4">
            <h3 className="uppercase font-bold text-sm tracking-widest text-gray-800">Select Size</h3>
            <div className="flex gap-4">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer font-bold text-sm md:text-md transition-all duration-200
                                ${selectedSize === size ? 'bg-premium-black text-white shadow-lg scale-110' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                            `}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <h3 className="uppercase font-bold text-sm tracking-widest text-gray-800">Quantity</h3>
            <div className="flex items-center gap-4">
              <button onClick={decrement} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Minus size={18} />
              </button>
              <span className="text-xl font-medium w-4 text-center">{quantity}</span>
              <button onClick={increment} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
            <Button
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`h-14 px-8 text-lg rounded-none shadow-xl transition-all duration-300 flex-1 lg:flex-none lg:w-48
                    ${isAdding ? 'bg-green-600 hover:bg-green-700' : 'bg-premium-black hover:bg-gray-800'} text-white
                `}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {isAdding ? "Added!" : "Add to Cart"}
            </Button>
            <div className="text-3xl font-bold tracking-tight text-premium-black">
              ${product.price.toFixed(2)}
            </div>
          </div>

        </div>
      </div>

      {/* Product Description / Dummy Content */}
      <div className="mt-20 lg:mt-32">
        <div className="relative border-b border-gray-200 pb-10 mb-10">
          <div className="absolute -top-16 left-0 text-9xl font-bold text-gray-100 -z-10 select-none opacity-50">
            Overview
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Product Information</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600 leading-7">
          <div>
            <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Product Details</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Product Care</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Hand wash using cold water.</li>
              <li>Do not use bleach.</li>
              <li>Hang it to dry.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
