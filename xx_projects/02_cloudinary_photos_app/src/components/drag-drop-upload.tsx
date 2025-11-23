"use client";

import { useState, useCallback, useRef } from "react";
import { CldUploadButton } from "next-cloudinary";
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
  }, []);

  const addFiles = (files: File[]) => {
    const newFiles: UploadFile[] = files.slice(0, maxFiles - uploadFiles.length).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'pending',
      progress: 0,
    }));

    setUploadFiles(prev => [...prev, ...newFiles]);
  };

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
        title: 'Upload successful!',
        description: `${results.length} image${results.length > 1 ? 's' : ''} uploaded successfully`
      });
      onUploadComplete?.(results);
    }
  };

  const getStatusIcon = (status: UploadFile['status']) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'uploading':
        return <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>;
      default:
        return <ImageIcon className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusColor = (status: UploadFile['status']) => {
    switch (status) {
      case 'success':
        return 'border-green-200 bg-green-50 dark:bg-green-900/20';
      case 'error':
        return 'border-red-200 bg-red-50 dark:bg-red-900/20';
      case 'uploading':
        return 'border-blue-200 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'border-slate-200 bg-slate-50 dark:bg-slate-800';
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <Card 
        className={`border-2 border-dashed transition-all duration-300 ${
          isDragOver 
            ? 'border-blue-400 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-slate-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CardContent className="p-8">
          <div className="text-center">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Drop images here</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              or click to browse files
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
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
        </CardContent>
      </Card>

      {/* File List */}
      {uploadFiles.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Selected Files ({uploadFiles.length})</h4>
            <Button
              onClick={handleUpload}
              disabled={isUploading || uploadFiles.every(f => f.status !== 'pending')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isUploading ? 'Uploading...' : 'Upload All'}
            </Button>
          </div>
          
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {uploadFiles.map((file) => (
              <Card key={file.id} className={`${getStatusColor(file.status)}`}>
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(file.status)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.file.name}</p>
                      <p className="text-xs text-slate-500">
                        {(file.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      {file.status === 'uploading' && (
                        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      )}
                      {file.error && (
                        <p className="text-xs text-red-500 mt-1">{file.error}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(file.id)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
