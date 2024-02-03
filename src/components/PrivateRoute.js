import React from 'react'
import {  Navigate } from 'react-router-dom';

export default function PrivateRoute({login,children}) {
    if(login){
        return children;
    }
    else{
       return <Navigate to="/login" />
    }
}
