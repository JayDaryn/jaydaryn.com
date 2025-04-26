import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0F1A22] text-white font-sans">
      {/* Navbar */}
      <nav className="navbar fixed top-0 left-0 w-full z-50 bg-[#0f1a22a0] shadow-lg">
        <div className="container mx-auto flex flex-wrap items-center justify-between py-2 px-4">
          <a className="text-xs font-bold leading-tight" href="#">
            WEB3.0 | BLOCKCHAIN | NFTs | CRYPTO | METAVERSE<br />TECH ADVISORS | CONSULTING<br />Web 3.0 INITIATIVE<br />DUBAI
          </a>
          <div className="flex items-center space-x-2">
            <a href="https://t.me/jeanclaudeaoun" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-light bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition font-semibold text-xs">
                Chat With A Human <strong>🤖</strong>
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex justify-center items-center bg-[#0F1A22] h-[80vh]">

        <Image
          src="/img/banner.jpg"
          alt="JayDaryn Banner"
          fill
          style={{ objectFit: 'cover', maxWidth: '50%', maxHeight: '50%', margin: 'auto' }}
          priority
        />

      </header>

      {/* About/Philosophy Section */}
      <section className="bg-[#0F1A22] py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="w-4/5">
              <Image
                src="/img/Screen%20Shot%202022-11-10%20at%204.59.19%20PM.png"
                alt="Philosophy Visual"
                width={600}
                height={400}
                className="rounded"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4">
            <h2 className="text-3xl font-bold text-[#bae8e8] mb-4">Welcome To The<br />Web 3.0<br />Decentralized<br />Future 🚀</h2>
            <p className="mb-4">JayDaryn is a collective of web3 tech advisors who aim to accelerate your idea or project. Whatever you have in your head, we can build it.</p>
            <h3 className="text-2xl font-semibold text-[#bae8e8] mb-2 mt-6">Our Philosophy</h3>
            <p className="mb-2">We believe that the future of the internet is <b>Trust-Less</b>, Censorship-Free, prioritizes Data-Ownership, and is powered by Blockchain Technologies. It&#39;s up to dreamers like us to build it.</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>👾 <b>Decentralization</b></li>
              <li>☄️ <b>Problem Solving</b></li>
              <li>🎨 <b>Creativity</b></li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <a href="https://www.canva.com/design/DAFLxVqWyr0/toIDw5gVYdzX9nP7AXAaEg/view?website#2" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition">Whitepaper</button>
              </a>
              <a href="https://calendly.com/jeanclaudeaoun" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">Schedule A Call</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#bae8e8] text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner 1 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/Screen%20Shot%202022-11-25%20at%203.34.20%20PM-1.jpg" alt="Nobots LLC Dubai" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">Nobots LLC Dubai</h3>
                <p>Skilz is a new way to Find people with talents combining social media and recruiting. Register yourself as a provider of a service or skill and earn.</p>
              </div>
            </div>
            {/* Partner 2 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/decentralLogo.png" alt="Decentral Holdings LLC - DE" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">Decentral Holdings LLC - DE</h3>
                <p>Decentral is building an application protocol to define the future of security in blockchain technology by facilitating interoperability across all decentralized networks.</p>
              </div>
            </div>
            {/* Partner 3 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/Screen%20Shot%202022-11-25%20at%203.34.20%20PM.jpg" alt="MetaLaunchers" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">MetaLaunchers</h3>
                <p>Launching Projects To Success, In The DEFI & NFT Space. Industry leaders in community moderation and Discord server development for Web3, DeFi, and NFT projects.</p>
              </div>
            </div>
            {/* Partner 4 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/Screen%20Shot%202022-11-25%20at%203.37.01%20PM-1.jpg" alt="Astrek" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">Astrek</h3>
                <p>ASTREK is on a Mission to Revolutionize the the World of Travel through the Power of Blockchain & NFT</p>
              </div>
            </div>
            {/* Partner 5 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/codeblaseLogo-square.jpeg" alt="Codeblase" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">Codeblase</h3>
                <p>Codeblase is an online platform that allows users to create, manage and host a full backend stack easily and without writing any code.</p>
              </div>
            </div>
            {/* Partner 6 */}
            <div className="flex flex-col md:flex-row items-center bg-[#181818] rounded-lg p-4 gap-4">
              <div className="w-full md:w-1/3 flex justify-center">
                <Image src="/img/Screen%20Shot%202022-11-25%20at%203.58.52%20PM.jpg" alt="OWL Protocol" width={200} height={200} className="rounded" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-semibold text-[#bae8e8]">OWL Protocol</h3>
                <p>The No-Code, Dynamic NFT Workshop. Launch dNFTs with in-game utility, real world use cases, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-[#0F1A22] py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <div className="w-60 h-60 relative">
              <Image src="/img/jc_newblue.jpg" alt="Jeanclaude (JC)" fill className="rounded-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-1 px-4">

            <h2 className="text-3xl font-bold text-[#bae8e8] mb-2">Meet Our Founder</h2>
            <p className="mb-2"><b>Jeanclaude (JC)</b><br />Tech Advisor | Senior Engineer | CTO</p>
            <a href="https://jeanclaudeaoun.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Jeanclaudeaoun.com</a>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="bg-[#0F1A22] py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center">
            <div className="w-4/5">
              <Image src="/img/Screen%20Shot%202022-11-10%20at%204.44.43%20PM.png" alt="Growth Visual" width={600} height={400} className="rounded" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4">
            <h2 className="text-3xl font-bold text-[#bae8e8] mb-4">Be Part Of The Growth...</h2>
            <p className="mb-4">If you are thinking about expanding your business into Web3 without getting lost in all the Buzz words (NFTs, Metaverse, Crypto, HODL) then let us be your Technology Backbone!</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="flex space-x-4 text-3xl">
              <a href="https://twitter.com/jaydaryn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><i className="icon ion-social-twitter" /></a>
              <a href="https://www.instagram.com/jaydaryncommunity/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400"><i className="fa fa-instagram" /></a>
              <a href="https://wa.me/+971582236678" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i className="icon ion-social-whatsapp" /></a>
              <a href="mailto:sales@jaydaryn.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400"><i className="icon ion-ios-email" /></a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-1 px-4">
            <h2 className="text-3xl font-bold text-[#bae8e8] mb-4">Let&#39;s Get In Touch</h2>
            <p className="mb-4">Let&#39;s schedule a free call or meet for ☕️ where we can explore your Industry needs and see how Web3 can optimize your business and financial model!</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <a href="https://www.canva.com/design/DAFLxVqWyr0/toIDw5gVYdzX9nP7AXAaEg/view?website#2" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition">Whitepaper</button>
              </a>
              <a href="https://calendly.com/jeanclaudeaoun" target="_blank" rel="noopener noreferrer">
                <button className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">Schedule A Call</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-5">
        <div className="container mx-auto">
          <p className="text-center text-white text-sm">Copyright © JayDaryn Dubai 2022</p>
        </div>
      </footer>
    </div>
  );
}
