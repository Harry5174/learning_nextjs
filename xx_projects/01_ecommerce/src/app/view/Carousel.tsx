"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Products } from "@/utils/mock";
import ProductCard from "@/components/ui/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Carousel = () => {
  const productChecks = Products.slice(0, 8);
  return (
    <>
      <span className="gap-y-6 ">
        <h4 className="flex justify-center scroll-m-20 text-sm font-semibold tracking-tight text-blue-500 mt-20">
          PRODUCTS
        </h4>
        <h2 className="flex justify-center scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mt-3">
          Check What We Have
        </h2>
      </span>
      <Swiper
        className="mt-4"
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex">
          {productChecks.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                img={product.image as StaticImageData}
                imgHeight={400}
                imgWidth={380}
                id={product.id}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}