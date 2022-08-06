import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from './utils/useLocalStrorage';

import "./App.css";
import { FaCookieBite } from 'react-icons/fa'
import { Button } from 'semantic-ui-react'



import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import JoinOurCommunity from './components/JoinOurCommunity'
import AndThisNFTProvesIt from './components/AndThisNFTProvesIt'


const App = () => {
  const [cookie, setCookie] = useLocalStorage("cookie", 'NOT_ACCEPTED');
  
  return (
    <div className="card">
      <Header/>
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="AndThisNFTProvesIt" element={<AndThisNFTProvesIt />} />
            <Route path="JoinOurCommunity" element={<JoinOurCommunity />} />
            <Route path="*" element={<Navigate to='/' />} />
          </Routes>
      </div>
      <Footer/>
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
  )
}

export default App;