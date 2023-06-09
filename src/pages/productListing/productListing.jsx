import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"
import { Sidebar } from '../../components/sidebar/sidebar';
import { useFilterContext } from '../../contexts/filterContext';
import { NoProductsFound } from '../../components/no-products-found/noProductsFound';

export const ProductListing = () => {
  const { productLoading} = useProductsContext();
  const { newData} = useFilterContext();


if (productLoading) {return<><p>Loading...</p></>} else
  return (
    <>
    <div className='product-listing-page'>
    <Sidebar/>
    <div className='products-container'>
      {
        newData.length > 0 ? (
          <>
            {
               newData?.map((item) => {

                return(
                <ProductCard item={item} key={item._id}/>
                )
              })
            }
          </>
        ) : (
          <NoProductsFound/>
        )
      }


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
