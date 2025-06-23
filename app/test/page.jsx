'use client';
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import ImpactMetrics from "../metrics";
import Hero from "./ok/page";
// import Cta from "./cta";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      < Hero />
        <div className="relative w-screen h-max bg-neutral-900 text-gray-100">
          <div className="max-w-7xl mx-auto py-18 px-3">
          <h1 className="text-gray-100 text-2xl font-bold mb-7 max-w-5xl mx-auto">What I do?</h1>
            <div id="card-1" className="p-4 max-w-5xl mx-auto h-max rounded-xl border border-white/10 bg-gradient-to-bl from-neutral-900 via-zinc-800 to-neutral-900">
            <img src="/blocks.png" alt="" className="opacity-15 w-2xl"/>   
            <img
                    src="/network.png"
                    sizes="16"
                    alt="Network Infrastructure Icon"
                    className="bg-gradient-to-r from-blue-300 via-gray-100 to-yellow-100 image-card"
                  />
              <h2 className="text-gray-100 card-h1 font-bold mt-5">Node & Validator</h2>
              <p className="text-gray-100 card-p-small font-light">High-uptime operations across mainnet and testnet environments.</p>
              <p className="text-gray-400 font-normal card-p-big mt-3">  Prolinkmoon runs decentralized nodes on multiple networks — ensuring stability, performance, and reliability at scale. Passionate about early-phase participation, system automation, and contributing to a resilient blockchain infrastructure.</p>
              <ul className="list-disc card-list ml-5 mt-2.5 mb-6 text-gray-400">
              <li>Active in incentivized testnets and early mainnet deployments</li>
              <li>Automation: monitoring, alerts, backups, and failover</li>
              <li>Hands-on experience with [Cosmos-based], [Polkadot-based], [Ethereum-based] Chain. </li>
              </ul>
              <Link href="/" className="card-btn items-center justify-center px-2.5 py-1.5 text-gray-100 font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black">
                Get Started
              </Link>

            </div>
            <div id="card-2" className="p-4 max-w-5xl mx-auto h-max rounded-xl border border-white/10 bg-gradient-to-bl from-neutral-900 via-zinc-800 to-neutral-900 mt-6">     
            <img
                    src="/settings.png"
                    sizes="16"
                    alt="Network"
                    className="bg-gradient-to-b from-blue-300 via-gray-100 to-yellow-100 image-card"
                  />
              <h2 className="text-gray-100 card-h1 font-bold mt-5">Community Tools</h2>
              <p className="text-gray-100 card-p-small font-light">Practical tools that improve efficiency and experience.</p>
              <p className="text-gray-400 font-normal card-p-big mt-3">I design and ship open-source tools tailored to the needs of node operators, airdrop participants, and web3 builder.</p>
              <ul className="list-disc card-list ml-5 mt-2.5 mb-6 text-gray-400">
              <li>Prolinkmoon Playground - CLI installer tools for Cosmos-based chains</li>
              <li>A simple and effective starter pack for becoming a node operator </li>
              <li>Upcoming: lightweight Block Explorer (open-source)</li>
              </ul>
              <div className="flex gap-1.5">
              <a href="https://google.com" className="inline-flex items-center" rel="noopener noreferrer">
                <button className="size-10 items-center px-1.5 py-1.5 cursor-pointer text-gray-100 rounded-sm border border-white/30 hover:border-white/50 bg-black"><i className="bx bxl-github text-2xl"></i></button>
              </a>
              <a href="https://google.com" className="inline-flex items-center" rel="noopener noreferrer">
                <button className="items-center px-2 py-1.5 cursor-pointer text-gray-100 rounded-sm border border-white/30 hover:border-white/50 bg-black font-mono">Our Docs</button>
              </a>                
              </div>


            </div>
          </div>
            <div id="card-3" className="container mx-auto py-18 px-5 lg:flex lg:px-0 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
              <img
                src="/device_ok.png"
                alt="Prolinkmoon Web in device"
                className="w-2xl"
              />
            <div className="content-center lg:ml-10">
                <span className="bg-green-600 p-1 text-sm"># FREE</span>
              <h2 className="alpha-airdrop-h2 font-bold mt-2">Airdrop & Alpha Sharing</h2>
              <p className="text-gray-400 card-p-small font-light">Research-backed insights into airdrop strategies and early incentives.</p>
              <ul className="list-disc card-list ml-5 mt-2.5 mb-6 text-gray-200">
              <li>High-quality airdrops only — strong fundamentals, strong Funding & Backer</li>
              <li>Risk breakdowns and realistic earning expectations</li>
              <li>Twitter alpha threads — Comprehensive guides</li>  
              <li>Community-curated notes, checklists, and how-tos</li>
              
                 
              
              </ul>
              <div className="flex">
              <Link href="/airdrop" className="card-btn items-center justify-center px-2.5 py-1.5 text-gray-100 font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black">
                Start Exploring
              </Link>

              </div>
            </div>

          </div>

          <ImpactMetrics />

          <div className="container mx-auto max-w-2xl text-center p-5 md:p-0">
            <h1 className="font-extrabold text-4xl lg:text-5xl bg-gradient-to-tl from-blue-800 via-gray-300 to-yellow-500 bg-clip-text text-transparent">100+</h1>
            <h1 className="text-gray-300 mb-2">Airdrops brought me 5-fig rewards</h1>
            <p className="text-gray-400 italic">By making real contributions, being an early adopter, conducting deep research, and acting with strategic conviction — I consistently earn from high-impact crypto projects. I don’t chase hype. I align with protocols that shape the future of Web3. Sybil attacks and exploitative behavior are not part of our culture <span className="font-bold text-gray-300 not-italic">— this is Prolinkmoon.</span></p>
          </div>
          <div className="max-w-7xl mx-auto md:mt-7 p-5">
            <h1 className="text-2xl font-bold text-gray-600">Mapping: Ambassador Program</h1>
            <p className="text-gray-600">Coming Soon ..</p>
          </div>
          < Footer />
    </div>

    </>
  );
}
