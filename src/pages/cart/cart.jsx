import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <h2>Cart</h2>
      <div className='cart-items'>
        <h3>Your cart is empty!</h3>
        <p>Looks like your cart is sad. Make it happy by adding some delicacies.</p>
        <button onClick={() => navigate('/products')}>Add Items</button>
      </div>

    </div>
  )
}
