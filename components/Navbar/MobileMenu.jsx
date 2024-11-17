"use client";

import Link from "next/link";
import { LoginButton } from "./LoginButton";

const MobileMenu = ({ pathName, session, providers, setIsOpen, signIn }) => {
  return (
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <Link
          href="/"
          className={`text-white block rounded-md px-3 py-2 text-base font-medium ${pathName === "/" && "bg-black"}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/properties"
          className={`text-white block rounded-md px-3 py-2 text-base font-medium ${pathName === "/properties" && "bg-black"}`}
          onClick={() => setIsOpen(false)}
        >
          Properties
        </Link>
        {session && (
          <Link
            href="/properties/add"
            className={`text-white block rounded-md px-3 py-2 text-base font-medium ${pathName === "/properties/add" && "bg-black"}`}
            onClick={() => setIsOpen(false)}
          >
            Add Property
          </Link>
        )}

        {!session && <LoginButton providers={providers} signIn={signIn} />}
      </div>
    </div>
  );
};

export { MobileMenu };
