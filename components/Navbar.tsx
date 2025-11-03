'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className={`fixed py-2 top-0 w-[100vw] z-50 transition-all duration-300 
      ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100" : "bg-transparent"}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Wellness Logo" className="h-20 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 
                  ${scrolled ? "text-[#b49559]" : "text-white"} 
                  hover:text-[#5CE2E7]`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 
              ${scrolled ? "text-[#b49559]" : "text-white"} 
              hover:text-[#5CE2E7]`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base tracking-wide text-[#b49559] hover:text-[#5CE2E7] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
