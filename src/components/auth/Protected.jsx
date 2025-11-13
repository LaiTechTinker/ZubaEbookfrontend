import React, { Children } from 'react';
import Loader from "../Ui/Loading"
import { Navigate,useLocation } from 'react-router-dom';


function Protected({children}) {
  const isauthenticated=false
  const loading=false;
  const location=useLocation()
  
   if (loading){
     return <Loader/>
   }
   if (!isauthenticated){
    return <Navigate to="/Login" state={{from:location}} replace/>
   }

   return children

}

export default Protected;
