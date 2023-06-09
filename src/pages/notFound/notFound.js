import React from 'react'
import pageNotFound from "../../assets/animations/pageNotFound.json"
import Lottie from "lottie-react"
import { useNavigate } from 'react-router-dom'


export const NotFound = () => {
    const navigate = useNavigate()
  return (
        <div className='no-products-found'>
            <div className='no-products-animation'>
          <Lottie animationData={pageNotFound} />
            </div>
        <p>Whoops, No products match your preference. Try something else!</p>
        <button className='impact-btn' onClick={() => navigate('/')}>See Other Products</button>
      </div>
  )
}
