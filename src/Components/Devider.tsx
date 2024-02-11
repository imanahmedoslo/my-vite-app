type DeviderProps={
    height:string|number,
    width:string|number,
    gridArea:string,
    justifySelf:string,
    className:string,
}
export default function Devider({height,width, gridArea, justifySelf, className}:DeviderProps){
return(<>
<div className={className} style={{ gridArea:gridArea, display:"flex", flexDirection:"row", alignSelf:"center", alignItems:"center", justifySelf:justifySelf}}>
                        <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity:1}}>
                        <path d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z" fill="#1D2145" stroke="#EEEEF2" fillRule="evenodd"></path>
                        </svg>
                        <div style={{translate: "none", rotate: "none", scale: "none", borderBottom:"white 1px solid", opacity:1, width:width, height:height, alignSelf:"center"}}></div>
                        <svg width="11" height="9" xmlns="http://www.w3.org/2000/svg" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)",opacity:1}}>
                            <path d="m10.407 4.5-2.555 4H3.148l-2.555-4 2.555-4h4.704l2.555 4Z" fill="#1D2145" stroke="#EEEEF2" fillRule="evenodd"></path>
                        </svg>
                    </div>
</>)
}