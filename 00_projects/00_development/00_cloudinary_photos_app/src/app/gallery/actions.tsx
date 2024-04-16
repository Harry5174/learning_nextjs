"use server";

import cloudinary from "cloudinary";

export async function SetAsFavouriteAction(
  publicId: string,
  isfavourite: boolean
) {
    if (isfavourite) {
        await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
    } else {       
        await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);      
    }
}
