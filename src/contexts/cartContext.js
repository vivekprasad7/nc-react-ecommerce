import { createContext, useContext, useState, useEffect } from "react";
import { getCartService, addToCartService, removeCartService, updateCartQtyService } from "../services/dataFetchServices";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { isItemInCart } from "../utils/isItemInCart";
import { toast } from "react-hot-toast";

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
                console.log(cart);
            }
        } catch(e){
            console.error(e)
        }
    }

    const removeCartHandler = (item) => {
        if(token){
            removeFromCart(item._id, token)
        }
    }

    const addToCartHandler = (item) => {
        if(token){
            isItemInCart(item._id, cart) ? navigate("/cart") : addToCart(item)
            toast.success("Added to Cart")
        } else{
            navigate("/login")
        }
    }

    const updateCartHandler = (item, updateType) => {
        if (updateType === "inc") {
            updateCartQty(item._id, "increment", token);
        } else if (updateType === "dec" && item.qty > 1) {
            updateCartQty(item._id, "decrement", token);
        } else {
            removeFromCart(item._id, token);
            toast.success("Removed From Cart");
        }
    
        toast.success("Updated Quantity in Cart");
    };

    const {totalPrice, totalDiscount, totalDelivery} = cart?.reduce((acc,curr) =>{
        acc.totalPrice = (+curr.price * curr.qty) + +acc.totalPrice;
        acc.totalDiscount = (+curr.originalPrice - +curr.price) + acc.totalDiscount;
        return acc;
    }, {totalPrice : 0, totalDiscount : 0, totalDelivery: 150})


    useEffect(() => {
        if(token){
            getCartData(token);
        }
 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])



    return(<CartContext.Provider value={{cart, setCart, addToCartHandler, updateCartHandler, totalPrice, totalDiscount, totalDelivery, removeCartHandler, cartLoading}}>{children}</CartContext.Provider>)
}

export const useCartContext = () => useContext(CartContext);