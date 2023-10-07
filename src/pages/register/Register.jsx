import React from 'react'
import './register.scss' 
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
         <h1>Social Book</h1>
         <p>
          Loweihrfu sjdhfui iqhjfoi  uioahfo cjalahfq8 aeoifhoiff kisdhfiosdnjiqehf v oluihfuoejboujewhfhsdj vlewbhfuowehfklxc vjklewhguowenlisdoisdng
         </p>
         <span>Already have an account?</span>
         <Link to='/login'>
         <button>Login</button>
         </Link>
         
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
              <input type='text' placeholder='Username' />
              <input type='email' placeholder='Email' />
              <input type='text' placeholder='Date of Birth' />
              <input type='password' placeholder='Password'/>
              <Link to='/register'>
              <button>Register</button>
              </Link>
             
            </form>
        </div>
      </div>
    </div>
  )
}
