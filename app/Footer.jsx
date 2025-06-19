'use client';

import Link from 'next/link';
import { Twitter, Github, Send, BookOpenText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-gray-400 border-t border-white/10 py-14 px-4 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-base md:text-[15px] lg:text-[16px]">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold tracking-tight">Prolinkmoon</h2>
          <p className="mt-3 leading-relaxed text-gray-400">
            Web3 builder & contributor. Focused on infrastructure, tools, and alpha airdrop.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link href="/airdrop" className="hover:text-yellow-300 transition">Alpha Airdrops</Link></li>
            <li><Link href="/contribute" className="hover:text-yellow-300 transition">Validator Node</Link></li>
            <li><Link href="/tools" className="hover:text-yellow-300 transition">Faucet</Link></li>
            <li><Link href="/tools" className="hover:text-yellow-300 transition">Brigde</Link></li>          
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center space-x-5">
            <a href="https://twitter.com/prolinkmoon" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://t.me/prolinkmoonchannel" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <Send className="w-6 h-6" />
            </a>
            <a href="https://github.com/prolinkmoon" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://docs.prolinkmoon.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <BookOpenText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-600 border-t border-white/5 pt-6">
        © {new Date().getFullYear()} Prolinkmoon. All rights reserved.
      </div>
    </footer>
  );
}
