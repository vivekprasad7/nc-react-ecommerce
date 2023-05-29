import React from 'react'
import "./login.css"

export const Login = () => {
  return (
    <>
        <div className='form'>
            <h2>Login</h2>
            <div className='form-input'>
                <label for='email'>Email: </label>
                <input id='email' placeholder='johnsnow@random.com'/>
            </div>

            <div className='form-input'>
                <label for='password'>Password</label> 
                <input id='password' type='password' placeholder='********' />
            </div>

            <button className='green-btn green-bg'>Login</button>
            <button className='green-btn'>Login As Guest</button>

            <p>Sign Up to Create an Account?</p>

        </div>
    
    </>
  )
}
