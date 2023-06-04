import { createContext, useContext } from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({children}) => {

    return(<AddressContext.Provider>{children}</AddressContext.Provider>)
}

export const useAddressContext = () => useContext(AddressContext);