'use client';

import "../globals.css";
import Footer from '../Footer';
import CountUp from 'react-countup';
import CapabilitiesSection from "./CapabilitiesSection";
import MainnetSection from "./mainnet";
import IncentivizedTestnetSection from "./testnet";

export default function ValidatorHero() {
  return (
    <div className="absolute inset-0 -z-10 h-max w-full bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900">
      <div className="mx-auto max-w-6xl text-gray-100 pt-36 pb-20 px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          A Web3 / Blockchain Infra Operator
        </p>

        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-200 bg-clip-text text-transparent">
          Secure. Automated. Powerful.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
          Operates independently, elivers institutional-grade validator infrastructure —
          secure, automated, and performance-optimized across testnet and mainnet networks.
        </p>

        <a
          href="#networks"
          className="mt-2 inline-block text-sm font-mono text-gray-400 hover:text-gray-200 transition"
        >
          Explore our infrastructure ↗
        </a>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <a
            href="#networks"
            className="text-sm font-mono px-4 py-2 rounded border border-white/30 hover:border-white/60 transition bg-black text-white"
          >
            See Networks
          </a>
          <a
            href="/tools"
            className="text-sm font-mono px-4 py-2 rounded border border-white/30 hover:border-white/60 transition bg-black text-white"
          >
            Pro Tools
          </a>
        </div>
                {/* Stats Section */}
        <div className="mt-24 flex gap-4 md:gap-8 xl:gap-12 text-center justify-center text-gray-200">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              <CountUp end={99.9} duration={2} decimals={1} suffix="%" />
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Uptime Guarantee</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              <CountUp end={7} duration={2} suffix="+" />
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Networks Supported</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white">
              <CountUp end={0} duration={1.5} />
            </p>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">Downtime Incidents</p>
          </div>
        </div>
        < CapabilitiesSection />
        < MainnetSection />
        <div>
          < IncentivizedTestnetSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}
