import NavBar from "./NavBar"
import Devider from "./Devider"
import AwLogo from "../assets/awLogo.png"
import "../App.css"
export default function Contacts(){
    const handleAWClick=()=>{
        window.open('https://www.academicwork.no/kontakt/bedrifter', '_blank', 'noopener,noreferrer');
      }
    const handleLinkedInd=()=>{
        window.open('https://linkedin.com/in/iman-d-ahmed-23b393250', '_blank', 'noopener,noreferrer');
      }
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth:"100vw",
      }}>
        <div className="ContactContainer">
       <div className="nav" style={{gridArea:"logo"}}><img onClick={handleAWClick} className="logo" style={{height:"3rem", width:"auto", justifySelf:"start", margin:"30px" }} src={AwLogo}/> <NavBar className="hidden" gridArea=""/></div> 
        <div className="font kontakt" style={{height:"fit-content",alignContent:"start", justifySelf:"start", alignSelf:"start", gridArea:"kontakt",textAlign:"start"}}><h2 className="font" style={{margin:"0"}}>KONTAKTINFO<svg width={'auto'} className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
  fill="#049B79"></path>
  </svg></h2></div>
  <NavBar className="hamburger" gridArea="hamburger"/>
        <Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider" height={"auto"} width={"90vw"}/>
        
        <div className="tom" style={{gridArea:"tom"}}></div>
        <div className="fontSmall heigtt" style={{gridArea:"main", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}><p><b style={{color:"#049B79"}}>TLF: </b>gis ved kontakt på email<br></br> <b style={{color:"#049B79"}}>Academic Work Email: </b>info@academicwork.no<br></br><b style={{color:"#049B79"}}>Academic work Telefon: </b> +47 23 00 90 70 <br></br><b style={{color:"#049B79"}}>Personlig Email: </b> imanahmedimanahmed@gmail.com</p></div>
            <div className="tom2" style={{gridArea:"tom2"}}></div>
          <Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider2" height={"auto"} width={"90vw"}/>
            <div className=" email" style={{gridArea:"email", borderBottom:"white 2px solid ", width:"auto", alignSelf:"baseline"}}>Email:  <a className="emailShown" href="mailto:imanahmedimanahmed@gmail.com">imanahmedimanahmed@gmail.com</a></div>
            <div className=" tjueFire" style={{gridArea:"tjueFire", alignSelf:"center", justifySelf:"center",}}>  February  The  8<span style={{ fontSize: 'smaller', verticalAlign: 'top' }}>th. </span>  2024</div>
            <div onClick={handleLinkedInd} className=" links" style={{gridArea:"links",alignSelf:"center",justifySelf:"center",}}>LinkdIn</div>   
      </div>
      </div>)
}