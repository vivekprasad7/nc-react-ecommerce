import { createContext, useContext, useState } from "react";
import { getCartService, addToCartService, removeCartService, updateCartQtyService } from "../services/dataFetchServices";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { isItemInCart } from "../utils/isItemInCart";

const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    const {authState:{token}} = useAuthContext();
    const navigate = useNavigate();

    const [ cart, setCart] = useState([]);
    const [cartLoading, setCartLoading] = useState(false);


    const getCartData = async () => {
        setCartLoading(true)
        try{
            const {status, data} = await getCartService(token)

            if(status === 200){
                setCart(data?.cart)
            }
        } catch(e){
            console.error(e);
        } finally {
            setCartLoading(false);
        }
    }

    const addToCart = async (item) => {
        try{
            const {status, data} = await addToCartService(item, token)

            if(status === 201){
                setCart(data?.cart)
                console.log("add_to_cart", data)

            }
        } catch(e){
            console.error(e)
            console.log("error_add_to_cart", e)

        }
    }

    const removeFromCart = async(productID, token) => {
        try{
           const {status, data} = await removeCartService(productID, token)

           if( status === 200){
            setCart(data?.cart)
            console.log("remove_from_cart", cart)
           }
        } catch(e){
            console.error(e)
            console.error("error_remove_from_cart", e)
        }
    }

    const updateCartQty = async (productID, updateType, token) => {
        try{
            const {status, data} = await updateCartQtyService(productID, updateType, token)

            if(status === 200){
                setCart(data?.cart)
            }
        } catch(e){
            console.error(e)
        }
    }

    const addToCartHandler = (item) => {
        if(token){
            isItemInCart(item._id, cart) ? removeFromCart(item._id) : addToCart(item)
        } else{
            navigate("/login")
        }
    }



    return(<CartContext.Provider value={{cart, addToCartHandler}}>{children}</CartContext.Provider>)
}

export const useCartContext = () => useContext(CartContext);