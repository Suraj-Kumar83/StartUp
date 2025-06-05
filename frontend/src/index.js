import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import Navbar from './Landing_Page/home/Navbar';
import HomePage from './Landing_Page/home/HomePage';
import SignUp from './Landing_Page/signup/signUp';
import Login from './Landing_Page/login/Login';
import Features from './Landing_Page/features/Features';
import About from './Landing_Page/about/About';
import Contact from './Landing_Page/contact/Contact';
import Pricing from './Landing_Page/pricing/Pricing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/features" element={<Features />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function

