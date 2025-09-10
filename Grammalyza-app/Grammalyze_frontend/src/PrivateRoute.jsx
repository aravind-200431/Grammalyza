import React from 'react'
import { Navigate} from 'react-router-dom';

export default function PrivateRoute({children,IsPublic}){
  const token=localStorage.getItem("JWT_TOKEN");
    
      if(IsPublic){
         return token ? <Navigate to="/chatbot" /> : children
      }

      return !token ? <Navigate  to="/login" /> : children
    
  
}

