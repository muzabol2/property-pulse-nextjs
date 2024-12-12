"use client";

import { getUnreadMessageCount } from "@/app/actions";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const GlobalContext = createContext();

// Create Provider
export const GlobalProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getUnreadMessageCount().then((res) => {
        if (res.count) {
          setUnreadCount(res.count);
        }
      });
    }
  }, [getUnreadMessageCount, session]);

  return (
    <GlobalContext.Provider
      value={{
        unreadCount,
        setUnreadCount,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
