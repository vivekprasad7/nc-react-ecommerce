import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"
import { Sidebar } from '../../components/sidebar/sidebar';
import { useFilterContext } from '../../contexts/filterContext';
import { getFilteredProducts } from '../../utils/getFilteredProducts';

export const ProductListing = () => {
  const {productData, productLoading} = useProductsContext();
  const {filterState  } = useFilterContext;

  // const newData = getFilteredProducts(productData, filterState);

  // console.log(newData);

  // console.log("hELO",productData);

  // const filteredProducts = getFilteredProducts(productData, filterState)

  // const filterByInput =() =>{
    
  //   let filteredData = productData;

  //   if(filterState?.priceRange){
  //     filteredData = filteredData.filter((item) => item.price > +filterState?.priceRange)
  //   }

  //   return filteredData;

  // }

// if (productLoading) {return<><p>Loading...</p></>} else
  return (
    <>
    <div>ProductListing</div>
    <h2>Products Listing</h2>
    <div className='product-listing-page'>
    <Sidebar/>
    <div className='products-container'>
      {
        productData.map((item) => {

          return(
          <ProductCard item={item} key={item._id}/>
          )
        })
      }
    </div>

    </div>
    
    </>
  )
}
