import React, { Children } from 'react';
// import Loader from "../Ui/Loading"
import {useAuth} from "../../context/AuthContext.jsx"
import { Navigate,useLocation } from 'react-router-dom';


function Protected({children}) {
  const {isAuthenticated,loading}=useAuth()
 
  const location=useLocation()
  
   if (loading){
     return <div>Loading...</div>
   }
   if (!isAuthenticated){
    return <Navigate to="/Login" state={{from:location}} replace/>
   }

   return children

}

export default Protected;
