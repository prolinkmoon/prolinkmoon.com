'use client';
import Image from 'next/image';

export default function AnimatedBlock() {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[646/290]">
      {/* Responsive Image */}
      <Image
        src="/bloc.png"
        alt="Block Diagram"
        fill
        className="object-contain"
        priority
      />

      {/* Animated Labels */}
      <span className="absolute top-[14%] left-[6%] text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white animate-float">
        CPU
      </span>

      <span className="absolute top-[5%] left-[42%] text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white animate-fade delay-200">
        optimized
      </span>

      <span className="absolute top-[35%] left-[32%] text-[9px] sm:text-xs md:text-sm lg:text-base font-medium text-white animate-float delay-300">
        Build. Deploy. <span className="italic font-semibold">Scale Up.</span>
      </span>

      <span className="absolute top-[75%] left-[65%] text-[10px] sm:text-xs md:text-sm lg:text-base font-bold text-white animate-fade delay-500">
        vRAM
      </span>

      <span className="absolute top-[18%] left-[54%] text-[8px] sm:text-[10px] md:text-xs text-white animate-fade delay-700 whitespace-nowrap">
        Apps and Cost
      </span>
    </div>
  );
}
