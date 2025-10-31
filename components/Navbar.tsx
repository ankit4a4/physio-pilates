'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Physiotherapy', href: '/physiotherapy' },
    { name: 'Pilates', href: '/pilates' },
    { name: 'Yoga', href: '/yoga' },
    { name: 'Dry Needling & Cupping', href: '/dry-needling-cupping' },
    { name: 'Teacher Training', href: '/teacher-training' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Disable scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-[100vw] z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-2 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src={Logo} 
              alt="Wellness Logo" 
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm  tracking-wide text-[#352C1C] hover:text-[#5CE2E7] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#352C1C] hover:text-[#5CE2E7] transition-colors"
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
                className="block text-base tracking-wide text-[#352C1C] hover:text-[#5CE2E7] transition-colors duration-300"
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
