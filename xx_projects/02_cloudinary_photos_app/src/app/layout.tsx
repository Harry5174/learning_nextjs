import { Button } from "@/components/ui/button";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import APhotoAlbum from "/public/APhotoAlbum.png";
import { ToastProvider } from "@/components/toast";
import { SideMenu } from "@/components/side-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloudinary Photos",
  description: "Minimalist Photo Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ToastProvider>
          {/* Main Layout Container */}
          <div className="flex min-h-screen">

            {/* Sidebar - Fixed Position handled within component or layout */}
            <div className="hidden lg:block">
              <SideMenu />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Navigation Bar */}
              <div className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex h-16 items-center px-6">
                  <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 group">
                      <div className="p-1.5 bg-zinc-900 rounded border border-zinc-800 group-hover:border-zinc-600 transition-colors">
                        <Image
                          src={APhotoAlbum}
                          width={20}
                          height={20}
                          alt={"album logo"}
                          className="filter brightness-0 invert"
                        />
                      </div>
                      <span className="text-lg font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                        Cloudinary Photos
                      </span>
                    </Link>
                  </div>
                  <div className="ml-auto flex items-center space-x-4">
                    <Avatar className="h-8 w-8 ring-1 ring-zinc-700">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback className="bg-zinc-900 text-zinc-400 text-xs">CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>

              {/* Page Content */}
              <div className="flex-1 bg-black">
                {children}
              </div>

            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}

