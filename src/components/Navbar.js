import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({login, setLogin }) {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo}></img>
      </Link>

      <nav>
        <ul className="nav-desc">
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

      <div className="nav-button">
        {!login && (
          <Link to="/login">
            <button >Login</button>
          </Link>
        )}

        {!login && (
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        )}

        {login && (
          <Link to="/">
            <button onClick={()=>{setLogin(false);
              toast.success("Logged Out")
            }}>Log Out</button>
          </Link>
        )}

        {login && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}
