import React from "react";
import "../App.css";
import {
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
const Footer = () => {
	return(
		<div className="footer">
        <div>
					<a style={{fontSize:'1.3em'}}  href="https://www.canva.com/design/DAFJVXpFjLk/7zOlmtVLF90buO_3iHEP3g/view?website#2:prepared-by-jeanclaude-aoun" target="_blank" rel="noopener noreferrer">Become a Sponsor 💸</a>
        </div>

        <div>
          <p style={{padding:10}}>Follow Us Plz👇</p>
          <a style={{padding:15}} href="https://www.instagram.com/jaydaryncommunity/" title="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram color="white" size={30} />
          </a>
          <a style={{padding:15}} href="https://twitter.com/jaydaryn" title="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter color="white" size={30}/>
          </a>
        </div>

        <div>
          <a style={{fontSize:'1.3em'}}  href="https://jaydaryn.notion.site/Join-Our-Team-9e7ff24b0abe40f1b76815c885b7c628" target="_blank" rel="noopener noreferrer">Join Our Team 👷🏽 </a>
        </div>
        
        </div>
	)
}

export default Footer
