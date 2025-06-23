'use client';
import { useState } from 'react';
import Footer from '../Footer';

export default function FaucetPage() {
  const [openIndex, setOpenIndex] = useState(0);

 const faucetData = [
  {
    title: 'Ethereum Goerli',
    links: [
      'https://goerlifaucet.com',
      'https://faucet.quicknode.com/ethereum/goerli',
      'https://faucet.paradigm.xyz',
      'https://www.alchemy.com/faucets/ethereum-goerli',
      'https://testnet.help/en/ethfaucet/goerli',
      'https://faucet.mudit.blog',
    ],
  },
  {
    title: 'Ethereum Holesky',
    links: [
      'https://faucet.quicknode.com/ethereum/holesky',
      'https://faucet.allthatnode.com/holesky.dsrv',
      'https://faucet.p2p.org/holesky',
    ],
  },
  {
    title: 'Ethereum Sepolia',
    links: [
      'https://sepoliafaucet.com',
      'https://faucet.quicknode.com/ethereum/sepolia',
      'https://faucet.paradigm.xyz',
      'https://www.alchemy.com/faucets/ethereum-sepolia',
    ],
  },
  {
    title: 'Optimism Goerli',
    links: [
      'https://faucet.quicknode.com/optimism/goerli',
      'https://www.alchemy.com/faucets/optimism-goerli',
    ],
  },
  {
    title: 'Arbitrum Goerli',
    links: [
      'https://faucet.quicknode.com/arbitrum/goerli',
      'https://www.alchemy.com/faucets/arbitrum-goerli',
    ],
  },
  {
    title: 'Polygon Mumbai Testnet',
    links: [
      'https://faucet.quicknode.com/polygon/mumbai',
      'https://faucet.polygon.technology',
      'https://www.alchemy.com/faucets/polygon-mumbai',
    ],
  },
  {
    title: 'BNBChain Testnet',
    links: [
      'https://testnet.binance.org/faucet-smart',
      'https://faucet.quicknode.com/bsc/testnet',
      'https://faucet.testnet.binance.org',
    ],
  },
  {
    title: 'StarkNet Goerli',
    links: [
      'https://faucet.starknet.io',
      'https://faucet.goerli.starknet.io',
    ],
  },
  {
    title: 'Gnosis (xDAI)',
    links: [
      'https://faucet.chiadochain.net',
      'https://gnosisfaucet.com',
    ],
  },
  {
    title: 'Fantom Testnet',
    links: [
      'https://faucet.fantom.network',
      'https://fantomscan.org/faucet',
    ],
  },
  {
    title: 'Avalanche Testnet',
    links: [
      'https://faucet.avax.network',
      'https://faucet.quicknode.com/avalanche/fuji',
    ],
  },
  {
    title: 'Aptos Testnet',
    links: [
      'https://faucet.triangleplatform.com/aptos',
    ],
  },
  {
    title: 'Solana Testnet',
    links: [
      'https://faucet.triangleplatform.com/solana',
    ],
  },
  {
    title: 'Near Testnet',
    links: [
      'https://faucet.triangleplatform.com/near',
    ],
  },
  {
    title: 'Babylon Testnet',
    links: [
      'https://faucet.babylonchain.io',
    ],
  },
  {
    title: 'Xion Testnet',
    links: [
      'https://faucet.xion.burnt.com',
      'https://discord.gg/burnt (via #faucet channel)',
    ],
  },
  {
    title: 'Sei Testnet',
    links: [
      'https://faucet.atlantic-2.sei.io',
      'https://faucetme.pro',
      'https://www.allthatnode.com/faucet/sei.dsrv',
    ],
  },
  {
    title: 'Bitcoin Testnet',
    links: [
      'https://bitcoinfaucet.uo1.net',
      'https://testnet-faucet.com/btc-testnet',
      'https://testnet.help/en/btcfaucet/testnet3',
      'https://coinfaucet.eu/en/btc-testnet/',
    ],
  },
];


  return (
    <>
      {/* Background Layer Behind Navbar */}
      <div className="fixed top-0 left-0 w-full h-full z-[-10] bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900"></div>

      {/* Main Content with Padding to Avoid Overlap with Navbar */}
      <main className="min-h-screen pt-32 text-gray-100">
        <div className="max-w-3xl mx-auto px-4 md:px-0">
          <h1 className="text-2xl font-bold mb-8 text-center">
            <span role="img" aria-label="faucet">⛽</span>{' '}
            <span className="bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-200 bg-clip-text text-transparent">
              Faucet Bookmarks
            </span>
          </h1>

          {faucetData.map((item, index) => (
            <div
              key={item.title}
              className="mb-4 border border-white/10 rounded-md bg-neutral-900"
            >
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold text-base md:text-lg hover:bg-neutral-800 transition"
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              >
                {item.title}
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>

              {openIndex === index && (
                <ul className="px-5 pb-4 space-y-2 list-disc text-sm text-gray-300">
                  {item.links.length > 0 ? (
                    item.links.map((link) => (
                      <li key={link}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white underline underline-offset-2"
                        >
                          {link}
                        </a>
                      </li>
                    ))
                  ) : (
                    <p className="italic text-gray-500">No links added yet.</p>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
