import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Navbar from "../components/Header";
import Login from "./Login";
import SignUp from "./SignUp";
import NotFound from "./NotFound";


const routes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default routes