import React from "react";
import  AndThisNFTProvesItGif  from '../assets/AndThisNFTProvesIt.gif'

const AndThisNFTProvesIt = () => {
	return(
		<div className="section" >
      <img src={AndThisNFTProvesItGif} alt="logo" style={{width:'50%', maxWidth:'500px'}}/>
			<div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
				<h1 style={{color:'white',fontSize:'2em', padding:50,fontWeight:'bold'}}>And This NFT Proves It.</h1>
				<p style={{color:'white', padding:50,fontSize:'1em',maxWidth:800,lineHeight:1.5}}>
					Settle the debate ONCE AND FOR ALL. With this NFT, you can drop the mic and finally prove your point to your friends, enemies, and loved ones!
					<br/><br/>
					The blockchain doesn't LIE.
					<br/><br/>
					Stand behind what you believe in and be marked down in history Forever on the blockchain with Like-Minded People.
					You can change your Life Today and confidently say "I Am Ridiculously Rich" and I have an NFT to prove it! <br/>
					"I Am Smarter Than Elon Musk" OR "I Am Flyer Than Snoop Dogg" and this NFT proves it.<br/>
					Or Even DARE to come out and say "I Put Pineapple On Pizza" and this NFT proves it. 
				</p>
				<a href="https://drive.google.com/file/d/1h_CubiU0YMjF886TqnYRjDHx3p7aVJES/view?usp=sharing" target="_blank" rel="noopener noreferrer">
					<div  className="button1" ><span> View on OpenSea </span>&nbsp; &#128064;</div>
				</a>
			</div>
		</div>
	)
}

export default AndThisNFTProvesIt