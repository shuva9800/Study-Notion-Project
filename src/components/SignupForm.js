import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import {toast} from "react-hot-toast"


export default function SignupForm() {
    const [formdata, setformData] = useState({
        first_name: "",
        last_name: "",
        email:"",
        password: "",
        confirmpassword: "",
    })
    function inputChange(event){
        setformData((prevData)=>({...prevData,
        [event.target.name]: event.target.value
        }))

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
    <div>
        <div>
            <button>Student</button>
            <button>Instractor</button>
        </div>
        <form>
        {/* first name & last name */}
           <div>
           <label>
                <p>First Name<sup>*</sup></p>
                <input
                    required
                    type='text'
                    name='first_name'
                    value={formdata.first_name}
                    onChange={inputChange}
                    placeholder='First Name'
                />
            </label>
            <label>
                <p>Last Name<sup>*</sup></p>
                <input
                    required
                    type='text'
                    name='Last_name'
                    value={formdata.last_name}
                    onChange={inputChange}
                    placeholder='Last Name'
                />
            </label>
           </div>

           {/* email field */}
           <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type='email'
                    name='email'
                    value={formdata.email}
                    onChange={inputChange}
                    placeholder='Enter Your Email'
                />
             </label>

         {/* password field */}
        <div>
         <lebel>
            <p>
            Create Password
                <sup>*</sup>
            </p>
            <input
                required
                type= {passdata ? ("text") : ("password")}
                name='password'
                placeholder='Enter Your Password'
                onChange={inputChange}
                value={formdata.password}
            />
            <span onClick={() => setPassdata((prev) => !prev)}>
                {passdata?(<FaEye />):(<FaEyeSlash />)}
            </span>

        </lebel>
        {/* confrom password */}
        <lebel>
            <p>
            Confirm Password <sup>*</sup>
            </p>
            <input
                required
                type={passdata?("text"):("password")}
                name='confirmpassword'
                placeholder='Confirm Your Password'
                onChange={inputChange}
                value={formdata.confirmpassword}
            />
            <span onClick={() => setPassdata((prev) => !prev)}>
                {passdata?(<FaEye />):(<FaEyeSlash />)}
            </span>
        

        </lebel>
        </div>
        <button>Create Account</button>
        </form>
    </div>
  )
}
