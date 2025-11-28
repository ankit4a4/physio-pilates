"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import img from "@/assets/about/about-cta.webp"; // Replace with your desired image

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-2xl overflow-hidden border border-[#d0e7e7]">
        
        {/* Image Section with Teal Overlay */}
        <div
          className="relative h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img.src})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0BC3C3]/70 via-[#0BC3C3]/40 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative bg-white/90 py-16 px-8 sm:px-12 text-center md:text-left backdrop-blur-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold leading-snug"
          >
            <span className="bg-gradient-to-r from-[#0BC3C3] to-[#0A9E9E] bg-clip-text text-transparent">
              Rebuild • Recover • Rise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-700 mt-5 max-w-md md:max-w-lg mx-auto md:mx-0"
          >
            Heal your body with expert physiotherapy sessions crafted for you. 
            Empower your movement, restore balance, and experience a path to recovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/book-session"
              className="inline-block bg-gradient-to-r from-[#0BC3C3] to-[#0A9E9E] text-white font-semibold px-10 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Session
            </Link>
          </motion.div>

          {/* Decorative shimmer line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 h-[3px] bg-gradient-to-r from-[#0BC3C3] to-[#0A9E9E] mx-auto md:mx-0 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
