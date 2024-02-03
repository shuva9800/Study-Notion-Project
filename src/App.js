import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [login, setLogin]= useState(false)
  return (
    <div className="flex  w-screen h-[100%]   bg-richblack-900 flex-col items-center">
      <Navbar login={login} setLogin={setLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setLogin={setLogin}/>}/>
        <Route path="/signup" element={<Singup setLogin={setLogin}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute login={login}>
            <Dashboard/>
          </PrivateRoute>
        }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
