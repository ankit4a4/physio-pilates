"use client";

import logo from "@/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,

} from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#B49559] font-sans text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo + Text */}
          <div className="space-y-4">
            <Image
              src={logo.src}
              width={120}
              height={120}
              alt="Physio Pilates"
              className="sm:h-40 h-36 w-auto"
            />
            <p className="text-base leading-relaxed">
              Transform your life through mindful movement, expert care & holistic healing.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Services</h3>
            <ul className="space-y-2">
              {["Physiotherapy", "Pilates", "Yog", "Courses"].map((name, i) => (
                <li key={i}>
                  <Link
                    href={`/services/${name.toLowerCase()}`}
                    className="flex items-center gap-2 text-base hover:text-[#5CE2E7] transition"
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Gallery", "Contact", "Blog"].map((name, i) => (
                <li key={i}>
                  <Link
                    href={`/${name.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center gap-2 text-base hover:text-[#5CE2E7] transition"
                  >
                    <ChevronRight size={20} strokeWidth={2.5} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="font-semibold text-xl">Contact Us</h3>
            <div className="space-y-4 text-base">
              <p className="flex items-start gap-3">
                <MapPin size={20} strokeWidth={2.2} className="flex-shrink-0 lg:mt-6 " />
                LGF Left side, D--768, opp. market no-2, Block D, Chittaranjan Park, New Delhi 110019
              </p>
              <p className="flex items-center gap-3">
                <Phone size={20} strokeWidth={2.5} className="flex-shrink-0" />
                +91 9717505326
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} strokeWidth={2.5} className="flex-shrink-0" />
                physiopilates.12082022@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            <ul className="flex items-center gap-5 pt-2">
              <li>
                <Link href="https://www.instagram.com/pphysiopilates" target="_blank" className="hover:text-[#5CE2E7] transition">
                  <Instagram size={24} strokeWidth={2.5} />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com" target="_blank" className="hover:text-[#5CE2E7] transition">
                  <Facebook size={24} strokeWidth={2.5} />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/" target="_blank" className="hover:text-[#5CE2E7] transition">
                  <Linkedin size={24} strokeWidth={2.5} />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/" target="_blank" className="hover:text-[#5CE2E7] transition">
                  <Youtube size={28} strokeWidth={2.5} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 pt-6 border-t border-white text-center">
          <p className="text-sm">
            © {currentYear} Physio Pilates. All rights reserved. | Powered by{" "}
            <Link href="https://rankmantra.com/" target="_blank" className="underline">
              Rankmantra
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
