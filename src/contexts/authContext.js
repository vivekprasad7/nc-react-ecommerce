import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {


    const authInitial ={
        isLoggedIn: false,
        user:{}, 
        token:'',
    }


    const [ authState, authDispatch] = useReducer(authReducer, authInitial)
    const navigate = useNavigate();


    const userLogin = async (loginData) => {
        try{
            const {data, status} = await axios({
                method:"POST",
                data:loginData,
                url:"/api/auth/login"
            })

            console.log("authcontext",data);
            if(status ===200){
                authDispatch({type:"SET_ISLOGGEDIN", payload:true})
                authDispatch({type:"SET_USER", payload:data?.foundUser})
                authDispatch({type:"SET_LOGGEDIN", payload:data?.encodedToken})
                navigate('/');
                localStorage.setItem('token', data?.encodedToken)
            }

        
        } catch(e){
            console.error(e)
        }
    }




    return(
        <>
        <AuthContext.Provider value={{ authState, authReducer, userLogin}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)