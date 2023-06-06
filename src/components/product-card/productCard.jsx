import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./productCard.css";
import { useDataContext } from '../../contexts/dataContext';
import { useAuthContext } from '../../contexts/authContext';
import { useWishlistContext } from '../../contexts/wishlistContext';
import { addWishlistItem } from '../../services/dataFetchServices';
import { isItemInWishlist } from '../../utils/isItemInWishlist';
import { useCartContext } from '../../contexts/cartContext';
import { isItemInCart } from '../../utils/isItemInCart';

export const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const {authState:{token}} = useAuthContext();

  const {wishlist,  addToWishlistHandler} = useWishlistContext();
  const{cart, addToCartHandler} = useCartContext();

  const {dataDispatch} = useDataContext();

  

  // const addToWishlistHandler = (item) =>{
  //   if(token){
  //     isItemInWishlist(item._id, wishlist) ? setWishlist(wishlist) : addToWishlist( item)

  //   } else {
  //     navigate("/login")
  //   }

  // }


    const {_id, title, image, isBestseller, isInStock, price, originalPrice, ratings } = item
    return (
    <>
    <div className='product-card'>
        <img src={image} onClick={() => navigate(`/products/${_id}`)} />
        <span className={isBestseller ? 'card-best' : 'best-none'}>Best Seller</span>
        <span onClick={ () => addToWishlistHandler(item)}className={isItemInWishlist(_id, wishlist) ? 'card-hearted' : 'card-heart'}role="button" disabled={true }><i className="fa fa-heart wishlist-circle" aria-hidden="true"></i> </span>
        <div className='card-info'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-price'>{price} <span className='strike'>{originalPrice}</span> </p>
        <span className='card-rate'>
        <span className='card-ratings'>{ratings.rate} <i class="fa fa-star"></i></span> ({ratings.count})
        </span>
         
        </div>
        <button className={!isItemInCart(_id,cart) ?'card-btn' : 'added-card-btn'} onClick={() => addToCartHandler(item) }>{isItemInCart(_id, cart) ? <Link to="/cart">Go to Cart</Link> : "Add to Cart"}</button>
    </div>

    </>
  )
}
