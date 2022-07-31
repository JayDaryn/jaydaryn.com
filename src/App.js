import React from 'react';
import { Routes, Route, Navigate,useLocation,useNavigate } from "react-router-dom";
import useLocalStorage from './utils/useLocalStrorage';

import "./App.css";
import { 
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaCookieBite,
  FaArrowLeft,
  FaVideo
} from 'react-icons/fa'
import { Button } from 'semantic-ui-react'
import  logo  from './assets/hdlogo.png'


import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import AndThisNFTProvesIt from './components/AndThisNFTProvesIt'



const App = () => {
  const [cookie, setCookie] = useLocalStorage("cookie", 'NOT_ACCEPTED');

	let location = useLocation()
  let navigate = useNavigate()
  
  return (
    <div className="card">
      <div className="header">
        <div>
          {location.pathname === '/' ? (
            <p>WEB3.0 | BLOCKCHAIN | NFTs | CRYPTO | DECENTRALIZATION | METAVERSE <br/>EVENTS | WORKSHOPS | MEETUPS | HACKATHONS | DUBAI<br/>INITIATIVE | COMMUNITY | HACKERSPACE<br/>CONSULTING | ADVISORS</p>
          ) : (
            <div style={{cursor:'pointer'}} onClick={()=>{navigate("/")}}>  <FaArrowLeft style={{margin:'9px'}} /> <img src={logo} alt="logo" style={{width:'150px'}}/> </div>
          )}
          
        </div>
        <div>
          <p style={{ fontSize:'1.1em'}}>Hey 👋 &nbsp;Let's chat:</p>
          <div className="chat">
          
            <a href="https://wa.me/+971582236678" title="Whatsapp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp/>
            </a>
            <a href="mailto:sales@jaydaryn.com" title="Email">
              <FaEnvelope/>
            </a>
            <a style={{display:'flex', align:'center'}} href="https://calendly.com/jeanclaudeaoun" title="Calendly" target="_blank" rel="noopener noreferrer">
            <FaVideo/> &nbsp;&nbsp;<p style={{fontFamily:'monospace', textDecoration:'underline'}}> Schedule a Call ▸ </p>
            </a>
          </div>
        </div>
        
      </div>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AndThisNFTProvesIt" element={<AndThisNFTProvesIt />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
      </div>
      <div className="footer">
        
        <div className="social">
          <a href="https://www.facebook.com/JayDarynCreativeTechnologies/" title="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={20}/>
          </a>
          <a href="https://www.instagram.com/jaydaryncreativetechnologies/" title="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          {/* <a href="https://www.linkedin.com/company/jaydaryn/" title="Linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a> */}
          <a href="https://twitter.com/jaydaryn" title="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20}/>
          </a>
          <a href="https://www.youtube.com/channel/UCRt536cOsGmYAOqpvU4LYFQ" title="Youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20}/>
          </a>
          {/* <a href="https://github.com/jaydaryn" title="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a> */}
          
        </div>
        <div>
          <span>All rights reserved &copy;</span>
        </div>
        {cookie==='NOT_ACCEPTED' && (
          <div style={{position:'fixed' , width:'300px', right:'20px',bottom:'20px',background:'#093145',borderRadius:'20px', padding:'30px',wordWrap:'normal',boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.3)'}}>
          <h1 style={{fontSize:'1.2em'}}><FaCookieBite style={{color:'brown'}}/> &nbsp;&nbsp; Cookie Consent</h1>
          <p style={{paddingTop:'18px',fontSize:'0.9em'}}>
            This website uses cookies or similar technologies, to enhance your browsing experience. By continuing to use our website, you agree to our  <a style={{color:'#115cfa'}} href="/privacy-policy">Privacy Policy</a>
          </p>
          <Button onClick={()=>{setCookie('ACCEPTED')}} style={{marginTop:'20px'}} size='tiny' secondary>Okay</Button>
        </div>
        )}
        
      </div>
      
    </div>
  )
  
}

export default App;