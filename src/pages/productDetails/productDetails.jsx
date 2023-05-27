import React, { useEffect, useState } from 'react'
import { getProductById } from '../../services/productDetailsService'
import { useNavigate, useParams } from 'react-router-dom';
import "./productDetails.css"

export const ProductDetails = () => {

  const [singleProduct, setSingleProduct] = useState({});
  const {productID} = useParams();
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try{
        const res = await getProductById(productID)
        setSingleProduct(res?.product)

    } catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  },[])

  const {_id, title,desc, image, isBestseller, isInStock, price, originalPrice, ratings, weight } = singleProduct

  return (
    <>
    <div className='detail-container'>
    <p className='breadcrumb'>
      <p>Home</p>
      <i class="fa fa-angle-right fa-xs"></i>
      <p> Browse Products</p>
      <i class="fa fa-angle-right fa-xs"></i>
      <span>Product Details</span>
    </p>
    <div className='container flex-container'>
    <div className='product-detail'>
      <div className='img-container'>
        <img src={image} alt={title} />


      </div>
      <div className='details'>
        <h2>{title}</h2>
        <p>Details: {desc}</p>

        <p><span className='card-ratings'>{ratings?.rate} <i class="fa fa-star"></i></span> ({ratings?.count})</p>
        <br/>
        <span className='card-price'>{price} <span className='strike'>{originalPrice}</span> </span>
        <p>Inclusive of all Taxes</p>
        
        <div className='buttons'>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
        </div>

        <ul>
          <li>Eggless/Vegetarian</li>
          <li>Weight : {weight} kg</li>
        </ul>

      </div>

    </div>
   



      
    </div>
    </div>
    </>

  )
}
