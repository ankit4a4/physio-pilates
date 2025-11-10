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
    <>
      <footer className="bg-[#FDFDFB] py-14 border-t border-white/20 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo + Text */}
            <div className="space-y-5">
              <Image
                src={logo.src}
                width={120}
                height={120}
                alt="Physio Pilates"
                className="w-32"
              />
              <p className="text-base leading-relaxed text-[#B49559]">
                Transform your life through mindful movement, expert care & holistic healing.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold text-xl">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/physiotherapy"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Physiotherapy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pilates"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Pilates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/dry-needling-and-cup-therapy"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Therapy
                  </Link>
                </li>
                  <li>
                  <Link
                    href="/services/yog"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} />Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teacher-training-courses"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Courses
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold text-xl">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blogs"
                    className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#B49559] transition"
                  >
                    <ChevronRight size={18} /> Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social + Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-xl text-black">Contact Us</h3>

              <div className="space-y-3 text-sm text-[#B49559]">
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> Mumbai, Maharashtra
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} /> +91 9717505326
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} /> info@physiopilates.com
                </p>
              </div>

              {/* Social Icons */}
              <ul className="flex items-center gap-5 pt-2">
                <li>
                  <Link
                    href="https://www.instagram.com/physiopilates" // update later
                    target="_blank"
                    className="text-[#B49559] hover:text-[#5CE2E7] transition"
                  >
                    <Instagram size={22} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/physiopilates" // update later
                    target="_blank"
                    className="text-[#B49559] hover:text-[#5CE2E7] transition"
                  >
                    <Facebook size={22} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/physiopilates" // update later
                    target="_blank"
                    className="text-[#B49559] hover:text-[#5CE2E7] transition"
                  >
                    <Linkedin size={22} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@physiopilates" // update later
                    target="_blank"
                    className="text-[#B49559] hover:text-[#5CE2E7] transition"
                  >
                    <Youtube size={22} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="py-6 h-16 bg-[#B49559] border-t border-white/20 text-center text-sm">
        <p className="text-white">
          © {currentYear} Physio Pilates. All rights reserved. | Powered by{" "}
          <Link
            href="https://rankmantra.com/"
            target="_blank"
            className="underline hover:text-white transition"
          >
            Rankmantra
          </Link>
        </p>
      </div>
    </>
  );
}
