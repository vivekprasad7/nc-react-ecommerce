import { createContext, useContext, useReducer } from "react";
import { useProductsContext } from "./productsContext";
import { dataReducer } from "../reducers/dataReducer";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

const {productData} = useProductsContext();

    const initialData = {
        products: productData,
        cart:[],
        wishlist:[],
    }

    

    const [dataState, dataDispatch] = useReducer(dataReducer, initialData)


    return(
        <DataContext.Provider value={{dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext);