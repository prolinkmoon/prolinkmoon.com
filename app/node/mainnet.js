'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import MultiBlockHeight from "./BlockHeight";

const mainnets = [
  {
    name: 'Cosmos Hub',
    logo: '/networks/cosmos.svg',
    status: 'Active',
    uptime: '99.9%',
    stakeLink: '#',
    servicesLink: '#',
  },
  {
    name: 'Celestia',
    logo: '/networks/celestia.svg',
    status: 'Active',
    uptime: '99.95%',
    stakeLink: '#',
    servicesLink: '#',
  },
  {
    name: 'Neutron',
    logo: '/networks/neutron.svg',
    status: 'Active',
    uptime: '99.8%',
    stakeLink: '#',
    servicesLink: '#',
  },
];

export default function MainnetSection() {
  return (
    <section id="networks" className="w-full py-12 mt-24 px-4 bg-neutral-950/0 rounded-2xl text-white ">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mainnet Networks</h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Actively validating secure and high-availability mainnets — with services you can rely on.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mainnets.map((net, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md shadow-sm hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image src={net.logo} alt={net.name} width={28} height={28} />
              <h3 className="text-lg font-semibold">{net.name}</h3>
            </div>
            <p className="text-sm text-green-400 mb-1">Status: {net.status}</p>
            <p className="text-sm text-gray-300 mb-4">Uptime / SLA: {net.uptime}</p>
            <div className="flex gap-2">
              <a href={net.stakeLink} className="px-4 py-1.5 rounded-md text-sm font-medium bg-white/10 hover:bg-white/20 transition">
                Stake Now
              </a>
              <a href={net.servicesLink} className="px-4 py-1.5 rounded-md text-sm font-medium border border-white/20 hover:bg-white/10 transition">
                Services
              </a>
            </div>
          </motion.div>
        ))}
          </div>
          
        <div className="my-12 text-start p-2">
            <h3 className="text-xl font-bold text-white mb-2">Node info</h3>
            <MultiBlockHeight />
        </div>
          
 
      </section>
  );
}
