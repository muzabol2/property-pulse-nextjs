"use server";

import { connectDB } from "@/config";
import { Message } from "@/models";
import { getSessionUser } from "@/utils";
import { revalidatePath } from "next/cache";

async function markMessageAsRead(messageId) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  const message = await Message.findById(messageId);

  if (!message) {
    throw new Error("Message not found");
  }

  // Verify ownership
  if (message.recipient.toString() !== userId) {
    throw new Error("Unauthorized");
  }

  message.read = !message.read;

  revalidatePath("/messages", "page");

  await message.save();

  return message.read;
}

export { markMessageAsRead };
