import React from 'react'
import { CheckoutCard } from '../../components/checkout-card/checkoutCard'
import "./checkout.css"
import { SelectAddress } from '../../components/select-address/selectAddress'

export const Checkout = () => {
    
  return (
    <>
    <div className='checkout-container'>

      <div className='checkout-address'>
         <SelectAddress/>
      </div>

      <div className='checkout-details'>
      <CheckoutCard/>
      </div>

    </div>
    </>
  )
}
