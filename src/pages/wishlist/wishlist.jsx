import React from 'react'
// import { useDataContext } from '../../contexts/dataContext'
import { ProductCard } from '../../components/product-card/productCard'
import "./wishlist.css"
import { useWishlistContext } from '../../contexts/wishlistContext'
import emptycart from "../../assets/animations/emptycart.json"
import Lottie from "lottie-react"

export const Wishlist = () => {
  const {wishlist, isLoading} = useWishlistContext();

  if (isLoading) {return(<p>Loading...</p>)} else
  return (
    <div>
      
      {wishlist.length === 0 ? 
      <div className='empty-wishlist'>
         <div className='empty-cart-animation'>
          <Lottie animationData={emptycart} />
            </div>
         <h3>"Your Wishlist is Empty!"</h3>
        </div>: ""}
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
