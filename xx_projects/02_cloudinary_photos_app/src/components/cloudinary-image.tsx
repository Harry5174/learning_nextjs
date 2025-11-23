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
    <Card 
      className="group relative overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-xl transition-all duration-300 border-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <CldImage 
          {...props} 
          src={imageData.public_id}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
            onImageClick?.(imageData);
          }}
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 ${
          isHovered ? 'bg-black/20' : ''
        }`} />
        
        {/* Heart Button */}
        <div className={`absolute top-3 left-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
        }`}>
          {isFavourited ? (
            <FullHeart
              className="text-red-500 cursor-pointer hover:text-red-400 transition-colors duration-200 drop-shadow-lg"
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
              className="text-white cursor-pointer hover:text-red-400 transition-colors duration-200 drop-shadow-lg"
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
        <div className={`absolute top-3 right-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-80 scale-95'
        }`}>
          <ImageMenu image={imageData} />
        </div>

        {/* View Button */}
        <div className={`absolute bottom-3 left-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white text-slate-800 shadow-lg"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
              onImageClick?.(imageData);
            }}
          >
            <Eye className="h-4 w-4 mr-1" />
            View
          </Button>
        </div>
        
        {/* Loading State */}
        {transition && (
          <div className="absolute inset-0 bg-white/50 dark:bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        image={imageData}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
