import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [login, setLogin]= useState(false)
  return (
    <div>
      <Navbar login={login} setLogin={setLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setLogin={setLogin}/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
