"use client";

import Link from "next/link";

const DesktopMenu = ({ pathName, session }) => {
  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-2">
        <Link
          href="/"
          className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${pathName === "/" && "bg-black"}`}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${pathName === "/properties" && "bg-black"}`}
        >
          Properties
        </Link>
        {session && (
          <Link
            href="/properties/add"
            className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${pathName === "/properties/add" && "bg-black"}`}
          >
            Add Property
          </Link>
        )}
      </div>
    </div>
  );
};

export { DesktopMenu };
