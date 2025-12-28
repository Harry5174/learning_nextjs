"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Image as ImageIcon, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DragDropUpload } from "@/components/drag-drop-upload";

export type uploadResult = {
  info: {
    public_id: string;
    width: number;
    height: number;
  };
  event: 'success';
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<uploadResult[]>([]);

  const handleUpload = (result: uploadResult | any) => {
    setIsUploading(false);
    setImageId(result.info.public_id);
    setUploadedImages(prev => [{ ...result, id: result.info.public_id }, ...prev]);
  };

  const handleDragDropUpload = (results: uploadResult[]) => {
    setUploadedImages(prev => [...prev, ...results]);
    if (results.length > 0) {
      setImageId(results[0].info.public_id);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <div className="flex flex-col items-start gap-4 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl font-light tracking-tight">
            Cloudinary Photos
          </h1>
          <p className="text-zinc-500 font-light max-w-xl">
            A minimalist space for your visual collection. Upload, organize, and refine.
          </p>
        </div>

        {/* Upload Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-medium tracking-wide">Upload</h2>

            {/* Main Upload Box */}
            <div className="border border-dashed border-zinc-800 rounded-lg p-10 hover:border-zinc-600 transition-colors bg-zinc-900/30">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800">
                  <Upload className="h-6 w-6 text-white" />
                </div>

                <div className="space-y-4">
                  <CldUploadButton
                    className="inline-flex items-center justify-center h-10 px-8 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-black hover:bg-zinc-200 rounded-md"
                    onUpload={(result: uploadResult | any) => {
                      setIsUploading(true);
                      handleUpload(result);
                    }}
                    uploadPreset="uorsbb9n"
                  >
                    {isUploading ? "Uploading..." : "Select Files"}
                  </CldUploadButton>
                  <p className="text-sm text-zinc-600">or drag and drop here</p>
                </div>
              </div>
            </div>

            {/* Drag Drop Component Integration - Passing minimalist props if possible, or wrapping container handles styles */}
            <div className="opacity-0 h-0 overflow-hidden">
              <DragDropUpload
                onUploadComplete={handleDragDropUpload}
                uploadPreset="uorsbb9n"
                maxFiles={10}
              />
            </div>

          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-medium tracking-wide flex justify-between items-center">
              <span>Recent</span>
              <Link href="/gallery" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1">
                View Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </h2>

            {uploadedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {uploadedImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-zinc-900 rounded-md overflow-hidden border border-zinc-800 group">
                    <CldImage
                      width="400"
                      height="400"
                      src={img.info.public_id}
                      sizes="50vw"
                      alt="Uploaded image"
                      className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center border border-zinc-900 rounded-lg bg-zinc-950/50 text-zinc-700 text-sm">
                No recent uploads
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
          <Link href="/gallery" className="group block p-6 border border-zinc-800 bg-zinc-950/30 hover:bg-zinc-900 transition-colors rounded-lg text-center">
            <ImageIcon className="w-6 h-6 mx-auto mb-3 text-zinc-500 group-hover:text-white transition-colors" />
            <h3 className="font-medium text-white mb-1">Gallery</h3>
            <p className="text-sm text-zinc-600">View all photos</p>
          </Link>
          <Link href="/albums" className="group block p-6 border border-zinc-800 bg-zinc-950/30 hover:bg-zinc-900 transition-colors rounded-lg text-center">
            <div className="w-6 h-6 mx-auto mb-3 flex items-center justify-center border border-zinc-700 rounded text-zinc-500 group-hover:border-white group-hover:text-white transition-colors">
              <span className="text-xs">A</span>
            </div>
            <h3 className="font-medium text-white mb-1">Albums</h3>
            <p className="text-sm text-zinc-600">Organize collections</p>
          </Link>
          <Link href="/favorites" className="group block p-6 border border-zinc-800 bg-zinc-950/30 hover:bg-zinc-900 transition-colors rounded-lg text-center">
            <Sparkles className="w-6 h-6 mx-auto mb-3 text-zinc-500 group-hover:text-white transition-colors" />
            <h3 className="font-medium text-white mb-1">Favorites</h3>
            <p className="text-sm text-zinc-600">Your best shots</p>
          </Link>
        </div>


      </div>
    </main>
  );
}
