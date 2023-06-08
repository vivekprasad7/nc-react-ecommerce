import React from 'react'
import "./cartTotal.css"
import { useCartContext } from '../../contexts/cartContext'
import { useNavigate } from 'react-router-dom'

export const CartTotal = () => {
    const {totalPrice, totalDiscount, totalDelivery} = useCartContext()
    const navigate = useNavigate();

    const totalAmount = +totalPrice - (+totalDiscount + +totalDelivery);
  return (
    <div className='cart-total-area'>
        <h2>Price Details</h2>
        <hr></hr>
        <div className='total-price'>
            <p>Price</p>
            <p>{totalPrice}</p>
        </div>
        <div className='total-discount'>
            <p>Discount</p>
            <p>{totalDiscount}</p>
        </div>
        <div className='delivery'>
            <p>Delivery Charges</p>
            <p>{totalDelivery}</p>
        </div>
        <hr></hr>
        <div className='cart-total-price'>
        <p><b>Total Amount</b></p>
        <p><b>₹ {totalAmount < 0 ? 0 : totalAmount}</b></p>
        </div>
        <hr></hr>
        <div className='cart-checkout-btn'>
            <button className='impact-btn' onClick={() => navigate("/checkout")}>Checkout</button>
            <p className='total-savings'>You will save {totalDiscount} on this order</p>
        </div>

    </div>
  )
}
