"use client";

import Link from "next/link";
import { NotificationBellIcon } from "@/assets";
import { UnreadMessageCount } from "./UnreadMessageCount";

const NotificationBell = () => (
  <Link href="/messages" className="relative group">
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="sr-only">View notifications</span>
      <NotificationBellIcon />
    </button>
    <UnreadMessageCount />
  </Link>
);

export { NotificationBell };
