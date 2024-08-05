import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("UserInfo")) || null);

  const login = (user) => {
    setAuthUser(user);
    localStorage.setItem("UserInfo", JSON.stringify(user));
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem("UserInfo");
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
