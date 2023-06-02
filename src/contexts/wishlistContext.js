import { createContext, useContext } from "react";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({children}) => {
    return(<WishlistContext.Provider value={{}}>{children}</WishlistContext.Provider>)
}

export const useWishlistContext = useContext(WishlistContext);
