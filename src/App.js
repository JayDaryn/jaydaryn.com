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
  FaArrowLeft
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
            <p>BLOCKCHAIN | NFTs | CRYPTO | DECENTRALIZED APPS <br/> WEB &amp; MOBILE DEVELOPMENT <br/> CONSULTING</p>
          ) : (
            <div style={{cursor:'pointer'}} onClick={()=>{navigate("/")}}>  <FaArrowLeft style={{margin:'9px'}} /> <img src={logo} alt="logo" style={{width:'150px'}}/> </div>
          )}
          
        </div>
        <div>
          <p>Let's Chat:</p>
          <div className="chat">
            <a href="https://wa.me/+96171220083" title="Whatsapp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp/>
            </a>
            <a href="https://t.me/jeanclaudeaoun" title="Telegram" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
            <a  href="tel:+96171220083" title="Phone" >
              <FaPhone />
            </a>
            <a href="mailto:sales@jaydaryn.com" title="Email">
              <FaEnvelope/>
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
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/jaydaryncreativetechnologies/" title="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/jaydaryn/" title="Linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/jaydaryn" title="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/channel/UCRt536cOsGmYAOqpvU4LYFQ" title="Youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://github.com/jaydaryn" title="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          
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