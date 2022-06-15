import React from "react";
import { Link } from "react-router-dom";
import  logo  from '../assets/hdlogo.png'

const Home = () => (
<>
	<div className="title-holder">
      <div> 
        <img src={logo} alt="logo" style={{width:'90%', maxWidth:'650px'}}/> 
    	</div>
    <p style={{maxWidth:850, textAlign:'center', fontSize:'1.4em', lineHeight:'1.3', fontFamily:'monospace'}}>Jaydaryn is a web3.0 initiative on a mission to advocate the power and importance of decentralization through blockchain technology in order to reach a future that prioritizes privacy, trust and data ownership on the internet, instead of being tracked and dependent on tech giants.</p>
    <hr width="220px"/>
    <p style={{maxWidth:850, textAlign:'center', paddingTop:10}}> Make ideas happen <span className='rocket'> &#128640;</span> </p>
   
  </div>
  <div style={{display:"flex"}}>
    <a href="https://jaydaryn.notion.site/WhitePaper-2ac264b8e8184d8f8e7cfb78ff590cf4" target="_blank" rel="noopener noreferrer">
      <div  className="button1"><span> Look Around </span>&nbsp; &#128064;</div>
    </a>
    <Link to="AndThisNFTProvesIt">
      <div  className="button1" style={{background:'#BAE8E8',color:'#093145'}}><span>Our NFT Work</span>&nbsp; &#127880;</div>
    </Link>
  </div>
</>
)

export default Home