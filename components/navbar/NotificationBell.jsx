import Link from 'next/link';
import { NotificationBellIcon } from '@/assets';

const NotificationBell = () => (
  <Link href="/messages" className="relative group">
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="sr-only">View notifications</span>
      <NotificationBellIcon />
    </button>
    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
      2
    </span>
  </Link>
);

export { NotificationBell };
