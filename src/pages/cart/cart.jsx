import React from 'react'
import { useNavigate } from 'react-router-dom'
import"./cart.css"
import { useDataContext } from '../../contexts/dataContext';
import { useAuthContext } from '../../contexts/authContext';

export const Cart = () => {
  const navigate = useNavigate();

  

  const {dataState:{cart}, dataDispatch} = useDataContext()
  const{userLogin, authState:{token}} = useAuthContext();

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

        const data = await res.json()

        console.log(data);
        // // get the encodedToken from data
        // const {encodedToken} = data

        //other way

        // const{encodedToken} = await res.json()

        // console.log(encodedToken)

        // localStorage.setItem("encodedToken", encodedToken);
        // console.log(localStorage.getItem("encodedToken", encodedToken))

        // console.log(await res.json())

    }catch(e){
        console.error(e)
    }
} 
  return (
    <div className='cart'>
      <h2>Cart</h2>

      <section className='cart-items'>
        {
          cart?.length === 0 &&<div className='empty-cart-items'>
        <h3>Your cart is empty!</h3>
        <p>Looks like your cart is sad. Make it happy by adding some delicacies.</p>
        <button onClick={() => navigate('/products')}>Add Items</button>
      </div>
        }

        {
          cart?.map((item) => {
            

            return(
              <div className="cart-product">
                <div className='img'>
                <button className='cart-heart'><i className='fa fa-heart'></i></button>

                  <img src={item.image} alt={item.title}  />

                  <div className='cart-details'>
                  <h4>{item.title}</h4>
                  <h4>${item.price}.00 * {item.qty} 
                  <span></span></h4>

                </div>

                 
                </div>
                
               

                <div className='cart-inc-dec'>

                    <button><i className='fa fa-plus'></i></button>
                    <div>0</div>
                    <button><i className='fa fa-minus'></i></button>
                    <button><i className='fa fa-trash'></i></button>


                </div>

              </div>
            )
          })
        }

      </section>

      <aside className='cart-total'>
        <h2>Cart Summary</h2>
        <div>
          <h3>Total Price:</h3>
          <h3>100$</h3>
        </div>
      </aside>



      

    </div>
  )
}
