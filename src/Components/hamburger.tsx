type hamburgerProps={
    gridArea:string,
}
export default function Hamburger({gridArea}:hamburgerProps){
    return(<div style={{gridArea:gridArea, justifySelf:"end", margin:"30px"}}>
    <svg width="auto" height="4rem" viewBox="0 0 30 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1490_325)">
                <path  d="M5.07849 11V60" stroke="#EEEEF2" strokeWidth="2"></path>
                <path  d="M15.0785 16V45" stroke="#EEEEF2" strokeWidth="2"></path>
                <path  d="M25.0784 1V50" stroke="#EEEEF2" strokeWidth="2"></path>
                <path  fillRule="evenodd" clipRule="evenodd" d="M5.07843 11L9 8.4482L9 3.61273L5.07843 1L1.07843 3.61273L1 8.4482L5.07843 11Z" stroke="#EEEEF2" strokeWidth="2"></path>
                <path  fillRule="evenodd" clipRule="evenodd" d="M25.0784 60L29 57.4482V52.6127L25.0784 50L21.0784 52.6127L21 57.4482L25.0784 60Z" stroke="#EEEEF2" strokeWidth="2"></path>
            </g>
        </svg>
    </div>)
}