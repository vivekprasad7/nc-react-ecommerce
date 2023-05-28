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

    if (filterState.sortByPrice.length > 0 ) {
        filteredProducts = [...products].sort((a,b) => filterState.sortByPrice === "LTH" ? a.price - b.price : b.price - a.price )
    }

    return filteredProducts;


}
