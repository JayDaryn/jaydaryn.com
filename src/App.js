import React,  {useState} from 'react';
import "./App.css";

import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import  logo  from './assets/hdlogo.png'


const App = () => {
  
  return (
    <div className="card">
      <div className="header">
        <div className="logo">
          <p>BLOCKCHAIN | NFTs | CRYPTO | DECENTRAIZED APPS <br/> WEB &amp; MOBILE DEVELOPMENT <br/> CONSULTING</p>
        </div>
        <div className="social">
          <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
            <IconFacebook className="icon" />
          </a>
          <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
            <IconTwitter className="icon" />
          </a>
          <a href="https://github.com/" title="GitHub" target="_blank" rel="noopener noreferrer">
            <IconGithub className="icon" />
          </a>
        </div>
      </div>
      <div className="content">
        <div className="title-holder">
          <h1> <img src={logo}/> </h1>
          <p> &#127752; We Are Still Waiting For Inspiration To Hit Our Creative Team &#128064; </p>
        </div>
        <div>
          <a href="mailto:sales@jaydaryn.com">
            <div className="cta"> Hit us up &#128012;&#128233; </div>
          </a>
          <a href="https://drive.google.com/file/d/1h_CubiU0YMjF886TqnYRjDHx3p7aVJES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <div  className="cta" style={{background:'#BAE8E8',color:'#272343'}}> Explore Our Services &#128126;</div>
          </a>
        </div>
        
      </div>
      <div className="footer">
        <span>All rights reserved &copy;</span>
      </div>
    </div>
  )
  
}

export default App;