import React from 'react'
import { useAuthContext } from '../../contexts/authContext'
import { Navigate, useLocation } from 'react-router-dom';

export const RequiresAuth = ({children}) => {

    const location = useLocation();
    const {authState:{token}} = useAuthContext()

  
    return token ? (children) : (<Navigate to="/login" state={{from:location}} replace/>)

}
