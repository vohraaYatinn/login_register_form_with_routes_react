import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className="container__login">
    <div className="container_login_form">
        <div className="login_head all-flex ">
        <h2>React Chat</h2>
        <p>Login</p>
        </div>
        <div className="inputs_login all-flex">
            <input type="text" name="" id="" placeholder='email'/>
            <input type="password" name="" id="" placeholder='password'/>
        </div>
        <div className="submit_login all-flex">
            <button>Sign in</button>
        </div>
        <div className="login_foot">
            <p>You don't have an account? <span><Link to="/register">Register</Link></span></p>
        </div>
    </div>
    </div>
  )
}

export default Login