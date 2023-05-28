import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"
import { Sidebar } from '../../components/sidebar/sidebar';
import { useFilterContext } from '../../contexts/filterContext';
// import { getFilteredProducts } from '../../utils/getFilteredProducts';

export const ProductListing = () => {
  const {productData, productLoading} = useProductsContext();
  const {filterState  , getFilteredProducts, newData} = useFilterContext();

  // console.log("pp",getFilteredProducts)

  // const newData = getFilteredProducts(productData, filterState);

  // const filteredProducts = getFilteredProducts(productData, filterState)

  

if (productLoading) {return<><p>Loading...</p></>} else
  return (
    <>
    <div>ProductListing</div>
    <h2>Products Listing</h2>
    <div className='product-listing-page'>
    <Sidebar/>
    <div className='products-container'>
      {
        newData?.map((item) => {

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
