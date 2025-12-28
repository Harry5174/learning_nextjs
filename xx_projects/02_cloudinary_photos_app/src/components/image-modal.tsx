"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { SearchResult } from "@/app/gallery/page";
import { Heart } from "@/components/icons/heart";
import { FullHeart } from "@/components/icons/full-heart";
import { Download, Share2, ZoomIn, ZoomOut, RotateCw, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SetAsFavouriteAction } from "@/app/gallery/actions";
import { useTransition } from "react";

interface ImageModalProps {
  image: SearchResult | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export function ImageModal({
  image,
  isOpen,
  onClose,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false
}: ImageModalProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isFavourited, setIsFavourited] = useState(false);
  const [transition, startTransition] = useTransition();

  useEffect(() => {
    if (image) {
      setIsFavourited(image.tags.includes("favourite"));
      setZoom(1);
      setRotation(0);
    }
  }, [image]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrevious && onPrevious) onPrevious();
          break;
        case 'ArrowRight':
          if (hasNext && onNext) onNext();
          break;
        case '+':
        case '=':
          e.preventDefault();
          setZoom(prev => Math.min(prev + 0.25, 3));
          break;
        case '-':
          e.preventDefault();
          setZoom(prev => Math.max(prev - 0.25, 0.5));
          break;
        case 'r':
          e.preventDefault();
          setRotation(prev => (prev + 90) % 360);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!image) return null;

  const handleFavorite = () => {
    const newFavoriteState = !isFavourited;
    setIsFavourited(newFavoriteState);
    startTransition(() => {
      SetAsFavouriteAction(image.public_id, newFavoriteState);
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://res.cloudinary.com/dhxqmgy9a/image/upload/${image.public_id}`;
    link.download = image.public_id.split('/').pop() || 'image';
    link.click();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this photo',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <DialogHeader className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-white text-lg font-medium">
                {image.public_id.split('/').pop()}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>

          {/* Navigation Arrows */}
          {hasPrevious && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          {hasNext && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center p-8 pt-16 pb-20">
            <div
              className="relative max-w-full max-h-full transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
              }}
            >
              <CldImage
                src={image.public_id}
                width={1200}
                height={800}
                alt="Full size image"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                quality="auto"
                format="auto"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleFavorite}
                  className="text-white hover:bg-white/20"
                  disabled={transition}
                >
                  {isFavourited ? (
                    <FullHeart className="h-5 w-5 text-red-500" />
                  ) : (
                    <Heart className="h-5 w-5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="text-white hover:bg-white/20"
                >
                  <Download className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-white hover:bg-white/20"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Center Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setZoom(prev => Math.max(prev - 0.25, 0.5))}
                  className="text-white hover:bg-white/20"
                >
                  <ZoomOut className="h-5 w-5" />
                </Button>

                <span className="text-white text-sm px-2">
                  {Math.round(zoom * 100)}%
                </span>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setZoom(prev => Math.min(prev + 0.25, 3))}
                  className="text-white hover:bg-white/20"
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setRotation(prev => (prev + 90) % 360)}
                  className="text-white hover:bg-white/20"
                >
                  <RotateCw className="h-5 w-5" />
                </Button>
              </div>

              {/* Right Controls */}
              <div className="text-white text-sm">
                {hasPrevious && hasNext && (
                  <span>Use ← → arrow keys to navigate</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
