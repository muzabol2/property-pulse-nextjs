import Link from 'next/link';

const DesktopMenu = ({ pathName, isLoggedIn }) => {
  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-2">
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
      </div>
    </div>
  );
};

const MenuItem = ({ href, label, active }) => (
  <Link
    href={href}
    className={`${active ? 'bg-black' : ''} text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
  >
    {label}
  </Link>
);

export { DesktopMenu };
