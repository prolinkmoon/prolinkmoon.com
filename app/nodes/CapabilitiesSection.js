'use client';

import {
  ServerCog,
  Users,
  ShieldCheck,
  BellRing,
  Network as NetworkIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import '../globals.css';

const logos = [
  '/icons/ubuntu.svg',
  '/icons/docker.svg',
  '/icons/kubernetes.svg',
  '/icons/ansible.svg',
  '/icons/github.svg',
  '/icons/nginx.svg',
  '/icons/prometheus.svg',
  '/icons/grafana.svg',
  '/icons/python.svg',
  '/icons/rust.svg',
  '/icons/ts.svg',
  '/icons/go.svg',
  '/icons/aws.svg',
  '/icons/do.svg',
  '/icons/vultr.svg',
  '/icons/contabo.svg',
];

export default function CapabilitiesSection() {
  const capabilities = [
    {
      title: 'Infra Services',
      desc: 'RPC, Snapshot, StateSync, API — flexible infra built to scale from testnet to mainnet.',
      icon: <ServerCog className="w-6 h-6 text-yellow-300" />,
    },
    {
      title: 'Community + Governance',
      desc: 'Boosting ecosystems with support, governance participation, and education.',
      icon: <Users className="w-6 h-6 text-green-300" />,
    },
    {
      title: 'DevOps Engineer',
      desc: 'Mastery in automation, containerization, CI/CD, cloud infra, monitoring — the full DevOps spectrum.',
      icon: (
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex gap-4 items-center">
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain opacity-80 hover:opacity-100 transition-transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Security-First Approach',
      desc: 'SecOps baked into infra: hardened servers, automated failovers, firewall layers, and secrets management.',
      icon: <ShieldCheck className="w-6 h-6 text-red-300" />,
    },
    {
      title: 'Slashing Protection & Monitoring',
      desc: 'Real-time alerts, slash-safe automation, and downtime prevention — stay online and out of trouble.',
      icon: <BellRing className="w-6 h-6 text-pink-300" />,
    },
    {
      title: 'Multi-Chain Coverage',
      desc: 'Supporting EVM, Cosmos-SDK, Substrate, Solana, and more — all with dedicated infra pipelines.',
      icon: <NetworkIcon className="w-6 h-6 text-teal-300" />,
    },
  ];

  return (
    <section className="w-full bg-black/20 py-24 px-4 rounded-2xl mt-32">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm uppercase text-gray-400 tracking-widest">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
          Modular Infra, Battle-tested Ops.
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Validator-ready infra. We automate the hard stuff — deployments, failovers, observability — so you can scale across chains with confidence.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:border-white/20 transition-all"
          >
            <div className="mb-4">
              {typeof item.icon === 'string' ? (
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <img src={item.icon} alt={item.title} className="w-6 h-6" />
                </div>
              ) : (
                item.icon
              )}
            </div>
            <h3 className="text-white font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
