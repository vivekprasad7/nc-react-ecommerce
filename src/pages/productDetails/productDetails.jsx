import React, { useEffect, useState } from 'react'
import { getProductById } from '../../services/productDetailsService'
import { useNavigate, useParams } from 'react-router-dom';

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

  const {_id, title,description, image, isBestseller, isInStock, price, originalPrice, ratings } = singleProduct

  return (
    <>
    <p className='breadcrumb'>
      <p>Home</p>
      <i class="fa-solid fa-angle-right fa-xs"></i>
      <p> Browse Products</p>
      <i class="fa-solid fa-angle-right fa-xs"></i>
      <span>Product Details</span>
    </p>
    <div className='product-detail'>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <div className='details'>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>



      
    </div>
    </>

  )
}
