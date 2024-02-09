import SideBar from "./SideBar"
import ImanPng from "./assets/iman.png"
import AwLogo from "../assets/AwLogo.png";
import Devider from "./Devider"
import NavBar from "./NavBar"


function HomePage() {
  

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      minWidth:"100vw" // Take up at least the full viewport height
    }}>
      <div className="gridContainer">
      <img className="logo" style={{height:"3rem", width:"auto", gridArea:"logo", justifySelf:"start", margin:"30px" }} src={AwLogo}/>
      <div className="font kontakt" style={{height:"fit-content",alignContent:"start", justifySelf:"start", alignSelf:"start", gridArea:"kontakt",textAlign:"start"}}><h2 className="font" style={{margin:"0"}}>LITT OM MEG<svg className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h2></div>
       <NavBar className="hamburger" gridArea="hamburger"/>
      
      <Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider" height={"auto"} width={"90vw"}/>
      
      <div style={{gridArea:"navn"}}><h1 className={`font`}>IMAN AHMED<svg className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1></div>
      <div className="fontSmall" style={{gridArea:"main", display:"flex", flexDirection:"column", fontSize:"25px", alignItems:"center", justifyContent:"center"}}><p>Fullstack utvikler<br></br> 25 år gammel<br></br> For tiden ansatt som IT konsulent <br></br> Hos Academic Work</p></div>
          <div className="font" style={{gridArea:"prosjekter"}}><h1 className={`font`}>PROSJEKTER<svg className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1> 
          </div>
          <div className="tom" style={{gridArea:"tom"}}></div>
          <div style={{gridArea:"omMeg"}}><h1 className={`font`}>KONTAKTINFO<svg className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
fill="#049B79"></path>
</svg></h1></div>
          <div className="tom2" style={{gridArea:"tom2"}}></div>
        <Devider className="SecondDeviderMobile" justifySelf="end" gridArea="Devider2" height={"auto"} width={"60vw"}/>
          <div className="fontSmall email" style={{gridArea:"email", borderBottom:"white 2px solid ", width:"auto", alignSelf:"baseline"}}>Email</div>
          <div className="fontSmall tjueFire" style={{gridArea:"tjueFire", alignSelf:"center", justifySelf:"center",}}>2024</div>
          <div className="fontSmall links" style={{gridArea:"links",alignSelf:"center",justifySelf:"center",}}> links</div>   
    </div>
    </div>
    
  )
}

export default HomePage
