'use client';

import '../globals.css';

const bridges = [
  {
    name: 'Hyperlane',
    logo: 'https://cdn.prod.website-files.com/6686ac1afeef42fcf1929457/680686f7428f7fed4a224c85_Hyperlane_OG_SEO.png',
    url: 'https://www.hyperlane.xyz/',
  },
  {
    name: 'Bungee',
    logo: 'https://pitchtalk.com/_next/image?url=https%3A%2F%2Fipfs.pitchtalk.com%2Fipfs%2Fbafkreiaszrezw6rshlfwianbbv6gb2e4r6d255vpfo745l6m37a73lemzy&w=3840&q=75',
    url: 'https://www.bungee.exchange/',
  },
  {
    name: 'Squid',
    logo: 'https://pbs.twimg.com/profile_images/1548647667135291394/W2WOtKUq_400x400.jpg',
    url: 'https://www.squidrouter.com/',
  },
  {
    name: 'Jumper Exchange',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFZUCBGAAi6sQ/company-logo_200_200/B4DZdA4LMAHMAM-/0/1749140157557/jumper_exchange_logo?e=2147483647&v=beta&t=r1Cd5_Cp1OBEyf_s7YrSwmv9PVi6A10Wf60iuA3AzkE',
    url: 'https://jumper.exchange/',
  },
  {
    name: 'Zapper',
    logo: 'https://blog.pintu.co.id/wp-content/uploads/2024/06/zapper-crypto.jpg',
    url: 'https://zapper.xyz/',
  },
  {
    name: 'LayerSwap',
    logo: 'https://layerswap.us/682b360f1c267b1f70b22cce_LayerSwap.png',
    url: 'https://www.layerswap.io/',
  },
  {
    name: 'Metamask',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png',
    url: 'https://metamask.io/',
  },
  {
    name: 'Slingshot',
    logo: 'https://play-lh.googleusercontent.com/PaWLY4S_ROtgCAdWBVnfkUTg6lKfcuNrxockd8nQDqMYYXeeNbPwVkpzM2V-sSQWTA',
    url: 'https://slingshot.finance/',
  },
  {
    name: 'Mayan Finance',
    logo: 'https://developers.moralis.com/wp-content/uploads/web3wiki/1222-mayan-finance/6397dd741e7525e75aba1668_76DYsZOo1DghklZzF0RovYXHGZBjaxyCUWss8LPIOB4-300x300.png',
    url: 'https://www.mayan.finance/',
  },
  {
    name: 'Li.Fi',
    logo: 'https://li.fi/logo192.png',
    url: 'https://li.fi/',
  },
  {
    name: 'Rainbow',
    logo: 'https://developers.moralis.com/wp-content/uploads/2023/11/Rainbow.png',
    url: 'https://rainbow.me/',
  },
  {
    name: 'Zerion',
    logo: 'https://play-lh.googleusercontent.com/lxl3CQLYmbY7kHtMn3ehz06ebEIIxYOETf8hlWPNW6L3ZPxuhSrnIq-4k5T89gd4gA',
    url: 'https://zerion.io/',
  },
];

export default function BridgeShowcase() {
  return (
    <div className="absolute top-0 min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-neutral-900 py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-400 uppercase tracking-widest">Bridge Showcase</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
          Your bridge activity builds your on-chain rep.
        </h1>
        <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Some of them may reward it. Just saying. 👀
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {bridges.map((bridge, index) => (
          <a
            key={index}
            href={bridge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg p-4 bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition hover:scale-105 flex flex-col items-center justify-center"
          >
            <img
              src={bridge.logo}
              alt={bridge.name}
              className="w-12 h-12 object-contain mb-2 grayscale group-hover:grayscale-0 transition"
            />
            <p className="text-white text-sm text-center">{bridge.name}</p>
          </a>
        ))}
      </div>
      </div>
  );
}
