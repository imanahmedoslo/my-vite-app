import React, { useState } from 'react';
import SideBar from './SideBar';
import "../App.css"
import { Navigate, useNavigate } from 'react-router-dom';
type navBarProps={
    gridArea:string,
    className:string,
}

export default function NavBar({gridArea, className}:navBarProps){
    const navigate= useNavigate();
    const handleProjectNavigate=()=>{
        window.open('https://github.com/imanahmedoslo', '_blank', 'noopener,noreferrer');
  }
  const handleLinkedInd=()=>{
    window.open('https://linkedin.com/in/iman-d-ahmed-23b393250', '_blank', 'noopener,noreferrer');
  }
    const handleclick=(path:string)=>{
       navigate(`${path}`)
    }
   const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen(!isOpen);

  return (
    <div className={className } style={{ gridArea: gridArea, justifySelf: "end", margin: "30px",position: "relative"  }} onClick={toggleHamburger}>
      {isOpen ? (
        <>
        <div className={`navBarDropdown ${isOpen?'open':''}`} style={{  border:"#182549 2px solid",position: 'absolute', top: '30%', right: 0, backgroundColor: '#049B79', padding: '10px', borderRadius: '20px', display: 'flex', flexDirection: 'column', color:'#182549',zIndex: 1000 }}>
                        <p onClick={()=>handleclick("/Contacts")} className="fontSmall" style={{ fontSize: "30px", color:'#182549' }}>KontaktInfo<b style={{ color: '#049B79' }}>.</b></p>
                        <p onClick={()=>handleclick("/")} className="fontSmall" style={{ fontSize: "30px",color:'#182549' }}>Dashboard<b style={{ color: '#049B79' }}>.</b></p>
                        <p onClick={()=>handleclick("/about")} className="fontSmall" style={{ fontSize: "30px",color:'#182549' }}>Omg meg<b style={{ color: '#049B79' }}>.</b></p>
                        <p onClick={handleProjectNavigate}className="fontSmall" style={{ fontSize: "30px",color:'#182549' }}>Prosjekter<b style={{ color: '#049B79' }}>.</b></p>
                        <p onClick={handleLinkedInd}className="fontSmall" style={{ fontSize: "30px",color:'#182549' }}>LinkedIn<b style={{ color: '#049B79' }}>.</b></p>
                    </div>
 
            <svg className={'svg'}width="30" height="61" viewBox="0 0 30 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1490_325)">
            <path d="M5.07849 34.5V35" stroke="#EEEEF2" strokeWidth="2"></path>
            <path d="M21 30H9" stroke="#EEEEF2" strokeWidth="2"></path>
            <path d="M25.0784 25V25.5" stroke="#EEEEF2" strokeWidth="2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.07843 35L9 32.4482L9 27.6127L5.07843 25L1.07843 27.6127L1 32.4482L5.07843 35Z" stroke="#EEEEF2" strokeWidth="2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.0784 35L29 32.4482V27.6127L25.0784 25L21.0784 27.6127L21 32.4482L25.0784 35Z" stroke="#EEEEF2" strokeWidth="2"></path>
          </g>
        </svg>
        </>
      ) : (
        // Closed state SVG
        <svg className='svg' width="auto" height="4rem" viewBox="0 0 30 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1490_325)">
            <path d="M5.07849 11V60" stroke="#EEEEF2" strokeWidth="2"></path>
            <path d="M15.0785 16V45" stroke="#EEEEF2" strokeWidth="2"></path>
            <path d="M25.0784 1V50" stroke="#EEEEF2" strokeWidth="2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M5.07843 11L9 8.4482L9 3.61273L5.07843 1L1.07843 3.61273L1 8.4482L5.07843 11Z" stroke="#EEEEF2" strokeWidth="2"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.0784 60L29 57.4482V52.6127L25.0784 50L21.0784 52.6127L21 57.4482L25.0784 60Z" stroke="#EEEEF2" strokeWidth="2"></path>
          </g>
        </svg>
      )}
    </div>
  );
      }
