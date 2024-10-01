'use client';

import Link from 'next/link';
import { LoginButton } from './LoginButton';

const MobileMenu = ({ pathName, isLoggedIn }) => {
  return (
    <div id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <MenuItem href="/" label="Home" active={pathName === '/'} />
        <MenuItem
          href="/properties"
          label="Properties"
          active={pathName === '/properties'}
        />
        {isLoggedIn && (
          <MenuItem
            href="/properties/add"
            label="Add Property"
            active={pathName === '/properties/add'}
          />
        )}

        {!isLoggedIn && <LoginButton />}
      </div>
    </div>
  );
};

const MenuItem = ({ href, label, active }) => (
  <Link
    href={href}
    className={`${active ? 'bg-black' : ''} text-white block rounded-md px-3 py-2 text-base font-medium`}
  >
    {label}
  </Link>
);

export { MobileMenu };
