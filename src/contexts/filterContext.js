import { createContext, useContext, useReducer } from "react";
import { filterReducer, initialFilterData } from "../reducers/filterReducer";
import { useProductsContext } from "./productsContext";


export const FilterContext = createContext();



export const FilterContextProvider = ({children}) =>{

    const {productData} = useProductsContext();

   

    // const initialFilterData = {
    //     searchInput:"",
    //     priceRange:"",
    //     categories:[],
    //     sortByRating:"",
    //     sortByPrice:"",  
    // }

    const [ filterState, filterDispatch] = useReducer(filterReducer, initialFilterData);



    const getFilteredProducts = () => {
        let filteredProducts = productData;

    
        if (filterState?.searchInput?.length > 0)  {
            filteredProducts = filteredProducts.filter((item) => item.title.toLowerCase().includes(filterState.searchInput.toLowerCase())) 
        }
    
        if (filterState?.priceRange?.length > 0){
            filteredProducts = filteredProducts.filter((item) => item.price < +filterState.priceRange);
        }
    
        if( filterState?.categories?.length > 0) {
            filteredProducts = filteredProducts.filter(({categoryName}) => filterState.categories.some((filter) => filter === categoryName));
        }
    
        if(filterState?.sortByRating?.length > 0) {
            filteredProducts = filteredProducts.filter((item) => item.ratings.rate > +filterState.sortByRating) 
        }
    
        if (filterState?.sortByPrice?.length > 0 ) {
            filteredProducts = [...filteredProducts].sort((a,b) => filterState.sortByPrice === "LTH" ? a.price - b.price : b.price - a.price )
        }
    
        return filteredProducts;
    
    
    }

    console.log("filterContext",getFilteredProducts());

    const newData = getFilteredProducts();

    console.log("haha", newData);
    



    return(
        <FilterContext.Provider value={{filterState , filterDispatch, newData}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext);