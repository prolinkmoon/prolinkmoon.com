'use client'

import { useEffect, useState } from 'react'

const networks = [
  {
    name: 'Cosmos Hub',
    rpc: 'https://cosmos-rpc.publicnode.com/status',
  },
  {
    name: 'Celestia',
    rpc: 'https://celestia-rpc.publicnode.com/status',
  },
  {
    name: 'Neutron',
    rpc: 'https://neutron-rpc.polkachu.com/status',
  },
  // tambahkan network lainnya...
]

export default function MultiBlockHeight() {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchHeights = async () => {
      const newData = {}
      await Promise.all(
        networks.map(async (net) => {
          try {
            const res = await fetch(net.rpc)
            const json = await res.json()
            newData[net.name] = {
              height: json.result.sync_info.latest_block_height,
              version: json.result.node_info.version,
            }
          } catch (err) {
            newData[net.name] = {
              height: 'N/A',
              version: 'N/A',
            }
          }
        })
      )
      setData(newData)
    }

    fetchHeights()
    const interval = setInterval(fetchHeights, 10000) // update tiap 10 detik

    return () => clearInterval(interval)
  }, [])

    return (
    <div className="space-y-4 text-sm text-gray-300 mt-3 grid grid-cols-2 md:grid-cols-4 gap-6 ">
      {networks.map((net) => (
        <div key={net.name}>
          <p className="font-semibold text-white">{net.name}</p>
          <p>🧱 Block Height: <span className="font-mono text-white">{data[net.name]?.height || '...'}</span></p>
          <p>⚙️ Node Version: <span className="font-mono text-white">{data[net.name]?.version || '...'}</span></p>
        </div>
      ))}
    </div>
  )
}
