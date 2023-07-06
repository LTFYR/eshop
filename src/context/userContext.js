import React, { createContext, useContext, useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [logedUser, setLogedUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setLogedUser(user);
    } else {
      setLogedUser(false);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, logedUser, isAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
