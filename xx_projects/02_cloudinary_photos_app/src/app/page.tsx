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
  };

  const handleDragDropUpload = (results: uploadResult[]) => {
    setUploadedImages(prev => [...prev, ...results]);
    if (results.length > 0) {
      setImageId(results[0].info.public_id);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
              <Sparkles className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cloudinary Photos
            </h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Upload, organize, and manage your photos with ease. Powered by Cloudinary's advanced image processing.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-4xl mx-auto">
          {/* Original Cloudinary Upload */}
          <Card className="border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg mb-6">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="mb-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Upload className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Upload Your Photos</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Click to browse and upload your images
                  </p>
                </div>

                <CldUploadButton
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  onUpload={(result: uploadResult | any) => {
                    setIsUploading(true);
                    handleUpload(result);
                  }}
                  uploadPreset="uorsbb9n"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Choose Images
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </CldUploadButton>
              </div>
            </CardContent>
          </Card>

          {/* Alternative: Drag & Drop Upload */}
          <div className="text-center mb-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm">or</p>
          </div>
          
          <DragDropUpload
            onUploadComplete={handleDragDropUpload}
            uploadPreset="uorsbb9n"
            maxFiles={10}
          />

          {/* Success Message */}
          {(imageId || uploadedImages.length > 0) && (
            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-center mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full mr-3">
                  <ImageIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                  Upload Successful!
                </h3>
              </div>
              
              {uploadedImages.length > 0 && (
                <div className="mb-4">
                  <p className="text-center text-green-700 dark:text-green-300 mb-3">
                    {uploadedImages.length} image{uploadedImages.length > 1 ? 's' : ''} uploaded successfully
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-40 overflow-y-auto">
                    {uploadedImages.map((result, index) => (
                      <CldImage
                        key={index}
                        width="150"
                        height="100"
                        src={result.info.public_id}
                        sizes="100vw"
                        alt="Uploaded image"
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {imageId && uploadedImages.length === 0 && (
                <div className="mb-4">
                  <CldImage
                    width="300"
                    height="200"
                    src={imageId}
                    sizes="100vw"
                    alt="Uploaded image"
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
              )}
              
              <div className="flex gap-3 justify-center">
                <Button asChild variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                  <Link href="/gallery">
                    View in Gallery
                  </Link>
                </Button>
                <Button 
                  onClick={() => {
                    setImageId("");
                    setUploadedImages([]);
                  }}
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Upload More
                </Button>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Gallery</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Browse and manage all your uploaded photos
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Upload className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">Albums</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Organize your photos into custom albums
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/albums">Manage Albums</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="font-semibold mb-2">Favorites</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  View your favorite photos in one place
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/favorites">View Favorites</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
