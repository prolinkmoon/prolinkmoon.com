// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarCode from "./navbar.js";
// import Link from "next/link";

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
})

export const metadata = {
  title: 'Prolinkmoon | Web3 Infra & Alpha Hub',
  description: 'Prolinkmoon operates blockchain nodes, builds community tools, and shares alpha insights for crypto-native users. Node operator, builder, researcher — all in one.',
  keywords: [
    'Prolinkmoon', 'web3 builder', 'crypto nodes', 'airdrops', 'alpha crypto', 'alpha airdrop','validator', 'crypto tools',
    'Cosmos testnet', 'Polkadot validator', 'decentralized infrastructure', 'crypto devops'
  ],
  authors: [{ name: 'Prolinkmoon', url: 'https://prolinkmoon.com' }],
  openGraph: {
    title: 'Prolinkmoon | Web3 Infra & Alpha Hub',
    description: 'Decentralized node infrastructure, community-first tools, and curated crypto alpha. This is Prolinkmoon.',
    url: 'https://prolinkmoon.com',
    siteName: 'Prolinkmoon',
    images: [
      {
        url: 'https://prolinkmoon.com/Prolinkmoon.png',
        width: 700,
        height: 600,
        alt: 'Prolinkmoon OG Image'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prolinkmoon | Web3 Infra & Alpha Hub',
    description: 'Follow Prolinkmoon — from DevOps Engineer to alpha airdrop strategies.',
    creator: '@ProlinkMoon', 
    images: ['https://prolinkmoon.com/Prolinkmoon.png'],
  },
  metadataBase: new URL('https://prolinkmoon.com'),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        < NavbarCode />
        {children}
      </body>
    </html>
  );
}
