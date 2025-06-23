'use client';
import Hero from "./Hero";
import Card from "./Card";
import ImpactMetrics from "../metrics";
import Footer from "../Footer";
import { MoveDown } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative w-screen h-max bg-neutral-900 text-gray-100">
        <div className="max-w-7xl mx-auto py-18 px-3 text-center">
          <h1 className="text-gray-100 text-2xl font-bold mb-3 max-w-5xl mx-auto">
            Building in Web3 — Infrastructure, Tools, and Early-Stage Insight
          </h1>
          <p className="text-gray-400 text-base font-light mb-10 max-w-3xl mx-auto">
            From decentralized node operations to open-source tools and alpha-sharing — this is how I contribute to a more resilient and user-aligned web3 ecosystem.
          </p>
        </div>

        <Card
          id="card-1"
          imgSrc="/network.png"
          imgAlt="Network Infrastructure Icon"
          title="Node & Validator Operations"
          subtitle="High-uptime operations across mainnet and testnet environments."
          description="I manage decentralized nodes across multiple blockchain networks, with a strong focus on uptime, automation, and early-phase participation. My setup is built for performance, reliability, and long-term contribution to resilient infrastructure."
          listItems={[
            "Incentivized testnet participant & early mainnet deployments",
            "Advanced monitoring, alerting, and automated failover systems",
            "Hands-on with Cosmos, Polkadot, and Ethereum-based chains",
          ]}
          btnText="View Infrastructure"
          btnHref="/"
          btnType="link"
        />

        <Card
          id="card-2"
          imgSrc="/settings.png"
          imgAlt="Community Tools Icon"
          title="Community-Built Tools"
          subtitle="Open-source utilities designed to improve speed, clarity, and success for Web3 users."
          description="I craft practical tools that simplify complex workflows — built specifically for node operators, airdrop hunters, and builders who want to go from zero to contribution faster."
          listItems={[
            "Prolinkmoon Playground: CLI installer toolkit for Cosmos chains",
            "Starter pack to launch your first node — no fluff, just action",
            "Upcoming: lightweight, open-source block explorer",
          ]}
          btnText="Our Docs"
          btnHref="https://google.com"
          btnType="link"
        >
          <div className="flex gap-1.5 mt-2">
            <a
              href="https://github.com/yourrepo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <button className="size-10 items-center px-1.5 py-1.5 cursor-pointer text-gray-100 rounded-sm border border-white/30 hover:border-white/50 bg-black">
                <i className="bx bxl-github text-2xl"></i>
              </button>
            </a>
          </div>
        </Card>

        {/* CARD 3 kamu sudah oke, jadi copy dari kode kamu */}
        <div
          id="card-3"
          className="container mx-auto py-18 px-5 lg:flex lg:px-0 hover:scale-[1.02] transition-transform duration-300 ease-in-out"
        >
          <img
            src="/device_ok.png"
            alt="Prolinkmoon Web in device"
            className="w-2xl"
          />
          <div className="content-center lg:ml-10">
            <span className="bg-green-600 p-1 text-sm"># FREE</span>
            <h2 className="alpha-airdrop-h2 font-bold mt-2">
              Airdrop & Alpha Sharing
            </h2>
            <p className="text-gray-400 card-p-small font-light">
              Research-backed insights into airdrop strategies and early
              incentives.
            </p>
            <ul className="list-disc card-list ml-5 mt-2.5 mb-6 text-gray-200">
              <li>
                High-quality airdrops only — strong fundamentals, strong Funding
                & Backer
              </li>
              <li>Risk breakdowns and realistic earning expectations</li>
              <li>Twitter alpha threads — Comprehensive guides</li>
              <li>Community-curated notes, checklists, and how-tos</li>
            </ul>
            <div className="flex">
              <a
                href="/airdrop"
                className="card-btn items-center justify-center px-2.5 py-1.5 text-gray-100 font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black"
              >
                Start Exploring
              </a>
            </div>
          </div>
        </div>

        <ImpactMetrics />

        <div className="container mx-auto max-w-2xl text-center p-5 md:p-0">
          <h1 className="font-extrabold text-4xl lg:text-5xl bg-gradient-to-tl from-blue-800 via-gray-300 to-yellow-500 bg-clip-text text-transparent">
            100+
          </h1>
          <h1 className="text-gray-300 mb-2">Airdrops brought me 5-fig rewards</h1>
          <p className="text-gray-400 italic">
            By making real contributions, being an early adopter, conducting deep
            research, and acting with strategic conviction — I consistently earn
            from high-impact crypto projects. I don’t chase hype. I align with
            protocols that shape the future of Web3. Sybil attacks and
            exploitative behavior are not part of our culture{" "}
            <span className="font-bold text-gray-300 not-italic">— this is Prolinkmoon.</span>
          </p>
        </div>
        <div className="max-w-7xl mx-auto md:mt-7 p-5">
          <h1 className="text-2xl font-bold text-gray-600">
            Mapping: Ambassador Program
          </h1>
          <p className="text-gray-600">Coming Soon ..</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
