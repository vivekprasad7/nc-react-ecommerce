import React from 'react'
import { useAuthContext } from '../../../contexts/authContext'
import "./details.css"

export const Details = () => {

  const {authState : {user}, logoutHandler} = useAuthContext();

  console.log("details",user);


  return (
    <div className='details-container'>
       
      <div className='user-details'>
          <p>Hi, <b>{user.firstName + " " + user.lastName}</b> </p>
          <p></p>
          <p> <b>Email :</b> {user.email}</p>
      </div>
      <button onClick={logoutHandler}>Logout</button>

    </div>
  )
}
