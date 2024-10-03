//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      setUser(null);
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = (email, password) => {
    if (email === "21522168@gm.uit.edu.vn" && password === "tranminhhuy") {
      setUser({ email });
    } else {
      alert("Thông tin đăng nhập không đúng!");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
