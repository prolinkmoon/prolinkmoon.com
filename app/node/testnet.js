'use client';

import { motion } from 'framer-motion';

const testnets = [
  {
    name: 'Nexus',
    logo: 'https://img.cryptorank.io/coins/nexus1739951010707.png',
    status: 'Running',
    description: 'Nexus is building a global, EVM‑compatible Layer‑1 powered by a massively parallel zkVM to scale verifiable computation.',
    guideLink: 'https://x.com/ProlinkMoon/status/1937316068130971986',
  },
  {
    name: 'Aztec',
    logo: 'https://img.cryptorank.io/coins/aztec1671431774571.png',
    status: 'Running',
    description: 'Aztec is a privacy-first Layer‑2 on Ethereum offering programmable, encrypted smart contracts via recursive zk‑ZK rollups and Noir.',
    guideLink: '',
  },
  {
    name: 'Gensyn',
    logo: 'https://pbs.twimg.com/profile_images/1893746041926885376/L-4D2qr9_400x400.jpg',
    status: 'Running',
    description: 'Gensyn is a decentralized ML compute protocol, connecting idle GPUs globally into verifiable, incentive-driven training networks.',
    guideLink: 'https://x.com/ProlinkMoon/status/1939854204434252080',
  },
  {
    name: 'Boundless',
    logo: 'https://pbs.twimg.com/profile_images/1917644023327498240/4Nt6GIFd_400x400.jpg',
    status: 'Running',
    description: 'Boundless is a universal protocol providing verifiable, ZK-powered compute across blockchains with incentivized provers.',
    guideLink: '',
  },
  {
    name: 'Succinctlabs',
    logo: 'https://avatars.githubusercontent.com/u/112135134?s=280&v=4',
    status: 'Running',
    description: 'Succinct builds a decentralized zkVM network enabling fast, cheap, and trustless proof generation for any chain.',
    guideLink: '',
  },
];


export default function IncentivizedTestnetSection() {
  return (
    <section className="w-full bg-black/80 py-24 px-4 rounded-2xl mt-0">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase text-gray-400 tracking-widest">Incentivized Testnet Node</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Trusted Operator Across Incentivized Testnets
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Supporting the most promising testnets with early infrastructure and technical guidance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testnets.map((net, index) => (
          <motion.div
            key={net.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-md hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={net.logo} alt={net.name} width={32} height={32} className="object-contain" />
              <h3 className="text-white text-lg font-semibold">{net.name}</h3>
            </div>
            <span className="text-xs font-mono text-green-400 bg-green-900/30 px-2 py-0.5 rounded">
              ● {net.status}
            </span>
            <p className="text-gray-400 text-sm mt-2">{net.description}</p>
            <a
              href={net.guideLink}
              target="_blank"
              className="inline-block mt-4 text-sm font-mono px-4 py-2 rounded border border-white/20 hover:border-white/40 transition bg-black text-white"
            >
              Guide ↗
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
