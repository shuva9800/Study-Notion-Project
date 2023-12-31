import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom'


export default function Loginform() {
    const [formData, setformData]=useState({
        email:"",
        password:""
    })

    function changeHandler(event) {
    setformData((prevdata)=>({
        ...prevdata,
        [event.target.name]:event.target.value
    }) )
    }

    const[passdata, setPassdata]=useState("false")
    function changepassValue(){
        if(passdata==false){
            setPassdata(true)
        }
        else{
            setPassdata(false)
        }
    }
  return (
   <form>
     <lebel>
        <p>
            Email Address
            <sup>*</sup>
        </p>
        <input
             required
            type='email'
            name='email'
            placeholder='Enter Your Email'
            onChange={changeHandler}
            value={formData.email}
        />
     </lebel>

     <lebel>
        <p>
           Password
            <sup>*</sup>
        </p>
        <input
            required
            type='text'
            name='password'
            placeholder='Enter Your Password'
            onChange={changeHandler}
            value={formData.password}
        />
        <span onClick={() => setPassdata((prev) => !prev)}>
            {passdata?(<FaEye />):(<FaEyeSlash />)}
        </span>
        <Link to="*">
            <p>Forgot Password</p>
        </Link>

     </lebel>
     <button>Sign In</button>
   </form>
  )
}
