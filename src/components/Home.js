import React from "react";
import { Link } from "react-router-dom";
import  logo  from '../assets/hdlogo.png'

const Home = () => (
<>
	<div className="title-holder">
    <p style={{fontSize:'1em'}}> WEBSITE UNDER DEVELOPMENT &#127939;&#9203; </p>
      <div> 
        <img src={logo} alt="logo" style={{width:'90%', maxWidth:'650px'}}/> 
    	</div>
    <hr width="220px"/>
    <p> Make ideas happen <span className='rocket'> &#128640;</span> </p>
          
  </div>
  <div style={{display:"flex"}}>
    <a href="https://drive.google.com/file/d/1h_CubiU0YMjF886TqnYRjDHx3p7aVJES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div  className="button1"><span> Look Around </span>&nbsp; &#128064;</div>
    </a>
    <Link to="AndThisNFTProvesIt">
      <div  className="button1" style={{background:'#BAE8E8',color:'#093145'}}><span>Our NFT Work</span>&nbsp; &#127880;</div>
    </Link>
  </div>
</>
)

export default Home