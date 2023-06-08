import React from 'react'
import "./mobileMenu.css"
import { useAuthContext } from '../../contexts/authContext'
import { useNavigate } from 'react-router-dom';

export const MobileMenu = () => {
    const {showMobileSearch, setShowMobileSearch, showMobileFilter, setShowMobileFilter} = useAuthContext();
    const navigate = useNavigate()
  return (
    <div className='mobile-menu'>
        <div className='inner-mobile-menu'>
            
        <div  onClick={() => navigate('/')} className='mobile-icon'>
        <i class="fa fa-home"></i>
        <h4>Home</h4>
        </div>

        <div  onClick={() => navigate('/products')}className='mobile-icon'>
        <i class="fa fa-paper-plane"></i>
        <h4>Products</h4>
        </div>

        <div onClick={() => setShowMobileSearch(!showMobileSearch)} className='mobile-icon'>
        <i class="fa fa-search"></i>
        <h4>Search</h4>
        </div>

        <div onClick={() => setShowMobileFilter(!showMobileFilter)} className='mobile-icon'>
        <i class="fa fa-filter"></i>
        <h4>Filters</h4>


        </div>
        </div>
       
       
    </div>
  )
}
