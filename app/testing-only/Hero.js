'use client';
import Link from "next/link";
import Footer from "@/app/Footer";
import ImpactMetrics from "@/app/metrics";
import { MoveDown } from 'lucide-react';


export default function Hero() {
  return (
<section
  id="Hero"
  className=" relative pb-10 pt-10 md:pt-8 xl:pt-22 w-full h-screen bg-gradient-to-b from-neutral-950 via-zinc-700 to-neutral-900 overflow-hidden px-6"
      >
  {/* Glow + Logo Background */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[60vw] max-w-[500px] pointer-events-none z-0">
    <div className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse bg-gradient-to-tr from-[#E5E4E2] via-gray-400 to-black" />
    <img
      src="/prolinkmoon-big-logo.png"
      alt="Prolinkmoon Logo Glow"
      className="relative z-10 w-full object-contain opacity-30 brightness-75"
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto pt-40 pb-20">
    <h1 className="text-[clamp(0.75rem,3.5vw,1.8rem)] w-max text-gray-900 font-extrabold bg-gradient-to-r from-blue-200 via-white to-yellow-200">
      PROLINKMOON IS
    </h1>

    <h2 className="text-[clamp(2rem,8vw,6rem)] leading-none m-0 p-0 font-extrabold text-gray-100">
      WEB3 <span className="font-light text-gray-400">Builder</span>
    </h2>
    <h2 className="text-[clamp(2rem,8vw,6rem)] leading-none m-0 p-0 font-extrabold text-gray-100">
      WEB3 <span className="font-light text-gray-400">Contributor</span>
    </h2>
    <h2 className="text-[clamp(2rem,8vw,6rem)] leading-none m-0 p-0 font-extrabold text-gray-100">
      WEB3 <span className="font-light text-gray-400">Researcher</span>
    </h2>

    <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
      I operate blockchain nodes, build community-tools, and share alpha for crypto-native users. Let’s build a better decentralized world.
    </p>

    <div className="mt-5">
      <a
        href="#card-1"
        className="flex w-max px-4 py-2 gap-1.5 text-sm font-mono rounded-sm border border-white/30 hover:border-white/50 bg-black text-white cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#card-1").scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore What I Do <MoveDown size={18} />
      </a>
    </div>
</div>
</section>

  );
}



