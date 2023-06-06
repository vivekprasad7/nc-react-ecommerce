import React from 'react'
import {Link, useNavigate} from "react-router-dom";
import "./home.css"
import { Categories } from '../../components/categories/categories';
import { banner} from '../../assets';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <main className='home-container'>
      <section className='banner-text'>
      <div className='home-cta'>
        <h2>Indulge Without Regret</h2>
        <button onClick={() => navigate("/products")}className='home-btn'>Explore Now</button>
      </div>
      </section>
      <section className='banner-img'>
        <img src={banner} />
      </section>
      
    </main>

    <div className='category-container'>
    <Categories/>
    </div>

    <div className='footer'>
      <section className='footer-left foot'>
      <div className="brand-footer">
            <h3><Link to="/"><span className="logo">cake</span>factory</Link></h3>
          </div>
        <p>Your Loved Ones Deserve Something Special!</p>
        <p>© 2023. All rights reserved.</p>
      </section>
      <section className='footer-mid foot'>
        <h3>Links</h3>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </section>
      <section className='footer-right foot'>
        <h3>Socials</h3>
        <ul>
          <li> <a href="https://github.com/vivekprasad7" target="_blank" rel="noreferrer">
                <i class="fa fa-github"></i> Github
              </a>
          </li>
          <li>
          <a href="https://twitter.com/nxvivek" target="_blank" rel="noreferrer">
                <i class="fa fa-twitter fa-lg"></i> Twitter
              </a>
          </li>
        </ul>
      </section>
    </div>

    <div className='footer-bar'>
      <p>Made with Love by Vivek</p>
    </div>


    </>
  )
}
