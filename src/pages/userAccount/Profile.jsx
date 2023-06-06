import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./profile.css"

export const Profile = () => {

    const activeToggle = ({isActive}) => isActive ? 'curr-nav-item active-nav' : 'curr-nav-item inactive-nav'


  return (
    <div>
        <main className='user-account-container container'>
            <h2 className='user-account-head'>My Account</h2>
            <div className='user-profile-box'>
                <div className='profile-tabs'>
                    <NavLink to="/profile/" className={activeToggle}>Profile</NavLink>
                    <NavLink to="/profile/addresses" className={activeToggle}>Addresses</NavLink>
                    <NavLink to="/profile/orders" className={activeToggle}>Orders</NavLink>
                </div>
                <div className='user-account-data'>
                    <Outlet/>
                </div>

            </div>

        </main>
    </div>
  )
}
