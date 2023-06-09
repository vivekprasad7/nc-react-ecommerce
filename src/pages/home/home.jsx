import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./home.css"
import { Categories } from '../../components/categories/categories';
import { banner} from '../../assets';
import { Featured } from '../../components/featured/featured';


export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <main className='home-container'>
      <section className='banner-text'>
      <div className='home-cta'>
        <h2 className='cta-main'>Indulge</h2>
        <h2 className='cta-rem'>Without Regret!!</h2>
        <button onClick={() => navigate("/products")}className='home-btn'>ORDER NOW</button>
      </div>
      </section>
      <section className='banner-img'>
        <img onClick={() => navigate("/products")} src={banner} alt='banner' />
      </section>
      
    </main>

    <div className='category-container'>
    <Categories/>
    </div>

    <Featured/>

    <div className='footer'>
      <section className='footer-left foot'>
      <div className="brand-footer">
            <h3><Link to="/"><span className="logo">cake</span>factory</Link></h3>
          </div>
        <p>Your Loved Ones Deserve Something Special!</p>
        <p>© 2023. All rights reserved.</p>
      </section>
      <section className='footer-mid foot'>
        <h3>LINKS</h3>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </section>
      <section className='footer-right foot'>
        <h3>SOCIALS</h3>
        <ul>
          <li>Github {" "}
            <a href="https://github.com/vivekprasad7" target="_blank" rel="noreferrer">
                <i class="fa fa-github"></i> 
              </a>
          </li>
          <li>Twitter {" "}
          <a href="https://twitter.com/nxvivek" target="_blank" rel="noreferrer">
                <i class="fa fa-twitter fa-lg"></i>
           </a>
          </li>
        </ul>
      </section>
    </div>

    <div className='footer-bar'>
      <p>Made with Love by Vivek</p>
    </div>

    <div className='mobile-menu'>
    <div>
      
    </div>
    </div>


    </>
  )
}
