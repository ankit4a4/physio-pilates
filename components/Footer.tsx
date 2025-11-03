import logo from "@/assets/logo2.png"
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#b49559] text-white/85 py-14 border-t border-white/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo + Text */}
          <div className="space-y-5">
            <Image src={logo.src} width={120} height={120} alt="Physio Pilates" className="w-32" />
            <p className="text-base leading-relaxed text-white">
              Transform your life through mindful movement, expert care & holistic healing.
            </p>

            <div className="space-y-2 text-sm text-white">
              <p className="flex items-center gap-2"><MapPin size={18} /> Mumbai, Maharashtra</p>
              <p className="flex items-center gap-2"><Phone size={18} /> +91 9876543210</p>
              <p className="flex items-center gap-2"><Mail size={18} /> info@physiopilates.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-2xl">Services</h3>
            <ul className="space-y-2">
              {["Physiotherapy", "Pilates", "Yoga", "Teacher Training"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition">
                    <ChevronRight size={18} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-2xl">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Gallery", "Contact", "Blog"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition">
                    <ChevronRight size={18} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-2xl">Follow Us</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition"><Instagram size={20} /> Instagram</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition"><Facebook size={20} /> Facebook</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition"><Linkedin size={20} /> LinkedIn</Link></li>
              <li><Link href="#" className="flex items-center gap-2 text-lg hover:text-white text-white  transition"><Youtube size={20} /> YouTube</Link></li>
            </ul>

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              className="flex items-center gap-2 bg-white text-[#b49559] font-medium rounded-full px-4 py-2 hover:bg-white/80"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm">
          <p className="text-white">
            © {currentYear} Physio Pilates. All rights reserved. | Powered by{" "}
            <Link href="https://rankmantra.com/" target="_blank" className=" underline hover:text-white transition">
              Rankmantra
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
