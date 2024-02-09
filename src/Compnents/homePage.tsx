import AwLogo from "../assets/AwLogo.png";
import Devider from "./Devider"
import NavBar from "./NavBar"
import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate= useNavigate();
    const handleclick=(path:string)=>{
        navigate(`${path}`)
     }
  const handleProjectNavigate=()=>{
        window.open('https://github.com/imanahmedoslo', '_blank', 'noopener,noreferrer');
  }
  const handleLinkedInd=()=>{
    window.open('https://linkedin.com/in/iman-d-ahmed-23b393250', '_blank', 'noopener,noreferrer');
  }
  const handleAWClick=()=>{
    window.open('https://www.academicwork.no/kontakt/bedrifter', '_blank', 'noopener,noreferrer');
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      minWidth:"100vw" // Take up at least the full viewport height
    }}>
      <div className="gridContainer">
      <div className="nav" style={{gridArea:"logo"}}><img onClick={handleAWClick} className="logo" style={{height:"3rem", width:"auto", justifySelf:"start", margin:"30px" }} src={AwLogo}/> <NavBar className="hidden" gridArea=""/></div> 
      <div onClick={()=>handleclick("/about")} className="font kontakt" style={{height:"fit-content",alignContent:"start", justifySelf:"start", alignSelf:"start", gridArea:"kontakt",textAlign:"start"}}><h2 className="font" style={{margin:"0"}}>LITT OM MEG<svg  width={'auto'} className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h2></div>
       <NavBar className="hamburger" gridArea="hamburger"/>
      
      <Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider" height={"auto"} width={"90vw"}/>
      
      <div style={{gridArea:"navn"}}><h1 className={`font`}>IMAN AHMED<svg width={'auto'} className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1></div>
      <div className="fontSmall" style={{gridArea:"main", display:"flex", flexDirection:"column", fontSize:"25px", alignItems:"center", justifyContent:"center"}}><p>Fullstack utvikler<br></br> 25 år gammel<br></br> For tiden ansatt som IT konsulent <br></br> Hos Academic Work</p></div>
          <div onClick={handleProjectNavigate}className="font" style={{gridArea:"prosjekter"}}><h1 className={`font`}>PROSJEKTER<svg width={'auto'} className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1> 
          </div>
          <div className="tom" style={{gridArea:"tom"}}></div>
          <div onClick={()=>handleclick("/Contacts")} style={{gridArea:"omMeg"}}><h1 className={`font`}>KONTAKTINFO<svg width={'auto'} className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1></div>
          <div className="tom2" style={{gridArea:"tom2"}}></div>
        <Devider className="SecondDeviderMobile" justifySelf="end" gridArea="Devider2" height={"auto"} width={"60vw"}/>
          <div  className="fontSmall email" style={{fontSize:"25px",gridArea:"email", borderBottom:"white 2px solid ", width:"auto", alignSelf:"baseline"}}>Email: <a className="emailShown" href="mailto:imanahmedimanahmed@gmail.com">imanahmedimanahmed@gmail.com</a></div>
          <div className="fontSmall tjueFire" style={{fontSize:"25px",gridArea:"tjueFire", alignSelf:"center", justifySelf:"center",}}>  February  The  8<span style={{ fontSize: 'smaller', verticalAlign: 'top' }}>th. </span>  2024</div>
          <div onClick={handleLinkedInd} className="fontSmall links" style={{fontSize:"25px",gridArea:"links",alignSelf:"center",justifySelf:"center",}}> LinkdIn</div>   
    </div>
    </div>
    
  )
}

export default HomePage
