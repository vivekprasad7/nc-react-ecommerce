import React from 'react'
import { Addresses } from '../userAccount/addresses/addresses'
import { CheckoutCard } from '../../components/checkout-card/checkoutCard'
import "./checkout.css"

export const Checkout = () => {
    
  return (
    <>
    <div className='checkout-container'>

      <div className='checkout-address'>
        <h2>Saved Addresses</h2>
         <Addresses/>
      </div>

      <div className='checkout-details'>
      <CheckoutCard/>
      </div>

    </div>
    </>
  )
}
