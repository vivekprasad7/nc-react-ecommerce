import React, { useEffect, useState } from 'react'
import { getProductById } from '../../services/productDetailsService'
import { useNavigate, useParams } from 'react-router-dom';
import "./productDetails.css"
import { useCartContext } from '../../contexts/cartContext';
import { useWishlistContext } from '../../contexts/wishlistContext';

export const ProductDetails = () => {

  const [singleProduct, setSingleProduct] = useState({});
  const { addToCartHandler } = useCartContext();
  const { addToWishlistHandler } = useWishlistContext();
  const { productID } = useParams();

  const getSingleProduct = async () => {
    try {
      const res = await getProductById(productID)
      setSingleProduct(res?.product)

    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const { title, desc, image, price, originalPrice, ratings} = singleProduct

  return (
    <>
      <div className='detail-container'>
        {/* <p className='breadcrumb'>
      <p>Home</p>
      <i class="fa fa-angle-right fa-xs"></i>
      <p> Browse Products</p>
      <i class="fa fa-angle-right fa-xs"></i>
      <span>Product Details</span>
    </p> */}
        <div className='single-product-container'>


          <div className='img-container'>
            <img src={image} alt={title} />
          </div>

          <div className='details'>
            <h2>{title}</h2>
            <p className='desc'> {desc}</p>

            <p className='product-details-ratings'> {ratings?.rate} <i class="fa fa-star"></i> ({ratings?.count} Ratings)</p>

            <p className='card-price'><span className='rupee-price'>₹ <i class="fa fa-indian-rupee-sign"></i>{price}</span> <span className='rupee-strike'>{originalPrice}</span></p>
            {/* <p>Inclusive of all Taxes</p> */}

            <div className='buttons'>
              <button className='impact-btn' onClick={() => addToCartHandler(singleProduct)}>Add to Cart</button>
              <button className='impact-btn' onClick={() => addToWishlistHandler(singleProduct)}>Add to Wishlist</button>
            </div>

            {/* <ul>
          <li>Eggless/Vegetarian</li>
          <li>Weight : {weight} kg</li>
        </ul> */}

          </div>





        </div>
      </div>
    </>

  )
}
