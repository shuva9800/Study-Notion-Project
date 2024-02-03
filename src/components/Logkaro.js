import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast";



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

   
    function submitHandler(event){
        event.preventDefault();
        toast.success("Loge In successful")
        setLogin(true);
        console.log("i am inside submit form");
        navigate("/dashboard");
    }


  return (
   <form onSubmit={submitHandler} 
   className='flex flex-col w-full gap-y-4 mt-6'>
     <label className='w-full '>
        <p className='text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem]  '>
            Email Address
            <sup className='text-pink-200'>*</sup>
        </p>
        <input
             required
            type='email'
            name='email'
            placeholder='Enter Your Email'
            onChange={changeHandler}
            value={formData.email}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500'
        />
     </label>

     <label className='w-full ralative h-auto'>
        <p className='text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem] '>
           Password
            <sup className='text-pink-200'>*</sup>
        </p>
        <input
            required
            type={passdata?("text"):('password')}
            name='password'
            placeholder='Enter Password'
            onChange={changeHandler}
            value={formData.password}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500' 
        />
        <span onClick={()=> (setPassdata(!passdata))}
        className='absolute left-[37vw] w-full cursor-pointer m-[0.7rem] '>
            {passdata?(< FaEyeSlash fontSize={24} fill='#AFB2BF' />):
            (<FaEye fontSize={24} fill='#AFB2BF' />)}
        </span>
        <Link to="/signup">
            <p className='text-xs mt-1 text-blue-100 w-full flex justify-end '>Forgot Password</p>
        </Link>

     </label>
     <button className='w-full text-richblack-500 bg-yellow-50 rounded-[8px] px-[12px] py-[6px] mt-6' >Sign In</button>
   </form>
  )
}
