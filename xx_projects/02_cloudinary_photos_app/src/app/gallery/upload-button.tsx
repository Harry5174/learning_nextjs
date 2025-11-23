"use client";

import { CldUploadButton } from "next-cloudinary";
import { uploadResult } from "../page";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Upload, Plus } from "lucide-react";
import { useState } from "react";

export default function UploadButton() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);

  return (
    <CldUploadButton 
      className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      onUpload={(result: uploadResult | any) => {
        setIsUploading(true);
        setTimeout(() => {
          console.log("refresh");
          router.refresh();
          setIsUploading(false);
        }, 1000);
      }}
      uploadPreset="uorsbb9n"
      disabled={isUploading}
    >
      {isUploading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Uploading...
        </>
      ) : (
        <>
          <Upload className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
          Upload Photos
          <Plus className="h-3 w-3 ml-1 group-hover:rotate-90 transition-transform duration-300" />
        </>
      )}
    </CldUploadButton>
  );
}
