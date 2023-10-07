import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
export default function Login() {
  const { login }=useContext(AuthContext)
  const handleLogin = ()=>{
    login()
    
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
         <h1>Social Book</h1>
         <p>
          Loweihrfu sjdhfui iqhjfoi  uioahfo cjalahfq8 aeoifhoiff kisdhfiosdnjiqehf v oluihfuoejboujewhfhsdj vlewbhfuowehfklxc vjklewhguowenlisdoisdng
         </p>
         <span>Dont have an account?</span>
        <Link to='/register'>
        <button>Register</button>
          </Link> 
         
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
              <input type='text' placeholder='Username' />
              <input type='password' placeholder='Password'/>
              <Link to='/'>
              <button onClick={handleLogin}>Login</button>
              </Link>
            </form>
        </div>
      </div>
    </div>
  )
}
