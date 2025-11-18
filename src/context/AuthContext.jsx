import React, { createContext, useState, useEffect, useContext } from "react";

// Create Context
export const AuthContext = createContext();
export const useAuth=()=>{
  const context =useContext(AuthContext)
  if(!context){
    throw new Error("useAuth must be used within an Authprovider")
  }
  return context
}
// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user info
  const [token, setToken] = useState(null); // store auth token
  const [loading, setLoading] = useState(true); // track loading state
  const[isAuthenticated,setIsAuthenticated]=useState(false)

  // Example: load auth state from localStorage on mount
  useEffect(() => {
    
checkAuthStatus()
  
  }, []);
  const checkAuthStatus=async()=>{
    try{
const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsAuthenticated(true)
    }
    }catch(e){
  setLoading(false);
  console.log("auth failed:",e)
    }
  }

  // Login function
  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false)
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href("/")
  };

//   update user
const updateUser=(updateUserData)=>{
const newuserdata={...user,...updateUserData};
localStorage.setItem("user",JSON.stringify(newuserdata))
setUser(newuserdata)
}

  return (
    <AuthContext.Provider
      value={{ user, token,isAuthenticated, loading, login, logout,updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
