import React from 'react'
import { useAuthContext } from '../../contexts/authContext'
import { Navigate, useLocation } from 'react-router-dom';
import { Login } from '../../pages/login/login';

export const RequiresAuth = ({children}) => {

    const location = useLocation()

    const {isLoggedIn} =useAuthContext();

  return isLoggedIn ? children : <Navigate to={<Login/>} state={{from:location}}/>
}
