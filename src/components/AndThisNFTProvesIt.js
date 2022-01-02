import React from "react";
import  AndThisNFTProvesItGif  from '../assets/AndThisNFTProvesIt.gif'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AndThisNFTProvesIt = () => {
	const [open, setOpen] = React.useState(false)
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
					Or Even DARE to come out and say "I Put Pineapple On Pizza" and this NFT proves it. <br/>
					
					<Modal
						onClose={() => setOpen(false)}
						onOpen={() => setOpen(true)}
						open={open}
						trigger={<span style={{color:'#093145',cursor:'pointer'}}>Terms &amp; Conditions</span>}
					>
						<Modal.Header>Terms &amp; Conditions</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<Header>Terms And Conditions</Header>
								<div style={{width:'100%', height:500,overflowX:'auto',wordWrap:'break-word'}}>
<p style={{width:'100%'}}>
Ownership. <br/><br/>JayDaryn operates on a modified version of the NFT License.  <br/><br/>You acknowledge and agree that JayDaryn owns all legal rights, titles, and interests in and to the Art, and all intellectual property rights therein. The rights that you have in and to the Art are limited to those described in this License. JayDaryn reserves all rights in and to the Art not expressly granted to you in this License. <br/><br/>Definitions.<br/>“Art” means any art, design, and drawings that may be associated with an NFT that you Own.
"NFT" means any blockchain-tracked, non-fungible token, such as those conforming to the ERC-721 standard.
“Own” means, with respect to an NFT, an NFT that you have purchased or otherwise rightfully acquired from a legitimate source, where proof of such purchase is recorded on the relevant blockchain.
“Extensions” means third-party designs that: (i) is intended for use as extensions or overlays to the Art, (ii) do not modify the underlying Art, and (iii) can be removed at any time without affecting the underlying Art.
“Purchased NFT” means an NFT that you Own.
“Third Party IP” means any third party patent rights (including, without limitation, patent applications and disclosures), copyrights, trade secrets, trademarks, know-how, or any other intellectual property rights recognized in any country or jurisdiction in the world<br/><br/>License.<br/>a. General Use. Subject to your continued compliance with the terms of this License, JayDaryn grants you a worldwide, royalty-free license to use, copy, and display the Art for your Purchased NFTs, along with any Extensions that you choose to create or use, for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your NFTs, provided that the marketplace cryptographically verifies each NFT owner’s rights to display the Art for their Purchased NFTs to ensure that only the actual owner can display the Art; or (iii) as part of a third-party website or application that permits the inclusion, involvement, or participation of your NFTs, provided that the website/application cryptographically verifies each NFT owner’s rights to display the Art for their Purchased NFTs to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased NFT leaves the website/application.<br/><br/>b. Commercial Use. Subject to your continued compliance with the terms of this License, JayDaryn grants you an unlimited, worldwide license to use, copy, transfer ownership, resell, reauction and display the Art for your Purchased NFTs. For the sake of clarity, nothing in this Section b will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of NFTs generally, provided that the marketplace cryptographically verifies each NFT owner’s rights to display the Art for their Purchased NFTs to ensure that only the actual owner can display the Art; (ii) owning or operating a third-party website or application that permits the inclusion, involvement, or participation of NFTs generally, provided that the third-party website or application cryptographically verifies each NFT owner’s rights to display the Art for their Purchased NFTs to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased NFT leaves the website/application.
<br/><br/>c. Restrictions. You agree that you may not, nor permit any third party to do or attempt to do any of the foregoing without JayDaryn's express prior written consent and approval in each case: (i) modify the Art for your Purchased NFT in any way, including, without limitation, the shapes, designs, drawings, attributes, or color schemes (your use of Extensions will not constitute a prohibited modification hereunder); (ii) use the Art for your Purchased NFTs to advertise, market, or sell any third party product or service for the purpose of commercializing your own merchandise that includes, contains, or consists of the Art for your Purchased NFTs ; (iii) use the Art for your Purchased NFTs in connection with images, videos, or other forms of media that depict hatred, intolerance, violence, cruelty, or anything else that could reasonably be found to constitute hate speech or otherwise infringe upon our rights and the rights of others; (iv) sell, distribute for commercial gain (including, without limitation, giving away in the hopes of eventual commercial gain), or otherwise commercialize merchandise that includes, contains, or consists of the Art for your Purchased NFTs, except as expressly permitted in Section (b) above; (v) attempt to trademark, copyright, or otherwise acquire additional intellectual property rights in or to the Art for your Purchased NFTs; or (vi) otherwise utilize the Art for your Purchased NFTs for your or any third party’s commercial benefit. To the extent that Art associated with your Purchased NFTs contains Third Party IP (e.g., licensed intellectual property from a celebrity, athlete, or other public figures), you understand and agree as follows: (vii) that you will not have the right to use such Third Party IP in any way except as incorporated in the Art, and subject to the license and restrictions contained herein; (viii) that, depending on the nature of the license granted from the owner of the Third Party IP, JayDaryn may need to pass through additional restrictions on your ability to use the Art. The restrictions in Section (c) will survive the expiration or termination of this License.<br/><br/>Terms of License.<br/>
The license granted in Section (b) above applies only to the extent that you continue to Own the applicable Purchased NFT. If at any time you sell, trade, donate, give away, transfer, or otherwise dispose of your Purchased NFT for any reason, the license granted in Section (b) will immediately expire with respect to those NFTs without the requirement of notice, and you will have no further rights in or to the Art for those NFTs. If you exceed the scope of the license grant in Section (b) & (c) without entering into a broader license agreement with or obtaining an exemption from JayDaryn, you acknowledge and agree that: (i) you are in breach of this License; (ii) in addition to any remedies that may be available to JayDaryn at law or in equity, the Creator may immediately terminate this License, without the requirement of notice; and (iii) you will be responsible to reimburse JayDaryn for any costs and expenses incurred by JayDaryn during the course of enforcing the terms of this License against you. <br/><br/>Disclaimer<br/>
The 'And This NFT Proves It' quotes are in no way a reflection of the JayDaryn brand, values, or image, and no discrimination, bias, or prejudice of any kind is intended to any individual, social group, minority, or belief. The collection and quotes are an artistic representation of popular quotes or common social statements that are shared amongst various individuals in society as a fun way of self-expression only and are in no way a promotion of any particular beliefs, or set of values.</p></div>
							</Modal.Description>
						</Modal.Content>
						<Modal.Actions>
							<Button
								content="Okay"
								labelPosition='right'
								icon='checkmark'
								onClick={() => setOpen(false)}
								positive
							/>
						</Modal.Actions>
					</Modal>
				</p>
				<a href="https://opensea.io/collection/andthisnftprovesit" target="_blank" rel="noopener noreferrer">
					<div  className="button1" ><span> View on OpenSea </span>&nbsp; &#128064;</div>
				</a>
			</div>
			
		</div>
	)
}

export default AndThisNFTProvesIt