'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    // { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Services', href: '/services' },
    { name: 'Physiotherapy', href: '/services/physiotherapy' },
    { name: 'Pilates', href: '/services/pilates' },
    { name: 'Yoga', href: '/services/yog' },
    { name: 'Therapy', href: '/services/dry-needling-and-cup-therapy' },
    { name: 'Courses', href: '/teacher-training-courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Wellness Logo" className="h-20 w-auto" priority />
          </Link>

        {/* Desktop Menu */}
<div className="hidden lg:flex items-center space-x-12">
  {navItems.map((item) => {
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        className={`group relative text-md font-semibold tracking-wide transition-all duration-300 pb-1
          ${
            scrolled
              ? isActive
                ? 'text-[#b49559]'
                : 'text-gray-700'
              : isActive
              ? 'text-[#b49559]'
              : 'text-white'
          }
          hover:text-[#b49559]
        `}
      >
        {item.name}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ease-in-out
            ${
              isActive
                ? 'w-full bg-[#b49559]'
                : 'w-0 bg-[#b49559] group-hover:w-full'
            }
          `}
        />
      </Link>
    );
  })}
</div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-[#b49559]' : 'text-white'
            } hover:text-[#b49559]`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-[#b49559] border-l-4 border-[#b49559] pl-2 font-medium'
                      : 'text-gray-700 hover:text-[#b49559]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
