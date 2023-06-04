import React from 'react'
import { useAuthContext } from '../../../contexts/authContext'
import "./details.css"

export const Details = () => {

  const {authState : {user}, logoutHandler} = useAuthContext();

  console.log("details",user);


  return (
    <div className='details-container'>
      <div className='user-details'>
          <p>Name: {user.firstName + " " + user.lastName}</p>
          <p></p>
          <p>Email : {user.email}</p>
      </div>
      <button onClick={logoutHandler}>Logout</button>

    </div>
  )
}
