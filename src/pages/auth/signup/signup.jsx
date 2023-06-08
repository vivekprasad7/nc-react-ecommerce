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

        const { firstName, lastName, email, password, confirmPassword } = signupInput;

    if( firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === ""){
        alert("Input fields cannot be empty.")
    } else if( password !== confirmPassword){
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
                <label for='name'>First Name: </label>
                <input id='firstname' placeholder='John'
                    value={signupInput.firstName}
                    onChange={(e)=> setSignupInput((prev)=> ({...prev, firstName: e.target.value}))}

                    // onChange={(e) => setSignupInput((prev) => ({...prev, name: e.target.value}))}
                
                />
            </div>
            <div className='form-input'>
                <label for='name'> Last Name: </label>
                <input id='lastname' placeholder='Snow'
                    value={signupInput.lastName}
                    onChange={(e)=> setSignupInput((prev)=> ({...prev, lastName: e.target.value}))}

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
               
                {showPassword ? (<i onClick={handleShowPassword} class="fa fa-eye"></i>) :(<i  onClick={handleShowPassword} class="fa fa-eye-slash"></i>)}
            </div>

            <div className='form-input'>
                <label for='password'> Confirm Password</label> 
                <input id='password' type={showConfirmPassword ? "text" :"password"} placeholder='********' 
                value={signupInput.confirmPassword}
                onChange={(e)=> setSignupInput((prev)=> ({...prev, confirmPassword: e.target.value}))}
                />
               
                {showPassword ? (<i onClick={handleShowConfirmPassword} class="fa fa-eye"></i>) :(<i  onClick={handleShowConfirmPassword} class="fa fa-eye-slash"></i>)}

            </div>

            <button  onClick={handleUserSignup} className='green-btn green-bg'>Create New Account</button>

            <p><Link to="/login" className='login-link'> Already have an account? Log In</Link></p>

        </div>
    
    </>
  )
}
