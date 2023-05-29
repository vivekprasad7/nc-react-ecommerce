import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState();

    return(
        <>
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)