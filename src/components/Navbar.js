import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

export default function Navbar({login, setLogin }) {
  return (
    <div className="flex justify-between  w-10/12 max-w-[1160px] py-4 mx-auto h-[4rem]">
      <Link to="/">
        <img src={Logo} alt="logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="text-richblack-100 flex   gap-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-start gap-x-4 ">
        {!login && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 
            px-[12px] rounded-[8px] border-richblack-700 h-7 flex " >
            Log in
            </button>
          </Link>
        )}

        {!login && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 
            px-[12px] rounded-[8px] border-richblack-700 h-7 flex" >
            Sign up
            </button>
          </Link>
        )}

        {login && (
          <Link to="/">
            <button onClick={()=>{setLogin(false);
              toast.error("Logged Out")
            }} className="bg-richblack-800 text-richblack-100 
            px-[12px] rounded-[8px] border-richblack-700 h-7 flex">
            Log Out
            </button>
          </Link>
        )}

        {login && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 
            px-[12px] rounded-[8px] border-richblack-700 h-7 flex">
            Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
