import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const [ cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(false);


    return(<CartContext.Provider value={{}}>{children}</CartContext.Provider>)
}

export const useCartContext = () => useContext(CartContext);