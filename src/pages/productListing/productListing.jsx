import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"
import { Sidebar } from '../../components/sidebar/sidebar';

export const ProductListing = () => {
  const {productData} = useProductsContext();
  console.log(productData);
  return (
    <>
    <div>ProductListing</div>
    <h2>Products Listing</h2>
    <div className='product-listing-page'>
    <Sidebar/>
    <div className='products-container'>
      {
        productData?.map((item) => {

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
