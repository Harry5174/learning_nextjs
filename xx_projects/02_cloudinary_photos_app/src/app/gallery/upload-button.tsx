"use client";

import { CldUploadButton } from "next-cloudinary";
import { uploadResult } from "../page";
import { useRouter } from "next/navigation";
import { Upload } from "lucide-react";
import { useState } from "react";

export default function UploadButton() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);

  return (
    <CldUploadButton
      className={`group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-white text-black hover:bg-zinc-200 rounded-md ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
      onUpload={(result: uploadResult | any) => {
        setIsUploading(true);
        setTimeout(() => {
          router.refresh();
          setIsUploading(false);
        }, 1000);
      }}
      uploadPreset="uorsbb9n"
    >
      {isUploading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
          <span>Uploading...</span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          <span>Upload</span>
        </div>
      )}
    </CldUploadButton>
  );
}
