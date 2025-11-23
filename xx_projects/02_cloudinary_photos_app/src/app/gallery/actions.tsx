"use server";

import cloudinary from "@/lib/cloudinary";

export async function SetAsFavouriteAction(
  publicId: string,
  isfavourite: boolean
) {
    if (isfavourite) {
        await cloudinary.uploader.add_tag("favourite", [publicId]);
    } else {       
        await cloudinary.uploader.remove_tag("favourite", [publicId]);      
    }
}
