import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import  logo  from '../assets/hdlogo.png'
import "../App.css";
import { 
  FaEnvelope,
  FaWhatsapp,
  FaArrowLeft,
  FaVideo
} from 'react-icons/fa'

const Header = () => {
	let location = useLocation()
  let navigate = useNavigate()
	return(
	<div className="header">
	<div>
		{location.pathname === '/' ? (
			<p>EVENTS | WORKSHOPS | MEETUPS | HACKATHONS | BOOTCAMPS | DUBAI <br/> WEB3.0 | BLOCKCHAIN | NFTs | CRYPTO | METAVERSE <br/> TECH ADVISORS | CONSULTING</p>
		) : (
			<div style={{cursor:'pointer', display:'flex', alignItems:'center'}} onClick={()=>{navigate("/")}}>  <FaArrowLeft style={{margin:'9px'}} /> <img src={logo} alt="logo" style={{width:'150px'}}/> </div>
		)}
		
	</div>
	<div>
		<p style={{ fontSize:'1.1em'}}>Chat with a Human: 🤖</p>
		<div className="chat">
		
			<a href="https://wa.me/+971582236678" title="Whatsapp" target="_blank" rel="noopener noreferrer">
				<FaWhatsapp/>
			</a>
			<a href="mailto:sales@jaydaryn.com" title="Email">
				<FaEnvelope/>
			</a>
			<a style={{display:'flex', align:'center'}} href="https://calendly.com/jeanclaudeaoun" title="Calendly" target="_blank" rel="noopener noreferrer">
			<FaVideo/> &nbsp;&nbsp;<p style={{fontFamily:'monospace'}}> Schedule Call▸ </p>
			</a>
		</div>
	</div>
	
</div>
)
}

export default Header