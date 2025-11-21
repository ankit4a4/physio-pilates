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
  MapPinned,
  Phone,
  Mail,
} from "lucide-react";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#FDFDFB] py-16 border-t font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <p className="text-base leading-relaxed text-[#7A623B]">
                Transform your life through mindful movement, expert care & holistic healing.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold text-xl">Services</h3>
              <ul className="space-y-2">
                {[
                  { name: "Physiotherapy", link: "/services/physiotherapy" },
                  { name: "Pilates", link: "/services/pilates" },
                  { name: "Therapy", link: "/services/dry-needling-and-cup-therapy" },
                  { name: "Yoga", link: "/services/yog" },
                  { name: "Courses", link: "/teacher-training-courses" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#7A623B] transition"
                    >
                      <ChevronRight size={20} strokeWidth={2.5} /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-black font-semibold text-xl">Company</h3>
              <ul className="space-y-2">
                {[
                  { name: "About Us", link: "/about" },
                  { name: "Gallery", link: "/gallery" },
                  { name: "Contact", link: "/contact" },
                  { name: "Blog", link: "/blogs" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      className="flex items-center gap-2 text-lg hover:text-[#5CE2E7] text-[#7A623B] transition"
                    >
                      <ChevronRight size={20} strokeWidth={2.5} /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h3 className="font-semibold text-xl text-black">Contact Us</h3>

          <div className="space-y-4 text-sm text-[#7A623B]">
  <p className="flex items-start gap-3">
    <span className="w-5 h-5 flex items-center justify-center mt-3">
      <MapPinned size={20} strokeWidth={2.2} className="text-[#7A623B]" />
    </span>
    LGF Left side, D--768, opp. market no-2, Block D, Chittaranjan Park, New Delhi 110019
  </p>

  <p className="flex items-center gap-3">
    <Phone size={18} strokeWidth={2.7} className="text-[#7A623B]" />
    +91 9717505326
  </p>

  <p className="flex items-center gap-3">
    <Mail size={18} strokeWidth={2.7} className="text-[#7A623B]" />
    physiopilates.12082022@gmail.com
  </p>
</div>


              {/* Social Icons */}
              <ul className="flex items-center gap-5 pt-2">
                <li>
                  <Link
                    href="https://www.instagram.com/pphysiopilates"
                    target="_blank"
                    className="text-[#7A623B] hover:text-[#5CE2E7] transition"
                  >
                    <Instagram size={24} strokeWidth={2.5} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-[#7A623B] hover:text-[#5CE2E7] transition"
                  >
                    <Facebook size={24} strokeWidth={2.5} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    className="text-[#7A623B] hover:text-[#5CE2E7] transition"
                  >
                    <Linkedin size={24} strokeWidth={2.5} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="text-[#7A623B] hover:text-[#5CE2E7] transition"
                  >
                    <Youtube size={24} strokeWidth={2.5} />
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

      <div className="py-6 h-16 bg-[#B49559] text-center text-sm">
        <p className="text-white">
          © {currentYear} Physio Pilates. All rights reserved. | Powered by{" "}
          <Link href="https://rankmantra.com/" target="_blank" className="underline">
            Rankmantra
          </Link>
        </p>
      </div>
    </>
  );
}
