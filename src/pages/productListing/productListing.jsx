import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"

export const ProductListing = () => {
  const {data} = useProductsContext();
  console.log(data);
  return (
    <>
    <div>ProductListing</div>
    <h2>Products Listing</h2>
    <div>

    </div>
    <div className='products-container'>
      {
        data?.map((item) => {

          return(
          <ProductCard item={item} key={item._id}/>
          )
        })
      }
    </div>
    </>
  )
}
