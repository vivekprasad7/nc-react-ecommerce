import { createContext, useContext, useReducer } from "react";
import { useProductsContext } from "./productsContext";
import { dataReducer } from "../reducers/dataReducer";
import axios from "axios";
import { useAuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const { productData } = useProductsContext();
  const {
    authState: { token },
  } = useAuthContext();
  const navigate = useNavigate();

  const initialData = {
    products: productData,
    cart: [],
    wishlist: [],
  };

  const [dataState, dataDispatch] = useReducer(dataReducer, initialData);

  const getCartData = async () => {
    if (token) {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/user/cart",
          headers: { authorization: token },
        });
        if (res.status === 200) {
          dataDispatch({ type: "GET_CART_DATA", payload: res?.data?.cart });
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      navigate("/login");
    }
  };


  

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, getCartData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
