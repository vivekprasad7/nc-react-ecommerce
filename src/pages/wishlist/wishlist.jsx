import React from 'react'
import { useDataContext } from '../../contexts/dataContext'
import { ProductCard } from '../../components/product-card/productCard'

export const Wishlist = () => {
  const {dataState:{wishlist}} = useDataContext()
  return (
    <div>
      <div>
        {
          wishlist.map((item) => {

            return(
              <ProductCard item={item} key={item._id}/>
            )
          })
        }
      </div>
    </div>
  )
}
