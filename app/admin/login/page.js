// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminLogin() {
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const login = async () => {
//     const res = await fetch('/api/admin/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ password })
//     });

//     if (res.ok) {
//       router.push('/admin');
//     } else {
//       alert('Wrong password');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-neutral-950">
//       <div className="bg-white p-6 rounded w-80">
//         <h1 className="text-xl font-bold mb-4">Admin Login</h1>
//         <input
//           type="password"
//           placeholder="Admin password"
//           className="w-full border p-2 mb-3"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           onClick={login}
//           className="w-full bg-black text-white py-2 rounded"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function login() {
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setError("Wrong password");
      return;
    }

    router.replace("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-neutral-900 p-6 rounded w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          type="password"
          placeholder="Admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 bg-black border border-white/10 rounded"
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={login}
          className="w-full bg-blue-600 py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
