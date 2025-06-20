'use client';

import { motion } from 'framer-motion';

const testnets = [
  {
    name: 'Xion Testnet',
    logo: 'https://s3.coinmarketcap.com/static-gravity/image/89199b0d98a2491ca8c3baafbf07ae08.png',
    status: 'Active',
    description: 'The first modular chain for consumer apps powered by Cosmos stack.',
    guideLink: '/guides/xion',
  },
  {
    name: 'Avail Testnet',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/200x200/32376.png',
    status: 'Running',
    description: 'Data availability layer for next-gen modular blockchains and rollups.',
    guideLink: '/guides/avail',
  },
  {
    name: 'Berachain Artio',
    logo: 'https://cdn.prod.website-files.com/633c67ced5457aa4dec572be/67b845abe842d21521095c26_667ac3022260a22071b3cf37_u_b_f51944d0-b527-11ee-be26-a5e0a0cc15ce.png',
    status: 'Online',
    description: 'High-performance EVM chain with proof-of-liquidity consensus.',
    guideLink: '/guides/berachain',
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
