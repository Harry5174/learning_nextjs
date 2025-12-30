"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/CartContext";

export function NavigationMenuDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} alt="Dine Market" width={140} height={25} className="w-32 md:w-40" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 font-medium text-gray-800">
          <Link href="/category/male" className="hover:text-premium-accent transition-colors">Male</Link>
          <Link href="/category/Female" className="hover:text-premium-accent transition-colors">Female</Link>
          <Link href="/category/Kids" className="hover:text-premium-accent transition-colors">Kids</Link>
          <Link href="/products" className="hover:text-premium-accent transition-colors">All Products</Link>
        </div>

        {/* Search & Cart (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-gray-600 transition-colors" />
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-8 pr-4 py-1 h-9 rounded-md border-gray-200 focus:border-gray-400 w-[300px] text-sm transition-all focus:w-[320px] bg-gray-50 focus:bg-white"
            />
          </div>

          <div className="relative p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors cursor-pointer group">
            <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full p-0 border-2 border-white">
                {cartCount}
              </Badge>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg flex flex-col p-4 gap-4 animate-accordion-down">
          <div className="flex flex-col space-y-4 font-medium text-gray-800 text-lg text-center">
            <Link href="/category/male" onClick={() => setIsMenuOpen(false)}>Male</Link>
            <Link href="/category/Female" onClick={() => setIsMenuOpen(false)}>Female</Link>
            <Link href="/category/Kids" onClick={() => setIsMenuOpen(false)}>Kids</Link>
            <Link href="/products" onClick={() => setIsMenuOpen(false)}>All Products</Link>
          </div>

          {/* Mobile Search */}
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search..."
              className="pl-9 w-full bg-gray-50"
            />
          </div>

          {/* Mobile Cart Button */}
          <div className="flex justify-center mt-2">
            <div className="relative p-3 bg-gray-100 rounded-full hover:bg-gray-200 w-fit">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full p-0 border-2 border-white">
                0
              </Badge>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <Link href="/login" className="w-full text-center py-2 border rounded-md hover:bg-gray-50">Login</Link>
            <Link href="/signup" className="w-full text-center py-2 bg-black text-white rounded-md hover:bg-gray-800">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
