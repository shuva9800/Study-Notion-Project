import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export default function SignupForm({setLogin}) {
    const navigate=useNavigate();
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
    const[passdata, setPassdata]=useState(false)
    function changepassValue(){
        if(passdata===false){
            setPassdata(true)
        }
        else{
            setPassdata(false)
        }
    }
    function signupHandler(event){
        event.preventDefault();
        if(formdata.password!==formdata.confirmpassword)
        {
            toast.error("password doesnot match");
        }
        else
            {setLogin(true);
            toast.success("Account Created Successfully");

            console.log(formdata);
            navigate("/dashboard");}

    }
  return (
    <div>
            {/* <h1 style="background=black">i am inside signup form</h1> */}
        <div>
            <button>Student</button>
            <button>Instractor</button>
        </div>
        <form onSubmit={signupHandler}>
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
                    name='last_name'
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
         <label>
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
                className='password'
            />
            <span onClick={changepassValue} 
            className='emoji'>
                {passdata?(< FaEyeSlash/>):(< FaEye/>)}
            </span>

        </label>
        {/* confrom password */}
        <label>
            <p>
            Confirm Password <sup>*</sup>
            </p>
            <input
                required
                type= {passdata ? ("text") : ("password")}
                name='confirmpassword'
                placeholder='Confirm Password'
                onChange={inputChange}
                value={formdata.confirmpassword}
                className='password'
            />
            <span onClick={changepassValue}
            className='emoji'>
            {passdata?(< FaEyeSlash/>):(< FaEye/>)}
            </span>
        

        </label>
        </div>
        <button>Create Account</button>
        </form>
    </div>
  )
}
