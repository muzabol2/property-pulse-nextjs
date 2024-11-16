"use client";

import Image from "next/image";
import Link from "next/link";
import { ProfileDefaultImage } from "@/assets";
import { NotificationBell } from "./NotificationBell";

const ProfileDropdown = ({ profileImage, isOpen, setIsOpen, signOut }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
      <NotificationBell />
      <div className="relative ml-3">
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none hover:bg-gray-700"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Image
            className="h-8 w-8 rounded-full"
            src={profileImage || ProfileDefaultImage}
            width={40}
            height={40}
            alt="profile image"
          />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg"
            role="menu"
          >
            <div className="w-full flex flex-col">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/properties/saved"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Saved Properties
              </Link>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProfileDropdown };
