"use client";

import { Heart } from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import { SetAsFavouriteAction } from "../app/gallery/actions";
import { useState, useTransition } from "react";
import { SearchResult } from "../app/gallery/page";
import { FullHeart } from "@/components/icons/full-heart";
import { ImageMenu } from "./image-menu";
import { Card } from "@/components/ui/card";
import { ImageModal } from "./image-modal";
import { Eye } from "lucide-react";
import { useToast } from "./toast";
import { Button } from "@/components/ui/button";


export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
    onImageClick?: (image: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  const { imageData, onUnheart, onImageClick } = props;
  const [isFavourited, SetIsFavourited] = useState(
    imageData.tags.includes("favourite")
  );

  return (
    <div
      className="group relative overflow-hidden rounded-md bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <CldImage
          {...props}
          src={imageData.public_id}
          className="w-full h-auto transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            onImageClick?.(imageData);
          }}
        />

        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`} />

        {/* Heart Button */}
        <div className={`absolute top-3 left-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
          {isFavourited ? (
            <FullHeart
              className="text-white cursor-pointer hover:text-zinc-200 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                onUnheart?.(imageData);
                SetIsFavourited(false);
                addToast({
                  type: 'success',
                  title: 'Removed from favorites',
                  description: 'Image has been removed from your favorites'
                });
                startTransition(() => {
                  SetAsFavouriteAction(imageData.public_id, false);
                });
              }}
            />
          ) : (
            <Heart
              className="text-white cursor-pointer hover:text-zinc-200 transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                SetIsFavourited(true);
                addToast({
                  type: 'success',
                  title: 'Added to favorites',
                  description: 'Image has been added to your favorites'
                });
                startTransition(() => {
                  SetAsFavouriteAction(imageData.public_id, true);
                });
              }}
            />
          )}
        </div>

        {/* Menu Button */}
        <div className={`absolute top-3 right-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
          <ImageMenu image={imageData} />
        </div>

        {/* View Button */}
        <div className={`absolute bottom-3 right-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-0 h-8"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
              onImageClick?.(imageData);
            }}
          >
            <Eye className="h-3 w-3 mr-2" />
            View
          </Button>
        </div>

        {/* Loading State */}
        {transition && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        image={imageData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
