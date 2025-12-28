"use client";

import { useState, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, X, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";
import { uploadResult } from "@/app/page";
import { useToast } from "./toast";

interface UploadFile {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'success' | 'error';
  progress: number;
  error?: string;
  result?: uploadResult;
}

interface DragDropUploadProps {
  onUploadComplete?: (results: uploadResult[]) => void;
  uploadPreset: string;
  maxFiles?: number;
}

export function DragDropUpload({
  onUploadComplete,
  uploadPreset,
  maxFiles = 10
}: DragDropUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

  const addFiles = useCallback((files: File[]) => {
    setUploadFiles(prev => {
      const newFiles: UploadFile[] = files.slice(0, maxFiles - prev.length).map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        status: 'pending',
        progress: 0,
      }));
      return [...prev, ...newFiles];
    });
  }, [maxFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/')
    );

    if (files.length > 0) {
      addFiles(files);
    }
  }, [addFiles]);

  const removeFile = (id: string) => {
    setUploadFiles(prev => prev.filter(file => file.id !== id));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file =>
      file.type.startsWith('image/')
    );

    if (files.length > 0) {
      addFiles(files);
    }
  };

  const handleUpload = async () => {
    if (uploadFiles.length === 0) return;

    setIsUploading(true);
    const results: uploadResult[] = [];

    for (const uploadFile of uploadFiles) {
      if (uploadFile.status === 'pending') {
        setUploadFiles(prev => prev.map(file =>
          file.id === uploadFile.id
            ? { ...file, status: 'uploading', progress: 0 }
            : file
        ));

        try {
          const formData = new FormData();
          formData.append('file', uploadFile.file);
          formData.append('upload_preset', uploadPreset);

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/dhxqmgy9a/image/upload`,
            {
              method: 'POST',
              body: formData,
            }
          );

          if (response.ok) {
            const result = await response.json();
            results.push(result);

            setUploadFiles(prev => prev.map(file =>
              file.id === uploadFile.id
                ? { ...file, status: 'success', progress: 100, result }
                : file
            ));
          } else {
            throw new Error('Upload failed');
          }
        } catch (error) {
          setUploadFiles(prev => prev.map(file =>
            file.id === uploadFile.id
              ? { ...file, status: 'error', error: 'Upload failed' }
              : file
          ));
        }
      }
    }

    setIsUploading(false);
    if (results.length > 0) {
      addToast({
        type: 'success',
        title: 'Upload successful',
        description: `${results.length} images uploaded`
      });
      onUploadComplete?.(results);
    }
  };

  const getStatusIcon = (status: UploadFile['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-white" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'uploading':
        return <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>;
      default:
        return <ImageIcon className="h-4 w-4 text-zinc-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        className={`border border-dashed transition-all duration-300 rounded-lg ${isDragOver
          ? 'border-white bg-zinc-900'
          : 'border-zinc-800 hover:border-zinc-600 bg-black'
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-8 text-center">
          <div className="mb-4 flex items-center justify-center">
            <Upload className="h-6 w-6 text-zinc-500" />
          </div>
          <h3 className="text-sm font-medium mb-1 text-white">Drop images manually</h3>
          <p className="text-zinc-600 text-xs mb-4">
            or click below to browse
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              size="sm"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white"
            >
              Choose Files
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* File List */}
      {uploadFiles.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <h4 className="text-xs font-medium text-zinc-400">Queue ({uploadFiles.length})</h4>
            <Button
              onClick={handleUpload}
              disabled={isUploading || uploadFiles.every(f => f.status !== 'pending')}
              size="sm"
              className="bg-white text-black hover:bg-zinc-200"
            >
              {isUploading ? 'Uploading...' : 'Upload All'}
            </Button>
          </div>

          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {uploadFiles.map((file) => (
              <div key={file.id} className="bg-zinc-950 border border-zinc-900 rounded p-3 flex items-center gap-3">
                {getStatusIcon(file.status)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate text-zinc-300">{file.file.name}</p>
                  {file.status === 'uploading' && (
                    <div className="w-full bg-zinc-900 rounded-full h-1 mt-2">
                      <div
                        className="bg-white h-1 rounded-full transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      ></div>
                    </div>
                  )}
                  {file.error && (
                    <p className="text-xs text-red-500 mt-1">{file.error}</p>
                  )}
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="text-zinc-600 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
