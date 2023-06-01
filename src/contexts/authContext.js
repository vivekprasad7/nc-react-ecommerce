import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [loginInput, setLoginInput] = useState({email:"", password:""})

    const [signupInput, setSignupInput] = useState({name:"", email:"",password:"", confirmPassword:""})

    const authInitial = {
        authLoading: false,
        isLoggedIn: false,
        user:{},
        token:"",
        error:"",
    }

    const [authState, authDispatch] = useReducer(authReducer, authInitial);

    const navigate = useNavigate();
    const location = useLocation();


    const loginHandler = async (loginInput) => {
        try{
            authDispatch({type: "SET_AUTH_LOADING", payload:true})
            const {data, status} = await axios({
                method:"POST",
                data:loginInput,
                url:"api/auth/login"
            });
            if (status === 200){
                authDispatch({type: "SET_ISLOGGEDIN", payload:true})
                authDispatch({type: "SET_USER", payload:data?.foundUser})
                authDispatch({type: "SET_TOKEN", payload:data?.encodedToken})
                authDispatch({type: "SET_AUTH_LOADING", payload:false})
                navigate(location?.state?.from?.pathname || "/")
                localStorage.setItem("token", data?.encodedToken)
            }
        } catch(e){
            console.error(e);
            if(e.request.status === 401){
                authDispatch({type: "SET_ERROR", payload: "WRONG PASSWORD"})
            } else{
                authDispatch({type: "SET_ERROR", payload: "USER NOT FOUND"})
            }
        }
    }

    const signupHandler = async (signupInput) => {
        try{
            authDispatch({type: "SET_AUTH_LOADING", payload:true})
            const {data, status} = await axios({
                method:"POST",
                data:signupInput,
                url:"api/auth/signup"
            });
            if (status === 201){
                authDispatch({type: "SET_ISLOGGEDIN", payload:true})
                authDispatch({type: "SET_USER", payload:data?.createdUser})
                authDispatch({type: "SET_TOKEN", payload:data?.encodedToken})
                authDispatch({type: "SET_AUTH_LOADING", payload:false})
                navigate(location?.state?.from?.pathname || "/")
                localStorage.setItem("token", data?.encodedToken)
            }
        } catch(e){
            console.error(e);
           
        }
    }

    const logoutHandler = () => {
        authDispatch({type: "SET_ISLOGGEDIN", payload:false})
        authDispatch({type: "SET_USER", payload:{}})
        authDispatch({type: "SET_TOKEN", payload:""})
        localStorage.setItem("token", "")
    }

    return(
        <>
        <AuthContext.Provider value={{ authState, loginHandler, signupHandler, logoutHandler, loginInput, setLoginInput, signupInput, setSignupInput}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)