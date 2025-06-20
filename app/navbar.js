"use client";
import Link from "next/link";
import { useState } from "react";
//import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation items array
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Airdrops", href: "/airdrop" },
    { name: "Node & Validator", href: "/nodes" },
    { name: "Faucet", href: "/faucet" },
    { name: "Bridge", href: "/" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto sticky top-3 lg:px-8 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
        <Link href="/">
        <img
            src="/logo-2.png"
            width={42}
            height={42}
            alt="Prolinkmoon Logo"
        />
        </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-gray-900 font-bold text-xl pt-4 ps-4"
              >
                PROLINKMOON
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link onClick={() => {setIsMobileMenuOpen(false);}} href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <p>Follow us: </p>
                <div className="flex">              
                <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            >              
                <button className="cursor-pointer hover:text-blue-300 text-blue-400 ml-1 mt-1 rounded-md">
                <i className='bx bxl-twitter text-3xl '></i>
                </button>
                                  </a>
                                  <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            >              
                <button className="cursor-pointer hover:text-blue-300 text-black ml-1 mt-1 rounded-md">
                <i className='bx bxl-github text-3xl '></i>
                </button>
                              </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-300 hover:text-gray-400"
                >
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
            <li>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}