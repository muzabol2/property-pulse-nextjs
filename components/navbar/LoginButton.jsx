'use client';

import { FaGoogle } from 'react-icons/fa';

const LoginButton = ({ isVisible = true, providers, signIn }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      {providers &&
        Object.values(providers).map((provider, index) => (
          <button
            key={index}
            className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
            onClick={() => signIn(provider.id)}
          >
            <FaGoogle className="text-white mr-2" />
            <span>Login or Register</span>
          </button>
        ))}
    </>
  );
};

export { LoginButton };
