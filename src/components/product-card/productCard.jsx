import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./productCard.css";
import { Navigate } from 'react-router-dom';
import { useDataContext } from '../../contexts/dataContext';

export const ProductCard = ({item}) => {
  const navigate = useNavigate()

  const {dataDispatch} = useDataContext();

    const {_id, title, image, isBestseller, isInStock, price, originalPrice, ratings } = item
    return (
    <>
    <div className='product-card'>
        <img src={image} onClick={() => navigate(`/products/${_id}`)} />
        <span className='card-best'>Best Seller</span>
        <span onClick={() => dataDispatch({type:"ADD_TO_WISHLIST", payload:item})}className='card-heart ' role="button" disabled={true}><i className="fa fa-heart wishlist-circle" aria-hidden="true"></i> </span>
        <div className='card-info'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-price'>{price} <span className='strike'>{originalPrice}</span> </p>
        <span className='card-rate'>
        <span className='card-ratings'>{ratings.rate} <i class="fa fa-star"></i></span> ({ratings.count})
        </span>
         
        </div>
        <button className='card-btn' onClick={() => dataDispatch({type:"ADD_TO_CART", payload:item})}>Add to Cart</button>
    </div>

    </>
  )
}
