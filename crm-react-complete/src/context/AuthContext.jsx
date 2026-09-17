import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("crm_user")) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (user) localStorage.setItem("crm_user", JSON.stringify(user));
    else localStorage.removeItem("crm_user");
  }, [user]);

  async function login(email, password) {
    const { data } = await api.post("/auth/login", { email, password });
    setUser(data);
    return data;
  }

  async function register(payload) {
    const { data } = await api.post("/auth/register", payload);
    setUser(data);
    return data;
  }

  async function resetPassword(email, newPassword) {
    return (await api.post("/auth/reset-password", { email, newPassword })).data;
  }

  function logout() {
    setUser(null);
  }

  function updateUser(next) {
    setUser(next);
  }

  return (
    <AuthContext.Provider value={{ user, login, register, resetPassword, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
