import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const getProducts = async () => {
        try{
            const res = await axios({ method:"GET", url:"/api/products"});
            setProductData(res.data.products);
            console.log(res);
        } catch(e){
            console.error(e)
        }
    }
    const getCategories = async () => {
        try{
            const res = await axios({ method:"GET", url:"/api/categories"});
            setCategoryData(res.data.categories);
            console.log(res);
        } catch(e){
            console.error(e)
        }
    }

    useEffect(()=>{
        getProducts();
        getCategories();
    },[])




    return(
        <ProductsContext.Provider value={{productData, categoryData}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);