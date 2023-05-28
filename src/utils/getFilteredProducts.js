// const filterBySearchInput = (products, filterState) => 
// filterState.searchInput.length > 0  ?
// products.filter((item) => item.title.toLowerCase().includes(filterState.searchInput.toLowerCase())) :
// products;

// const filterByPriceRange = (products, filterState) => 
// filterState.priceRange.length > 0 ?
// products.filter((item) => item.price < +filterState.priceRange) : 
// products;


// const filterByCategories = (products, filterState) => 
// filterState.categories.length > 0 ?
// products.filter(({category}) => filterState.categories.some((filter) => filter === category)) : 
// products;

// const filterByRating = (products, filterState) => 
// filterState.sortByRating.length > 0 ?
// products.filter((item) => item.ratings.rate > + filterState.sortByRating) :
// products;

// const sortByPrice = (products, filterState) => 
// filterState.sort.length > 0 ?
// [...products].sort((a,b) => filterState.sort === "LTH" ? a.price - b.price : b.price - a.price ) :
// products;

// export const getFilteredProducts = (products, filterState) => {
//     const filterFunctions = [
//         filterBySearchInput,
//         filterByPriceRange,
//         filterByCategories,
//         filterByRating,
//         sortByPrice,
//     ]

//     return filterFunctions.reduce((acc, currFunc) => currFunc(acc, filterState),  products)
// }


export const getFilteredProducts = (products, filterState) => {
    
    let filteredProducts = products;

    if (filterState.searchInput.length > 0)  {
        filteredProducts = products.filter((item) => item.title.toLowerCase().includes(filterState.searchInput.toLowerCase())) 
    }

    if (filterState.priceRange.length > 0){
        filteredProducts = products.filter((item) => item.price < +filterState.priceRange);
    }

    if( filterState.categories.length > 0) {
        filteredProducts = products.filter(({category}) => filterState.categories.some((filter) => filter === category));
    }

    if(filterState.sortByRating.length > 0) {
        products.filter((item) => item.ratings.rate > + filterState.sortByRating) 
    }

    if (filterState.sort.length > 0 ) {
        filteredProducts = [...products].sort((a,b) => filterState.sort === "LTH" ? a.price - b.price : b.price - a.price )
    }

    return filteredProducts;


}
