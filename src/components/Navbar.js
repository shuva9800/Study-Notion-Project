import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({ login, setLogin }) {
  return (
    <div>
      <Link to="/">
        <img src={Logo}></img>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div>
        {!login && (
          <Link to="/login">
            <button>Login</button>
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
