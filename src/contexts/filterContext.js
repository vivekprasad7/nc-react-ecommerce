import { createContext, useContext, useReducer } from "react";
import { filterReducer, initialFilterData } from "../reducers/filterReducer";
import { useProductsContext } from "./productsContext";


export const FilterContext = createContext();


export const FilterContextProvider = ({children}) =>{

    const {productsData} = useProductsContext();

   

    // const initialFilterData = {
    //     searchInput:"",
    //     priceRange:"",
    //     categories:[],
    //     sortByRating:"",
    //     sortByPrice:"",  
    // }

    const [ filterState, filterDispatch] = useReducer(filterReducer, initialFilterData);



    return(
        <FilterContext.Provider value={{filterState , filterDispatch}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext = () => useContext(FilterContext);