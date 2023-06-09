import React from 'react'
import "./noProductsFound.css"
import { useFilterContext } from '../../contexts/filterContext'
import noitemsfound from "../../assets/animations/noitemsfound.json"
import Lottie from "lottie-react"

export const NoProductsFound = () => {
    const {filterDispatch} = useFilterContext();

    const handleClearAll = () => {
        filterDispatch({ type: "CLEAR_ALL_FILTERS" });
      };
  return (
        <div className='no-products-found'>
            <div className='no-products-animation'>
          <Lottie animationData={noitemsfound} />
            </div>
        <p>Whoops, No products match your preference. Try something else!</p>
        <button className='impact-btn' onClick={handleClearAll}>See Other Products</button>
      </div>
  )
}
