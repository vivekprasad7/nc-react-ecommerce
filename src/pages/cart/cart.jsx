import React from 'react'
import { useNavigate } from 'react-router-dom'
import"./cart.css"

export const Cart = () => {
  const navigate = useNavigate();

  const getData = async () => {
    try{
        const creds = {
            email : "adarshbalika@gmail.com",
            password:"adarshbalika"
        }
        const res = await fetch("/api/auth/login", {
            method:'POST',
            body: JSON.stringify(creds)
        })

        // const data = await res.json()

        // // get the encodedToken from data
        // const {encodedToken} = data

        //other way

        const{encodedToken} = await res.json()

        // console.log(encodedToken)

        localStorage.setItem("encodedToken", encodedToken);
        console.log(localStorage.getItem("encodedToken", encodedToken))

        // console.log(await res.json())

    }catch(e){
        console.error(e)
    }
} 
  return (
    <div className='cart'>
      <h2 onClick={getData}>Cart</h2>
      <div className='cart-items'>
        <h3>Your cart is empty!</h3>
        <p>Looks like your cart is sad. Make it happy by adding some delicacies.</p>
        <button onClick={() => navigate('/products')}>Add Items</button>
      </div>

    </div>
  )
}
