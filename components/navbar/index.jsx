"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { signIn, signOut, getProviders, useSession } from "next-auth/react";

import { useMediaQuery } from "@/hooks";
import { Logo } from "./Logo";
import { MobileMenuButton } from "./MobileMenuButton";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { ProfileDropdown } from "./ProfileDropdown";
import { LoginButton } from "./LoginButton";

const Navbar = () => {
  const { data: session } = useSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const setAuthProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    setAuthProviders();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-700 border-b border-blue-500 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenuButton setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Logo />
            <DesktopMenu pathName={pathName} session={session} />
          </div>

          {session ? (
            <ProfileDropdown
              isOpen={isProfileMenuOpen}
              setIsOpen={setIsProfileMenuOpen}
              signOut={signOut}
            />
          ) : (
            <LoginButton
              isVisible={!isMobile}
              providers={providers}
              signIn={signIn}
            />
          )}
        </div>
      </div>

      {isMobileMenuOpen && isMobile && (
        <MobileMenu
          pathName={pathName}
          session={session}
          providers={providers}
          signIn={signIn}
        />
      )}
    </nav>
  );
};

export { Navbar };
