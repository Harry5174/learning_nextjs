import Image from "next/image"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import heroImg from '/public/heroImg.png'
import Bustle from '/public/Bustle.png'
import Bazar from '/public/Bazar.png'
import Versace from '/public/Versace.png'
import Instyle from '/public/Instyle.png'
import Link from "next/link"

const Hero = () => {
  return (
    <>
    <section className="flex flex-col lg:flex-row gap-y-6  ">
      
      {/* Left Div */}
      
      <div className="flex-1 mt-16">
      <Badge className="py-3 px-5 rounded-xl bg-blue-200 text-blue-700 hover:bg-blue-200 ">Sale 70%</Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl mt-6">
       An Industrial Take on Streetwear 
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>

        <Link href={'/products'}>
          <div className="flex">
            {/* <ShoppingCart/> */}
            <Button className="bg-black text-white h-12 px-8 mt-4 relative">Start Shopping</Button>
          </div>
        </Link>

          <div className="flex gap-3 mt-7">
            {/*logos  */}
              <Image src = {Bazar} alt = 'logo'/>
              <Image src = {Bustle} alt = 'logo'/>
              <Image src = {Versace} alt = 'logo'/>
              <Image src = {Instyle} alt = 'logo'/>

          </div>
      </div>

      {/* Right Div */}
      
      <div className="flex-1 mt-10 ">
      <Image src = {heroImg} alt = "heroImage" width="650" height="650" />
      </div>

      <div>

      </div>

    </section>

    </>
  )
}

export default Hero