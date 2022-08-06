import React from "react";
import  whatsappGroupQR  from '../assets/whatsappGroupQR.png'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const JoinOurCommunity = () => {
	const [open, setOpen] = React.useState(false)
	return(
		<div className="section" >
      <img src={whatsappGroupQR} alt="logo" style={{flex:1, width:'70%'}}/>
			<div style={{flex:3, alignItems:'center',display:'flex',flexDirection:'column'}}>
				<h1 style={{color:'white',fontSize:'2em', padding:30,fontWeight:'bold'}}>Join Our Community</h1>
				<p style={{color:'white', padding:30,fontSize:'1em',maxWidth:800,lineHeight:1.5}}>
					Our ideal candidates are those eager to have their foot literally in the metaphoric tech industry door especially for blockchain and web3 enthusiasts! This is an opportunity to learn and acquire valuable knowledge from the source, you will gain handy connections to your growing network, participate in tech events and undergo various workshops that would look simply smashing on your resume or just expand your overall knowledge! And who knows, you might just be the next person to solve some important issues in the web3 industry and change the world!
				</p>
				<a href="https://chat.whatsapp.com/B6bopI1UL0y5Ykom4T6kTo" target="_blank" rel="noopener noreferrer">
					<div  className="button1" >Join Our Whatsapp Group 👾</div>
				</a>
			</div>
			
		</div>
	)
}

export default JoinOurCommunity