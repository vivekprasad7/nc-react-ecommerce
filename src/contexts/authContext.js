import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState();


    const getData = async () => {
        try{
            const creds = {
                email : "adarshbalika@gmail.com",
                password:"adarshbalika"
            }
            const res = await fetch("/api/auth/login", {
                method:'POST',
                body: JSON.stringify(creds)
            })

            console.log(await res.json())

        }catch(e){
            console.error(e)
        }
    } 




    return(
        <>
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)