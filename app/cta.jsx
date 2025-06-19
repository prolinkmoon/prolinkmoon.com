'use client';

import { Rocket, Wrench, Users, Radar, ShieldCheck, Star, Twitter, Github, BookOpenText, Send } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const socials = [
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/prolinkmoon' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/prolinkmoonchannel' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/prolinkmoon' },
  { name: 'Docs', icon: BookOpenText, url: 'https://docs.prolinkmoon.xyz' },
];

export default function Cta() {
  return (
    <div className="max-w-6xl mx-auto text-center">
        <div className="mt-16 mb-10 max-w-xl mx-auto">
        {/* <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3> */}
        <div className="flex justify-center flex-wrap gap-4">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-500 text-gray-200 hover:bg-gray-900 hover:text-white font-mono text-sm transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
            >
              <social.icon className="h-4 w-4" />
              {social.name}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
