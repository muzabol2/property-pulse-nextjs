"use server";

import { connectDB } from "@/config";
import { User } from "@/models";
import { getSessionUser } from "@/utils";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;
  const user = await User.findById(userId);

  let isBookmarked = user.bookmarks.includes(propertyId);
  console.log("isBookmarked", isBookmarked);

  let message;

  if (isBookmarked) {
    user.bookmarks.pull(propertyId);
    message = "Bookmark removed.";
    isBookmarked = false;
  } else {
    user.bookmarks.push(propertyId);
    message = "Bookmark added.";
    isBookmarked = true;
  }

  await user.save();
  revalidatePath("/properties/saved", "page");

  return { isBookmarked, message };
}

export { bookmarkProperty };
