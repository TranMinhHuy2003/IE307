import {useState, createContext } from 'react';
const UserContext = createContext();
const UserContextProvider = ({ children }) => {
    const [user,setuser]=useState({fullname:""});
    return (
      <UserContext.Provider value={{ user,setuser }}>
        {children}
      </UserContext.Provider>
    );
  };
export  {UserContext,UserContextProvider}