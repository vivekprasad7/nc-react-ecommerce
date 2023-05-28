
export const initialFilterData = {
    searchInput:"",
    priceRange:"2000",
    categories:[],
    sortByRating:"",
    sortByPrice:"",  
}

export const filterReducer = (state, action) => {

    switch(action.type){
        case"FILTER_BY_SEARCH":{
            return {...state, searchInput: action.payload}
        }
        case"FILTER_BY_PRICE_RANGE":{
            return {...state, priceRange: action.payload};
        }
        case"ADD_CATEGORY_FILTER":{
            return{...state, categories:[...state.categories, action.payload]}
        }
        case"REMOVE_CATEGORY_FILTER":{
            return{...state, categories: state.categories.filter((item) => item!== action.payload)}
        }
        case"FILTER_BY_CATEGORY":{
            return state.categories.includes(action.payload) ?
            {...state, categories : state.categories.filter((item) => item!== action.payload)}
             :
            {...state, categories: [...state.categories, action.payload]}
        }
        case"FILTER_BY_RATING":{
            return {...state, sortByRating: action.payload}
 
        }
        case"SORT_BY_PRICE":{
            return {...state, sortByPrice: action.payload}
        }
        case"CLEAR_ALL_FILTERS":{
            return {
                searchInput:"",
                priceRange:"2000",
                categories:[],
                sortByRating:"",
                sortByPrice:"", 
            }
        }
        default:
        return state;
    }
}