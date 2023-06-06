import React from 'react'
import {Link} from "react-router-dom";
import "./home.css"
import { Categories } from '../../components/categories/categories';
import { muffin1 } from '../../assets';

export const Home = () => {
  return (
    <>
    <main className='home-container'>
      <section className='banner-text'>
      <div className='home-cta'>
        <h2>Indulge Without Regret</h2>
        <button className='home-btn'>Explore Now</button>
      </div>
      </section>
      <section className='banner-img'>
        <img src={muffin1} />
      </section>
      
    </main>

    <div className='category-container'>
      <h2 className='cat-heading'>Categories</h2>

      <div className='home-categories'>

      <div className='cat-unit'>
      <div className='cat-display'> Category 1</div>
      <h4>Cakes</h4>
      </div>

      <div className='cat-display'> Category 1</div>
      <div className='cat-display'> Category 1</div>
      <div className='cat-display'> Category 1</div>
      </div>

    </div>
    <Categories/>

    <div className='footer'>
      <section className='footer-left foot'>
        <h3>Cake Factory</h3>
        <p>Explore the Heaven on Earth</p>
        <p>C 2023 All rights reserved</p>
      </section>
      <section className='footer-mid foot'>
        <h3>Links</h3>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>Home</Link></li>
          <li><Link>Home</Link></li>
          <li><Link>Home</Link></li>
        </ul>
      </section>
      <section className='footer-right foot'>
        <h3>Socials</h3>
        <ul>
          <li>Twitter</li>
          <li>Github</li>
        </ul>
      </section>
    </div>

    <div className='footer-bar'>
      <p>Made with Love by Vivek</p>
    </div>


    </>
  )
}
