"use server";

import { connectDB } from "@/config";
import { Message } from "@/models";
import { getSessionUser } from "@/utils";

async function getUnreadMessageCount() {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: "User ID is required" };
  }

  const { userId } = sessionUser;

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });

  return { count };
}

export { getUnreadMessageCount };
