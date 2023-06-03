import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContext";
import { getWishlistService, addToWishlistService, removeWishlistService } from "../services/dataFetchServices";
import { useNavigate } from "react-router-dom";
// import { useDataContext } from "./dataContext";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({children}) => {

    const navigate = useNavigate();

    const {authState:{token}} = useAuthContext();
    // const {dataState, dataDispatch} = useDataContext();

    // const addToWishlistHandler = (item) =>{
    //     addWishlistItem(dataDispatch, item, token );
    // }

    const [ wishlist, setWishList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const addToWishlist = (item , token, setWishList) => {
    //     if(token){
    //         addWishlistItem(item, token, setWishList)
    //     } else{
    //         alert("Login karo ji!")
    //     }
    // }

    const getWishlistData = async () => {
        setIsLoading(true);
        try{
            const {status, data} = await getWishlistService(token)
            if(status === 200){
                setWishList(data?.wishlist);
            }
        } catch(e){
            console.error(e)
        } finally{
            setIsLoading(false);
        }
    }


    const addToWishlist = async (product) => {
        try{
            const {status, data} = await addToWishlistService(product, token)


            if(status === 201){
                setWishList(data?.wishlist)
                console.log("add_to_wishlist", data)

            }
        } catch(e){
            console.error(e);
            console.log("add_to_wishlist_error", e)

        }

    }


    const removeFromWishlist = async (productID) =>{
        try{
            const {status, data} = await removeWishlistService(productID, token)

            if(status === 200){
                setWishList(data?.wishlist)
            }
        } catch(e){
            console.error(e)
        }

    }

    const isItemInWishlist = (productID) => {
        return wishlist.find((item) => item._id === productID)
    }

    const addToWishlistHandler = (item) =>{
        if(token){
         if( isItemInWishlist(item._id, wishlist) ) { removeFromWishlist(item._id)}  else {addToWishlist( item)}
    
        } else {
          navigate("/login")
        }
    
      }



    useEffect(()=> {
        if(token){
            getWishlistData();
        }
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])







    return(<WishlistContext.Provider value={{wishlist, isLoading, addToWishlist, removeFromWishlist, isItemInWishlist, addToWishlistHandler}}>{children}</WishlistContext.Provider>)
}

export const useWishlistContext = () => useContext(WishlistContext);
