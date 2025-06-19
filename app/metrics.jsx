'use client';

import { Rocket, Wrench, Users, Radar, Handshake, Network, BookOpen, Palette, ShieldCheck, Star, Send } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const metrics = [
  { icon: Rocket, label: 'Incentivized Testnets', value: 30 },
  { icon: Wrench, label: 'Community Tools', value: 8 },
  { icon: Handshake, label: 'Crypto Ambassador', value: 5 },
  { icon: Radar, label: 'Alpha Airdrops Tracked', value: 100 },
  { icon: Network, label: 'Network - Validator Node', value: 10 },
  { icon: BookOpen, label: 'valuable and insightful Twitter threads', value: 60 },
  { icon: Palette, label: 'Original and Unique Graphic Designs', value: 80 },
];


export default function ImpactMetrics() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}>
        Impact Metrics
      </motion.h2>
      <motion.p 
        className="text-gray-400 mb-10"
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.5 }}>
        A brief snapshot of our contributions across the Web3 ecosystem.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center bg-gradient-to-t from-neutral-900 via-zinc-800 to-neutral-900 rounded-xl p-6 shadow-md border border-white/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.4 }}>
            <metric.icon className="text-yellow-200 h-6 w-6 mb-2" />
            <h3 className="text-4xl font-extrabold text-yellow-200">
              <CountUp end={metric.value} duration={2} enableScrollSpy scrollSpyDelay={200} />+
            </h3>
            <p className="text-sm text-gray-400 mt-1">{metric.label}</p>
          </motion.div>
        ))}
          </div>
    </div>
  );
}
