import { getCurrentUser } from "../lib/appwrite";
import { User } from "../lib/modal";
import { createContext, useContext, useEffect, useState } from "react";

type GlobalContextType = {
  user: User;
  setUser: (user: User | null) => void;
  refreshUser: () => void;
};

const GlobalContext = createContext<GlobalContextType>({
  user: {
    userId: "",
    name: "",
    email: "",
    avatarUrl: "",
  },
  setUser: () => {},
  refreshUser: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>({
    userId: "",
    name: "",
    email: "",
    avatarUrl: "",
  });

  const [refreshCnt, setRefreshCnt] = useState(0);

  const getUserInfo = async () => {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      console.error("Failed to fetch user info:", error);
      throw error;
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [refreshCnt]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        refreshUser: () => setRefreshCnt((prev) => prev + 1),
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
