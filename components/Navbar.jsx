"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiMoon, FiDownload } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contacts", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-6 left-0 w-full flex justify-between items-center px-8 lg:px-16 z-50 pointer-events-none">
      
      {/* Logo */}
      <div className="flex-1 flex items-center pointer-events-auto">
        <Link href="/" className="text-2xl font-black tracking-wider text-white hover:opacity-80 transition-opacity" onClick={closeMenu}>
          NK
        </Link>
      </div>

      {/* Center Navigation Pill */}
      <div className="relative pointer-events-auto">
        <div className="flex items-center gap-2 md:gap-4 bg-black/20 border border-white backdrop-blur-md rounded-full p-1.5 shadow-lg">
          
          {/* Dark Mode Toggle (Placeholder) */}
          <button className="p-2.5 rounded-full hover:bg-white hover:text-black text-white/70 transition-colors" aria-label="Toggle Dark Mode">
            <FiMoon size={18} />
          </button>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.path 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-white/70 hover:text-black hover:bg-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden p-2.5 rounded-full hover:bg-white/10 text-white transition-colors" aria-label="Toggle menu">
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div className={`absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl p-2 shadow-xl transition-all duration-300 origin-top ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"} lg:hidden`}>
          <ul className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.path ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Action Button */}
      <div className="flex-1 flex justify-end pointer-events-auto hidden sm:flex">
        <a 
          href="#" 
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/50 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md shadow-lg"
        >
          Download CV
          <FiDownload size={16} />
        </a>
      </div>

    </header>
  );
}
