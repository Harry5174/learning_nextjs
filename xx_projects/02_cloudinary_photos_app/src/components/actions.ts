"use server";

import { SearchResult } from "@/app/gallery/page";
import cloudinary from "@/lib/cloudinary";

export async function addImageToAlbum(image: SearchResult, folder: string) {
  await cloudinary.api.create_folder(folder);

  let parts = image.public_id.split('/');
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join('/')


  await cloudinary.uploader.rename(
    image.public_id,
    `${folder}/${publicId}`
  );
}
