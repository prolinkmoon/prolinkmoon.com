'use client';
import { Rocket, Wrench, Users, Radar } from 'lucide-react';
import CountUp from 'react-countup';

export default function ImpactMetrics() {
  const metrics = [
    { icon: <Rocket className="text-yellow-300 h-6 w-6" />, label: 'Incentivized Testnets', value: 15 },
    { icon: <Wrench className="text-yellow-300 h-6 w-6" />, label: 'Community Tools Built', value: 8 },
    { icon: <Users className="text-yellow-300 h-6 w-6" />, label: 'Ambassador Roles', value: 5 },
    { icon: <Radar className="text-yellow-300 h-6 w-6" />, label: 'Alpha Airdrops Tracked', value: 100 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">Impact Metrics</h2>
      <p className="text-gray-400 mb-10">A brief snapshot of our contributions across the Web3 ecosystem.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2">{metric.icon}</div>
            <h3 className="text-4xl font-extrabold text-yellow-300">
              <CountUp end={metric.value} duration={2} />+
            </h3>
            <p className="text-sm text-gray-400 mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
