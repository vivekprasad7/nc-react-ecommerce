import React from 'react'
import "./cartTotal.css"

export const CartTotal = () => {
  return (
    <div className='cart-total-area'>
        <h2>Price Details</h2>
        <hr></hr>
        <div className='total-price'>
            <p>Price</p>
            <p>$ 2345</p>
        </div>
        <div className='total-discount'>
            <p>Discount</p>
            <p>$235</p>
        </div>
        <div className='delivery'>
            <p>Delivery Charges</p>
            <p>$ 2345</p>
        </div>
        <hr></hr>
        <div className='cart-total-price'>
        <p><b>Total Amount</b></p>
        <p><b>$3245</b></p>
        </div>
        <hr></hr>
        <div className='cart-checkout-btn'>
            <button>Checkout</button>
            <p className='total-savings'>You will save 150 on this order</p>
        </div>

    </div>
  )
}
