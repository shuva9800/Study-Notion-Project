import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignupForm({ setLogin }) {
  const navigate = useNavigate();
  const [formdata, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [accounttype, setAccounttype]=useState("student")
  function inputChange(event) {
    setformData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  const [passdata, setPassdata] = useState(false);
  const [confrompassdata, setConfrompassdata] = useState(false);

  function signupHandler(event) {
    event.preventDefault();
    if (formdata.password !== formdata.confirmpassword) {
      toast.error("password doesnot match");
    } else {
      setLogin(true);
      toast.success("Account Created Successfully");

      console.log(formdata);
      navigate("/dashboard");
    }
  }
  
  return (
    <div>
      <div className="flex rounded-full bg-richblack-800 p-1 gap-x-1 my-6 max-w-max">
        <button 
        className={`${accounttype ==="student"?
        " bg-richblack-900 text-richblack-5":
        " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccounttype("student")}>
        Student
        </button>
        <button 
            className={`${accounttype ==="instractor"?
        " bg-richblack-900 text-richblack-5":
        " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccounttype("instractor")}>
        Instractor
        </button>
      </div>
      <form onSubmit={signupHandler}>
        {/* first name & last name */}
        <div className=" flex w-full gap-x-4 mt-[10px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem] ">
              First Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="first_name"
              value={formdata.first_name}
              onChange={inputChange}
              placeholder="First Name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem] ">
              Last Name
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="last_name"
              value={formdata.last_name}
              onChange={inputChange}
              placeholder="Last Name"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500"
            />
          </label>
        </div>

        {/* email field */}
       <div className="mt-[10px]">
       <label className="w-full">
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={formdata.email}
            onChange={inputChange}
            placeholder="Enter Your Email"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500"
          />
        </label>
       </div>

        {/* password field */}
        <div className="flex w-full gap-x-4 relative mt-[10px]">
          <label className=" w-full h-auto">
            <p className="text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem] ">
              Create Password
              <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={passdata ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              onChange={inputChange}
              value={formdata.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500"
            />
            <span
              onClick={() => setPassdata(!passdata)}
              className="absolute left-[13vw] top-[3vw] cursor-pointer"
            >
              {passdata ? (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          {/* confrom password */}
          <label className="w-full  h-auto">
            <p className="text-[0.875rem] text-richblack-100 mb-1 loading-[1.375rem] ">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={confrompassdata ? "text" : "password"}
              name="confirmpassword"
              placeholder="Confirm Password"
              onChange={inputChange}
              value={formdata.confirmpassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  outline hover:outline-offset-2 outline-cyan-500"
            />
            <span
              onClick={() => setConfrompassdata(!confrompassdata)}
              className="absolute  right-[2vw] top-[3vw] cursor-pointer"
            >
              {confrompassdata ? (
                <FaEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <FaEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="w-full text-richblack-500 bg-yellow-50 rounded-[8px] px-[12px] py-[6px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
}
