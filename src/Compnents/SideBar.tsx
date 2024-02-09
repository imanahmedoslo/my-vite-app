
import "../App.css"
export default function SideBar(){
    return (<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
    <p style={{fontSize:"25px"}} className="fontSmall">KontaktInfo<b style={{color:'#049B79'}}>.</b></p>
    <p style={{fontSize:"25px"}} className="fontSmall">Dashboard<b style={{color:'#049B79'}}>.</b></p>
    <p style={{fontSize:"25px"}} className="fontSmall">Omg meg<b style={{color:'#049B79'}}>.</b></p>
    <p style={{fontSize:"25px"}} className="fontSmall">Prosjekter<b style={{color:'#049B79'}}>.</b></p>
    <p style={{fontSize:"25px"}} className="fontSmall">LinkedIn<b style={{color:'#049B79'}}>.</b></p>
    </div>)
}