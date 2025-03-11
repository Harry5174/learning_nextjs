"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import logo from "/public/logo.png";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <>
      <div className="flex pt-6 justify-around pb-10 mr-6">
        <NavigationMenu>
          <NavigationMenuList>
            <div className="flex">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Image src={logo} alt="logo" width={100} height={100} />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/category/male" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Male
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/category/Female" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Female
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/category/Kids" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Kids
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem className="pr-40">
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    All Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <div className="flex  gap-4 ">
                <div className="flex items-center border border-gray-400 rounded-xl w-96">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-search pl-1 "
                    viewBox="0 0 16 16"
                    >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>

                  <Input
                    type="text"
                    placeholder="Muhammmad Haris javed"
                    className="opacity-50 border-none"
                  />
                </div>

                <div className="border rounded-full p-2 bg-gray-200 relative hover:scale-110 transition-transform">
                  <Badge className="bg-red-500 absolute left-6 top-0 p-0 text-sm text-white hover:bg-red-500 transition-colors duration-700 ">
                    0
                  </Badge>
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
