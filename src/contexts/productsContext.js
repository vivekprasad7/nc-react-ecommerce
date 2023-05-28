import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({children}) => {

    const [productData, setProductData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [productLoading, setProductLoading] = useState(false);


    const getProducts = async () => {
        try{
            setProductLoading(true)
            const res = await axios({ method:"GET", url:"/api/products"});
            setProductData(res.data.products);
            console.log(res);
            setProductLoading(false)
        } catch(e){
            console.error(e)
            setProductLoading(false)
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
        <ProductsContext.Provider value={{productData, categoryData, productLoading}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext);