import React, { useState } from 'react'
// import "./login.css"
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../../contexts/authContext'

export const Signup = () => {

    const {signupInput, setSignupInput, authState, signupHandler} = useAuthContext()
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword)
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleUserSignup = () =>{
        if(    signupInput.name.length === 0 
            || signupInput.email.length === 0 
            || signupInput.password.length === 0
            || signupInput.confirmPassword.length === 0)
     {
        alert("THik daal bey")
    } else if( signupInput.password !== signupInput.confirmPassword){
        alert("Passwords Don't Match")
    } else {
        signupHandler(signupInput)
        alert("Log in ho gaya bey")
    }
    }
 
  return (
    <>
        <div className='form'>
            <h2>Sign Up</h2>
            <div className='form-input'>
                <label for='name'>Name: </label>
                <input id='name' placeholder='John Snow'
                    value={signupInput.name}
                    onChange={(e)=> setSignupInput((prev)=> ({...prev, name: e.target.value}))}

                    // onChange={(e) => setSignupInput((prev) => ({...prev, name: e.target.value}))}
                
                />
            </div>

            <div className='form-input'>
                <label for='email'>Email: </label>
                <input id='email' placeholder='johnsnow@random.com'
                value={signupInput.email}
                onChange={(e)=> setSignupInput((prev)=> ({...prev, email: e.target.value}))}
                />
            </div>

            <div className='form-input'>
                <label for='password'>Password</label> 
                <input id='password' type={showPassword ? "text" :"password"} placeholder='********' 
                value={signupInput.password}
                onChange={(e)=> setSignupInput((prev)=> ({...prev, password: e.target.value}))}
                />
                <button className="password-toggle" onClick={handleShowPassword}>{showPassword ? (<i class="fa fa-eye"></i>) :(<i class="fa fa-eye-slash"></i>)}</button>
            </div>

            <div className='form-input'>
                <label for='password'> Confirm Password</label> 
                <input id='password' type={showConfirmPassword ? "text" :"password"} placeholder='********' 
                value={signupInput.confirmPassword}
                onChange={(e)=> setSignupInput((prev)=> ({...prev, confirmPassword: e.target.value}))}
                />
                <button className="password-toggle" onClick={handleShowConfirmPassword}>{showPassword ? (<i class="fa fa-eye"></i>) :(<i class="fa fa-eye-slash"></i>)}</button>

            </div>

            <button  onClick={handleUserSignup} className='green-btn green-bg'>Create New Account</button>

            <p>Already have an account? <Link to="/login">Log In</Link></p>

        </div>
    
    </>
  )
}
