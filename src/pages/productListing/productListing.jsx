import React from 'react'
import { useProductsContext } from '../../contexts/productsContext'
import { ProductCard } from '../../components/product-card/productCard';
import "./productListing.css"
import { Sidebar } from '../../components/sidebar/sidebar';
import { useFilterContext } from '../../contexts/filterContext';
import { NoProductsFound } from '../../components/no-products-found/noProductsFound';
import { Loading } from '../../components/loader/loading';

export const ProductListing = () => {
  const {isLoading} = useProductsContext();
  const { newData} = useFilterContext();


if (isLoading) {return(<Loading/>)} else
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
    </div>

    </div>
    
    </>
  )
}
