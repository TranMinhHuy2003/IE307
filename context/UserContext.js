//Tên: Trần Minh Huy
//MSSV: 21522168
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUserData = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        const decoded = jwtDecode(storedToken);
        const userData = { id: decoded.sub, username: decoded.user };
        setUser(userData);
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', { username, password });
      if (response.data.token) {
        const storedToken = response.data.token;
        setToken(storedToken);
        const decoded = jwtDecode(storedToken);
        const userResponse = await axios.get(`https://fakestoreapi.com/users/${decoded.sub}`);
        setUser(userResponse.data);
        await AsyncStorage.setItem('token', storedToken);
      }
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      return null;
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem('token');
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};