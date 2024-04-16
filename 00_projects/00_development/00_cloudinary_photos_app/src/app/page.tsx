"use client";

// import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type uploadResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

export default function Home() {
  const [imageId,setImageId] = useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        className="hover:bg-accent hover:text-accent-foreground w-full flex gap-2 rounded-xl item-center justify-center p-2 hover:bg-gray-300"
        onUpload ={(result : uploadResult|any) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="uorsbb9n"
      />
  {imageId &&(
      <CldImage
        width="400"
        height="300"
        src={imageId}
        sizes="100vw"
        alt="Description of my image"
      />
      )}
      
    </main>
  );
}
