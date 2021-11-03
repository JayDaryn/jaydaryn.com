import React,  {useState} from 'react';
import "./App.css";


import { FaEnvelope, FaWhatsapp, FaTelegramPlane , FaPhone} from 'react-icons/fa'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaGithub, FaBluetoothB } from 'react-icons/fa'
import  logo  from './assets/hdlogo.png'


const App = () => {
  
  return (
    <div className="card">
      <div className="header">
        <div>
          <p>BLOCKCHAIN | NFTs | CRYPTO | DECENTRALIZED APPS <br/> WEB &amp; MOBILE DEVELOPMENT <br/> CONSULTING</p>
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
            <a  href="tel:+96171220083" title="Phone" target="_blank" rel="noopener noreferrer">
              <FaPhone />
            </a>
            <a href="https://www.tomorrowtides.com/jaydaryn-services.html" title="Bluetooth Chat" target="_blank" rel="noopener noreferrer">
              <FaBluetoothB />
            </a>
            <a href="mailto:sales@jaydaryn.com" title="Email">
              <FaEnvelope/>
            </a>
          </div>
        </div>
        
      </div>
      <div className="content">
        <div className="title-holder">
        <p style={{fontSize:'1em'}}> WEBSITE UNDER DEVELOPMENT &#127939;&#9203; </p>
          <div> 
            <img src={logo} alt="logo" style={{width:'90%', maxWidth:'650px'}}/> 
          </div>
          <hr width="220px"/>
          <p> Make ideas happen <span className='rocket'> &#128640;</span> </p>
          
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1h_CubiU0YMjF886TqnYRjDHx3p7aVJES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div  className="button1"><span> Look Around </span>&nbsp; &#128064;</div>
          </a>
          
        </div>
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
      </div>
      
    </div>
  )
  
}

export default App;