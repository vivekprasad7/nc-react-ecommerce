import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "./productsContext";
import { dataReducer } from "../reducers/dataReducer";
import axios from "axios";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { getWishlistData, addWishlistItem, removeWishlistItem } from "../services/dataFetchServices";


export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { productData } = useProductsContext();
  const {
    authState: { token },
  } = useAuthContext();
  const navigate = useNavigate();

  const initialData = {
    // products: productData,
    cartData: [],
    wishlistData: [],
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialData);


//   useEffect(()=>{
//     if(token){
//         const wishlistRes = 
//     }
//   }, [token])

 




  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
