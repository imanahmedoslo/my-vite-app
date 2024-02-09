import "./App.css";
import HomePage from "./Compnents/homePage";
import { Routes, Route } from 'react-router-dom';
import AboutMe from "./Compnents/AboutMe";
import ErrorPage from "./Compnents/Error";
import Contacts from "./Compnents/Contacts";
//import AboutPage from './components/AboutPage';
//import NotFoundPage from './components/NotFoundPage';

export default function App(){
  return(<>
   <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
  </> )
 
}