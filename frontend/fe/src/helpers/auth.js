import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("token"));

  const login = (token) => {
    setUser(token);
    localStorage.setItem("token", token);
    const path = "/homepage";
    navigate(path);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    const path = "/";
    navigate(path);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
