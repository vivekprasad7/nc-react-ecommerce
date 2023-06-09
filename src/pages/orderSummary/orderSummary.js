import React from 'react'
import "./orderSummary.css"
import orderplaced from "../../assets/animations/orderplaced.json"
import Lottie from "lottie-react"

export const OrderSummary = () => {
  return (
    <div className='order-summary'>
        <div className='order-summary-animation'>
          <Lottie animationData={orderplaced} />
            </div>
        <h2>Order Confirmed! Thanks for your order!</h2>
        <small>
          The order will be delivered in next 2 days.
        </small>

    </div>
  )
}
