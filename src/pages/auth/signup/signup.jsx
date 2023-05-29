import React from 'react'
// import "./login.css"
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <>
        <div className='form'>
            <h2>Sign Up</h2>
            <div className='form-input'>
                <label for='name'>Name: </label>
                <input id='name' placeholder='John Snow'/>
            </div>

            <div className='form-input'>
                <label for='email'>Email: </label>
                <input id='email' placeholder='johnsnow@random.com'/>
            </div>

            <div className='form-input'>
                <label for='password'>Password</label> 
                <input id='password' type='password' placeholder='********' />
            </div>

            <div className='form-input'>
                <label for='password'> Confirm Password</label> 
                <input id='password' type='password' placeholder='********' />
            </div>

            <button className='green-btn green-bg'>Create New Account</button>

            <p>Already have an account? <Link to="/login">Log In</Link></p>

        </div>
    
    </>
  )
}
