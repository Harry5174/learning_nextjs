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
    <section className="flex flex-col lg:flex-row gap-y-10 items-center justify-between py-12 md:py-24">

      {/* Left Div (Content) */}
      <div className="flex-1 space-y-8 text-center lg:text-left">
        <Badge className="py-2 px-6 rounded-lg bg-blue-100 text-premium-accent hover:bg-blue-200 text-lg font-medium">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-premium-black">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-8 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>

        <Link href={'/products'} className="inline-block">
          <Button className="bg-premium-black text-white h-14 px-10 text-lg rounded-none hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
            <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
          </Button>
        </Link>

        <div className="flex gap-8 mt-10 justify-center lg:justify-start grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <Image src={Bazar} alt="Bazar Logo" className="w-20 md:w-24 object-contain" />
          <Image src={Bustle} alt="Bustle Logo" className="w-20 md:w-24 object-contain" />
          <Image src={Versace} alt="Versace Logo" className="w-20 md:w-24 object-contain" />
          <Image src={Instyle} alt="Instyle Logo" className="w-20 md:w-24 object-contain" />
        </div>
      </div>

      {/* Right Div (Image) */}
      <div className="flex-1 relative hidden md:block">
        <div className="absolute inset-0 bg-[#ffece3] rounded-full -z-10 scale-90 transform translate-y-10" />
        <Image
          src={heroImg}
          alt="Hero Image"
          width={650}
          height={650}
          className="object-cover relative z-10"
          priority
        />
      </div>
    </section>
  )
}

export default Hero