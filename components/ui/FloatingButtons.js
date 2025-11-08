// components/FloatingButtons.js
"use client";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-12 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919717505326?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        className="flex items-center gap-2 bg-[#25D366] text-white shadow-lg font-medium rounded-full px-4 py-2 hover:bg-[#20b85e] transition"
      >
        <MessageCircle size={20} /> Chat Us
      </Link>

      {/* Call Button */}
      <Link
        href="tel:+919717505326"
        className="flex items-center gap-2 bg-[#B49559] text-white shadow-lg font-medium rounded-full px-4 py-2 hover:bg-[#a6854f] transition"
      >
        <Phone size={20} /> Call Now
      </Link>
    </div>
  );
}
