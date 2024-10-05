'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { MobileMenuButton } from './MobileMenuButton';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { ProfileDropdown } from './ProfileDropdown';
import { LoginButton } from './LoginButton';
import { useMediaQuery } from '@/hooks';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathName = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-700 border-b border-blue-500 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <MobileMenuButton setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Logo />
            <DesktopMenu pathName={pathName} isLoggedIn={isLoggedIn} />
          </div>

          {isLoggedIn ? (
            <ProfileDropdown
              isOpen={isProfileMenuOpen}
              setIsOpen={setIsProfileMenuOpen}
              onLogout={handleLogin}
            />
          ) : (
            <LoginButton isVisible={!isMobile} onLogin={handleLogin} />
          )}
        </div>
      </div>

      {isMobileMenuOpen && isMobile && (
        <MobileMenu
          pathName={pathName}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />
      )}
    </nav>
  );
};

export { Navbar };
