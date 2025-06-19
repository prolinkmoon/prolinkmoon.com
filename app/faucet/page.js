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
        'https://faucetlink.to/goerli',
        'https://faucet.matic.network',
        'https://www.allthatnode.com/faucet/ethereum.dsrv',
        'https://faucet.paradigm.xyz',
        'https://testnet.help/en/ethfaucet/goerli',
        'https://faucet.goerli.mudit.blog',
        'https://goerli-faucet.slock.it',
      ],
    },
    {
      title: 'Ethereum Holesky',
      links: [],
    },
    {
      title: 'Ethereum Sepolia',
      links: [],
    },
    {
      title: 'Optimism Goerli',
      links: [],
    },
    {
      title: 'Arbitrum Goerli',
      links: [],
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
