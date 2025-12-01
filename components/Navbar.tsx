'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// ▶️ ADD BOTH LOGOS HERE
import Logo1 from '@/assets/logo1.png'; // shown at top
import Logo2 from '@/assets/logo2.png'; // shown on scroll

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'About', href: '/about', hasDropdown: true },
    { name: 'Physiotherapy', href: '/services/physiotherapy' },
    { name: 'Pilates', href: '/services/pilates' },
    { name: 'Yog', href: '/services/yog' },
    // { name: 'Therapy', href: '/services/dry-needling-and-cup-therapy' },
    { name: 'Courses', href: '/teacher-training-courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const aboutSubItems = [
    { name: 'Dr Surbhi Silori Mishra', href: '/Dr-Surbhi-Silori-Mishra' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-[999] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-32">
          
          {/* ▶️ LOGO SWITCH HERE */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={scrolled ? Logo2 : Logo1}
              alt="Wellness Logo"
              className="h-24 sm:h-32 w-auto transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.hasDropdown) {
                return (
                  <div key={item.name} className="relative group">
                    <div className="flex items-center gap-2">
                      <Link
                        href={item.href}
                        className={`text-md font-semibold tracking-wide transition-all duration-300 pb-1 flex items-center gap-2 ${
                          scrolled
                            ? isActive
                              ? 'text-[#b49559]'
                              : 'text-gray-700'
                            : isActive
                            ? 'text-[#b49559]'
                            : 'text-white'
                        } hover:text-[#b49559]`}
                      >
                        {item.name}
                      </Link>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 group-hover:-rotate-180`}
                      />
                    </div>

                    <div className="absolute left-0 top-full mt-2 bg-[#b49559] shadow-md rounded-lg py-2 min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {aboutSubItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-white text-sm whitespace-nowrap"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-md font-semibold tracking-wide transition-all duration-300 pb-1 ${
                    scrolled
                      ? isActive
                        ? 'text-[#b49559]'
                        : 'text-gray-700'
                      : isActive
                      ? 'text-[#b49559]'
                      : 'text-white'
                  } hover:text-[#b49559]`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'w-full bg-[#b49559]'
                        : 'w-0 bg-[#b49559] group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsOpen((s) => !s);
              if (isOpen) setIsAboutOpenMobile(false);
            }}
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
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              if (item.hasDropdown) {
                return (
                  <div key={item.name}>	10
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsAboutOpenMobile(false);
                        }}
                        className={`text-base font-medium ${
                          isActive ? 'text-[#b49559]' : 'text-gray-700 hover:text-[#b49559]'
                        }`}
                      >
                        {item.name}
                      </Link>

                      <button
                        onClick={() => setIsAboutOpenMobile((s) => !s)}
                        className="p-2"
                      >
                        <ChevronDown
                          className={`transition-transform duration-200 ${
                            isAboutOpenMobile ? 'rotate-180' : ''
                          }`}
                          size={18}
                        />
                      </button>
                    </div>

                    {isAboutOpenMobile && (
                      <div className="ml-4 mt-2 space-y-2">
                        {aboutSubItems.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsAboutOpenMobile(false);
                            }}
                            className="block text-sm text-gray-600 hover:text-[#b49559]"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-[#b49559] border-l-4 border-[#b49559] pl-2 font-medium'
                      : 'text-gray-700 hover:text-[#b49559]'
                  }`}
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
