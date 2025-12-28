import React from "react";
import Image from "next/image";
import event1 from "/public/event1.webp";
import { Button } from "@/components/ui/button";
import event3 from "/public/event3.webp"
import event4 from "/public/event4.webp"

const Promotions = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h4 className="font-bold text-premium-accent text-sm tracking-widest uppercase mb-2">
          PROMOTIONS
        </h4>
        <h2 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-premium-black">
          Our Promotions Events
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Banner 1 */}
          <div className="bg-gray-300 flex flex-col md:flex-row items-center justify-between px-6 pt-6 tracking-wide text-gray-800 flex-1">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold">
                Get up to <span className="text-4xl font-extrabold">60%</span>
              </h3>
              <p className="text-lg mt-1">For the summer season</p>
            </div>
            <div className="w-full md:w-1/2">
              <Image src={event1} alt="Summer Season" className="object-contain" />
            </div>
          </div>

          {/* Banner 2 */}
          <div className="bg-gray-900 text-white flex flex-col items-center justify-center p-8 flex-1 text-center py-12">
            <h3 className="text-4xl font-extrabold mb-4">GET 30% Off</h3>
            <p className="tracking-widest uppercase text-sm mb-2">USE PROMO CODE</p>
            <Button className="bg-gray-700 hover:bg-gray-600 tracking-[0.3em] font-bold py-6 px-8 rounded-lg text-lg">
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Banner 3 */}
          <div className="bg-[#efe1c7] flex flex-col justify-between pt-6 px-6 tracking-wide flex-1 min-h-[400px]">
            <div className="mb-4">
              <p className="text-lg">Flex Sweatshirt</p>
              <div className="flex items-center gap-3 text-lg mt-1">
                <span className="line-through decoration-2">$100.00</span>
                <span className="font-bold text-xl">$75.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-auto">
              <Image src={event3} alt="Flex Sweatshirt" className="object-contain h-72 w-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Banner 4 */}
          <div className="bg-[#d7d7d9] flex flex-col justify-between pt-6 px-6 tracking-wide flex-1 min-h-[400px]">
            <div className="mb-4">
              <p className="text-lg">Flex Push Button Bomber</p>
              <div className="flex items-center gap-3 text-lg mt-1">
                <span className="line-through decoration-2">$225.00</span>
                <span className="font-bold text-xl">$190.00</span>
              </div>
            </div>
            <div className="flex justify-center mt-auto">
              <Image src={event4} alt="Bomber Jacket" className="object-contain h-72 w-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
