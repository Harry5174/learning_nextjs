import React from "react";
import Image from "next/image";
import event1 from "/public/event1.webp";
import { Button } from "@/components/ui/button";
import event3 from "/public/event3.webp"
import event4 from "/public/event4.webp"

const Promotions = () => {
  return (
    <>
      <section>
        {/* Section 1 */}

        <span className="gap-y-6">
          <h4 className="flex justify-center scroll-m-20 text-sm font-semibold tracking-tight text-blue-500 mt-20">
            PROMOTIONS
          </h4>
          <h2 className="flex justify-center scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mt-3">
            Our Promotions Events
          </h2>
        </span>
      </section>

        {/* Promotions */}
      <section className="grid grid-cols-2 gap-4">
      {/* left section */}
     
     {/* Banner1 */}
     <div className="grid grid-col-2 gap-4 mt-4">
        <div className="event-banner mt-4">
          <div className="event-card bg-gray-300  flex ">
            <div className="content p-4 w-28">
              <h3 className="text-3xl font-bold ">
                Get up to
                <span className="text-4xl flex mt-2"> 60%</span>
              </h3>
              <p>For the summer season</p>
            </div>
            <Image src={event1} alt="promotion" />
          </div>
        </div>

     {/* Banner2 */}
          <div className="event-card bg-slate-800 text-white mt-5 text-center p-4">
            <h3 className="font-bold text-4xl">Get 30% Off</h3>
            <p className="mt-4">USE PROMO CODE</p>
            <Button className="  text-white border-none rounded-xl bg-gray-600 ">
              D I N E W E E K E N D S A L E
            </Button>
          </div>
        </div>


      {/* Right section */}
      <div className="flex flex-row gap-4 mt-8">
        {/* Banner3 */}
      <div className="relative event-banner-right bg-orange-200 p-4" style={{ flex: 2 }}>
          <div className="event-right-1">
            <div className="details">
              <p>Flex Sweatshirt</p>
              <div className="price gap-2">
                <span>$100.00</span>
                <span className="font-bold">$75.00</span>
              </div>
                <Image src={event3} alt=" Banner Image" className="absolute bottom-0 right-1"/>
            </div>
          </div>
        </div>

        <div className="relative event-banner-right bg-gray-300 p-4" style={{ flex: 2 }}>
          <div className="event-right-1">
            <div className="details">
              <p>Flex Push Button Bomber</p>
              <div className="price">
                <span>$100.00</span>
                <span className="font-bold">$225.00</span>
                <Image src={event4} alt=" Banner Image" className="absolute bottom-0 right-1"/>
              </div>
            </div>
          </div>
        </div>

        </div>
        
      </section>
    </>
  );
};

export default Promotions;
