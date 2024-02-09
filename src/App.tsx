import "./App.css";
import HomePage from "./Compnents/homePage";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from "./Compnents/AboutMe";
import ErrorPage from "./Compnents/Error";
//import AboutPage from './components/AboutPage';
//import NotFoundPage from './components/NotFoundPage';

export default function App(){
  return(<>
   <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
  </> )
 
}