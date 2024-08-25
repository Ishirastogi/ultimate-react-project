import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get("/api/auth/user")
        .then((response) => {
          setUser(response.data);
          setIsAuthenticated(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        });
    }
  }, []);

  const login = async (credentials) => {
    const response = await axios.post("/api/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    setUser(response.data.user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
