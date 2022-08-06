import React from "react";
import { Link } from "react-router-dom";
import  logo  from '../assets/hdlogo.png'

const Home = () => (

	<div style={{display:'flex', flexDirection: 'column', alignItems:'center',color:'#f0fbff' }}>
       
    <img src={logo} alt="logo" style={{width:'80%', maxWidth:'800px'}}/> 
    <p style={{fontFamily:'monospace', padding:5, fontSize:'1.1em', textAlign:'center', paddingBottom:30}}>
      The #1 Web3.0 Initiative ✨ Blockchain Community Hackerspace in Dubai ✨ 
      </p> 
     
      <p style={{padding:5, fontSize:'1.5em', textAlign:'center', width:'90%', maxWidth:'1100px'}}>
      Our mission is to advocate the power and importance of decentralization through blockchain technology by bringing industry leaders, techies, entrepreneurs, decision-makers, startups, and experts togeather in one room with free coffee ☕️  and pizza 🍕
    </p>
    <hr width="220px"/>
    <p style={{color:'white', textAlign:'center',  fontSize:'1.4em', lineHeight:'1.3', paddingBottom:30}}>
      Make ideas happen 🚀 
    </p>
  
  
   
  <div style={{display:"flex"}}>
    <a href="https://jaydaryn.notion.site/WhitePaper-2ac264b8e8184d8f8e7cfb78ff590cf4" target="_blank" rel="noopener noreferrer">
      <div  className="button1">Learn More 👀 </div>
    </a>
    <Link to="JoinOurCommunity">
      <div  className="button1" style={{background:'#BAE8E8',color:'#093145'}}>Join Our Community 👾</div>
    </Link>
  </div>
  </div>
)

export default Home