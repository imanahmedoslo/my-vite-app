import "./App.css";
import HomePage from "./Components/homePage";
import { Routes, Route } from 'react-router-dom';
import AboutMe from "./Components/AboutMe";
import ErrorPage from "./Components/Error";
import Contacts from "./Components/Contacts";
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