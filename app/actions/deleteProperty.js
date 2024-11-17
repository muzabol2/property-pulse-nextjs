"use server";

import { cloudinary, connectDB } from "@/config";
import { Property } from "@/models";
import { getSessionUser } from "@/utils";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  await connectDB();

  const property = await Property.findById(propertyId);

  if (!property) {
    throw new Error("Property Not Found");
  }

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  // get public ID from image URLs
  const publicIds = property.images.map((imageUrl) =>
    imageUrl.split("/").at(-1).split(".").at(0)
  );

  // Delete from Cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy(`propertypulse/${publicId}`);
    }
  }

  await property.deleteOne();

  revalidatePath("/", "layout");
}

export { deleteProperty };
