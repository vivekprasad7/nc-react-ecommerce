import React from 'react'
import "./checkoutCard.css"
import { useCartContext } from '../../contexts/cartContext';
import { useAddressContext } from '../../contexts/addressContext';

export const CheckoutCard = () => {
  const {cart, removeFromCart, totalPrice, totalDiscount, totalDelivery} = useCartContext();
  const {checkout} = useAddressContext();


    const totalAmount = totalPrice - (totalDiscount + totalDelivery);
  return (
    <>
    <div>
    <div className='cart-total-area'>
        <h2>Order Details</h2>
        <hr></hr>
        <div className='d_flex'>
        <p>
          <strong>Item</strong>
          </p>
          <p>
            <strong>Quantity</strong>
          </p>
        </div>
        
        <div>
        {cart.map((item) => {
              return (
                <>
                  <div key={item._id} className="d_flex">
                    <p className="title-cart">{item.title}</p>
                    <p>{item.qty}</p>
                  </div>
                </>
              );
            })}
        </div>
          
        
        <hr />
        <div className="d_flex">
          <h4>Order Details</h4>
          <p>5{}</p>
        </div>
        <hr />


        <div className='total-price'>
            <p>Total Price:</p>
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
        <p><b>{totalAmount < 0 ? 0 : totalAmount}</b></p>
        </div>
        <hr></hr>
        <div className='deliver-to'>
        {Object.values(checkout)[0].length > 0 ? (
          <div className="delivery-address">
            <p>
              <b>Deliver to: </b>{checkout.name}
            </p>
            <div className="final-address">
              <p><b>Address:</b> {checkout.street}, {checkout.city}, {checkout.state}</p>
              <p>{checkout.pincode}</p>
            </div>
          </div>
        ) : <p>No Address Found</p>}

        </div>
        <div className='cart-checkout-btn'>
            <button>Checkout</button>
            <p className='total-savings'>You will save {totalDiscount} on this order</p>
        </div>

    </div>
    </div>

    </>
  )
}