"use client";

import { HamburgerIcon } from "@/assets";

const MobileMenuButton = ({ setIsMobileMenuOpen }) => (
  <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
    <button
      type="button"
      id="mobile-dropdown-button"
      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
    >
      <span className="absolute -inset-0.5"></span>
      <span className="sr-only">Open main menu</span>
      <HamburgerIcon />
    </button>
  </div>
);

export { MobileMenuButton };
