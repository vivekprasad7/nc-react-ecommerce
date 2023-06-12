import React, { useState } from "react";
import "./login.css";
import { useAuthContext } from "../../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    loginInput,
    setLoginInput,
    loginHandler,
    signupInput,
    setSignupInput,
  } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const testInput = {
    email: "howardroark@gmail.com",
    password: "howardroark",
  };

  function handleUserLogin() {
    if (loginInput.email === "" || loginInput.password === "") {
      alert("Input fields cannot empty");
    } else {
      loginHandler(loginInput);
      navigate("/products");
    }
  }

  function handleTestLogin() {
    setLoginInput(testInput);
    loginHandler(testInput);
    navigate("/products");
    setSignupInput({
      ...signupInput,
      firstName: "Howard",
      lastName: "Roark",
      email: testInput.email,
    });
  }

  const handlePasswordToggle = () => setShowPassword(!showPassword);

  return (
    <>
      <div className="form">
        <h2>Login</h2>
        <div className="form-input">
          <label for="email">Email: </label>
          <input
            id="email"
            placeholder="johnsnow@random.com"
            value={loginInput.email}
            onChange={(e) =>
              setLoginInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="form-input">
          <label for="password">Password</label>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            value={loginInput.password}
            onChange={(e) =>
              setLoginInput((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {showPassword ? (
            <i onClick={handlePasswordToggle} class="fa fa-eye"></i>
          ) : (
            <i onClick={handlePasswordToggle} class="fa fa-eye-slash"></i>
          )}
        </div>

        <button className="green-btn green-bg" onClick={handleUserLogin}>
          Login
        </button>
        <button className="green-btn" onClick={handleTestLogin}>
          Login As Guest
        </button>

        <p>
          <Link to="/signup" className="login-link">
            {" "}
            Don't have an Account? Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};
