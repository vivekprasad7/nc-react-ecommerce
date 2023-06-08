import React from 'react'
import "./featured.css"
import { cake1, cake4, image1, pastry1, pastry2 } from '../../assets'
import { useNavigate } from 'react-router-dom'

export const Featured = () => {
  const navigate = useNavigate();
  return (
    <>
   <h2 className='cat-heading'>OUR BESTSELLERS</h2>

    <section className='featured-section'>
        <div className='featured-one'>
          <div className='featured-card'>
          <img className='feat-img' src={pastry2} onClick={() => navigate(`/products/3b6d561b-990d-4441-ba35-daeee839eead`)} />
          
          <h4>Blueberry Cheesecake</h4>
          </div>
        </div>
        <div className='featured-two'>
          <div className='featured-card'>
          <img  className='feat-img' src={pastry1} onClick={() => navigate(`/products/e5dad40e-0be4-46db-af2c-d2a31a5166d1`)} />
          <h4> Strawberry Cheesecake</h4>

          </div>
        </div>
        <div className='featured-three'>
          <div className='featured-card'>
          <img className='feat-img' src={cake4} onClick={() => navigate(`/products/b2ddef51-d28f-4e9c-8d30-e3c119d7272f`)} />
          
          <h4>Chocolate Truffle Cake</h4>

          </div>
        </div>
        <div className='featured-four'>
          <div className='featured-card'>
          <img className='feat-img' src={cake1} onClick={() => navigate(`/products/ad9bb515-3d1c-483f-8446-40d10cce759d`)} />
          
          <h4>Mango Tropical Cake</h4>

          </div>
        </div>


    </section>

    
    </>
  )
}
