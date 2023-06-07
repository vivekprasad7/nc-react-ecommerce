import React from 'react'
// import { useDataContext } from '../../contexts/dataContext'
import { ProductCard } from '../../components/product-card/productCard'
import "./wishlist.css"
import { useWishlistContext } from '../../contexts/wishlistContext'

export const Wishlist = () => {
  const {wishlist, isLoading} = useWishlistContext();

  if (isLoading) {return(<p>Loading...</p>)} else
  return (
    <div>
      {wishlist.length === 0 ? <div className='empty-wishlist'>"Your Wishlist is Empty." </div>: ""}
      <div className='wishlist-container'>
        {
          wishlist?.map((item) => {

            return(
              <ProductCard item={item} key={item._id}/>
            )
          })
        }
      </div>
    </div>
  )
}
