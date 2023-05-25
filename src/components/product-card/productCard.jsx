import React from 'react'
import "./productCard.css";

export const ProductCard = ({item}) => {
    const {_id, title, image, isBestseller, isInStock, price, originalPrice, ratings } = item
    return (
    <>
    <div className='product-card'>
        <img src={image} />
        <h4>{title}</h4>
        <p>{price} {originalPrice}</p>
        <span>{ratings.rate}</span>
        <button>Add to Cart</button>
    </div>

    </>
  )
}
