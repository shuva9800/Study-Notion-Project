import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Loginform({setLogin}) {
    const navigate=useNavigate();
    const [formData, setformData]=useState({
        email:"",
        password:""
    })

    const[passdata, setPassdata]=useState(false);
    function changeHandler(event) {
    setformData((prevdata)=>({
        ...prevdata,
        [event.target.name]:event.target.value
    }) )
    }

   
    function changepassValue(){
        if(passdata===false){
            setPassdata(true)
        }
        else{
            setPassdata(false)
        }
    }
    function submitHandler(event){
        event.preventDefault();
        toast.success("Loge In successful")
        setLogin(true);
        console.log("i am inside submit form");
        
        navigate("/dashboard");


    }
  return (
   <form onSubmit={submitHandler}>
     <label>
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
     </label>

     <label className='password-label'>
        <p>
           Password
            <sup>*</sup>
        </p>
        <input
            required
            type={passdata?("text"):('password')}
            name='password'
            placeholder='Enter Your Password'
            onChange={changeHandler}
            value={formData.password}
            className='password'
        />
        <span onClick={changepassValue}
        className='emoji'>
            {passdata?(< FaEyeSlash />):(<FaEye />)}
        </span>
        <Link to="*">
            <p>Forgot Password</p>
        </Link>

     </label>
     <button >Sign In</button>
   </form>
  )
}
