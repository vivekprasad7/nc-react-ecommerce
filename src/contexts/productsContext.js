import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getProducts = async () => {
        setIsLoading(true)
        try{
            const res = await axios({ method:"GET", url:"/api/products"});
            setProductData(res.data.products);
            setIsLoading(false)
        } catch(e){
            console.error(e)
            setIsLoading(false)
        }
    }
    const getCategories = async () => {
        setIsLoading(true)
        try{
            const res = await axios({ method:"GET", url:"/api/categories"});
            setCategoryData(res.data.categories);
            setIsLoading(false)
        } catch(e){
            console.error(e)
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        getProducts();
        getCategories();
    },[])




    return(
        <ProductsContext.Provider value={{productData, categoryData, isLoading}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);