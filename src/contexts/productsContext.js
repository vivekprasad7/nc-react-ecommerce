import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [data, setData] = useState()

    const fetchData = async () => {
        try{
            const res = await axios({ method:"GET", url:"/api/products"});
            setData(res.data.products);
            console.log(res);
        } catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])




    return(
        <ProductsContext.Provider value={{data}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);