import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  let lt = JSON.parse(localStorage.getItem("Token"))  
  // console.log('lt:', lt)
  const handelToken = (token) => {
      setToken(lt);
  };

  return (
    <AuthContext.Provider value={{ token, handelToken }}>
      {children}
    </AuthContext.Provider>
  );
};