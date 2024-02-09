import "../App.css"
import Devider from "./Devider"
import AwLogo from "../assets/awLogo.png"
import picture from "../assets/iman.png"
import NavBar from "./NavBar"

export default function AboutMe(){
    return (<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        minWidth:"100vw",
      }}>
        <div className="AboutContainer">
       <div className="nav" style={{gridArea:"logo"}}><img className="logo" style={{height:"3rem", width:"auto", justifySelf:"start", margin:"30px" }} src={AwLogo}/> <NavBar className="" gridArea="hamburger"/></div> 
        <div className="font kontakt" style={{height:"fit-content",alignContent:"start", justifySelf:"start", alignSelf:"start", gridArea:"kontakt",textAlign:"start"}}><h2 className="font" style={{margin:"0"}}>LITT OM MEG<svg className="svgg" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M10 8.12543L5 11L-2.25534e-07 8.12543L2.3356e-07 2.87401L5 2.18537e-07L10 2.87401L10 8.12543Z" 
  fill="#049B79"></path>
  </svg></h2></div>
         <NavBar className="hamburger" gridArea="hamburger"/>
        
        <Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider" height={"auto"} width={"90vw"}/>
        <img className="picture" style={{gridArea:"picture"}} src={picture}/>
        <div style={{gridArea:"omMeg"}}>
        <p>Velkommen til min portefølje! Mitt navn er Iman Dahir Ahmed, og jeg er en 25 år gammel IT-konsulent
           som arbeider hos Academic Work i Oslo. Interessant nok, min lidenskap for programmering ble oppdaget under
            en uventet vending i min utdanningsreise. Mens jeg var engasjert i lærerutdanningen, fikk jeg muligheten til å
             undervise barn i programmering som en del av skolepensum. Som praksislærer måtte jeg raskt sette meg inn i dette
              feltet for å kunne undervise barna effektivt. Det var under disse øyeblikkene, at min kjærlighet for programmering blomstret.</p>
<p>Gjennom årene har min forståelse og ferdigheter utviklet seg til et bredt
 spekter av programmeringsspråk, inkludert JavaScript, C#, TypeScript, og React. I tillegg har jeg blitt dyktig
  i bruk av moderne teknologiverktøy som MUI og Azure.</p>  
        </div>
<Devider className="FirstDeviderMobile" justifySelf="center" gridArea="Devider2" height={"auto"} width={"90vw"}/>
<div style={{gridArea:"email"}} className="emailLinksContainer">
  <div className="fontSmall email" style={{  borderBottom:"white 2px solid", width:"auto", alignSelf:"baseline" }}>Email</div>
  <div className="fontSmall tjueFire" style={{ alignSelf:"center", justifySelf:"center",}}>2024</div>
  <div className="fontSmall links" style={{ alignSelf:"center", justifySelf:"center" }}> links</div>
</div>   
      </div>
      </div>
      
    )
  }
  
  