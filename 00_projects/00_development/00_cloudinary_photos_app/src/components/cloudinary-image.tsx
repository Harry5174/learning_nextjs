"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { SetAsFavouriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeart } from "@/components/icons/full-heart";
import { ImageMenu } from "./image-menu";

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnheart } = props;
  const [isFavourited, SetIsFavourited] = useState(
    imageData.tags.includes("favourite")
  );

  return (
    <div className="relative">


      <CldImage {...props} src={imageData.public_id} />

      {isFavourited ? (
        <FullHeart
          className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer"
          onClick={() => {
            onUnheart?.(imageData);
            SetIsFavourited(false);
            startTransition(() => {
              SetAsFavouriteAction(imageData.public_id, false);
            });
          }}
        />
      ) : (
        <Heart
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
          onClick={() => {
            SetIsFavourited(true);
            startTransition(() => {
              SetAsFavouriteAction(imageData.public_id, true);
            });
          }}
        />
        )}
        <div className="absolute top-2 right-2 ">
        <ImageMenu 
        image={imageData}/>
        </div>
      
    </div>
  );
}
