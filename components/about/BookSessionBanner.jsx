"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import img from "../../assets/about/about-cta.jpeg"

export default function BookSessionBanner() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#faf9f6] to-[#f2eee8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center rounded-3xl shadow-2xl my-20 overflow-hidden border border-[#e5decf]">
        {/* Image Section */}
        <div
          className="relative h-[350px] md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${img.src})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#b49559]/70 via-[#b49559]/40 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative bg-gradient-to-br from-[#fffaf4] to-[#f7f3ea] py-16 px-8 sm:px-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold leading-snug"
          >
            <span className="bg-gradient-to-r from-[#b49559] to-[#d4b982] bg-clip-text text-transparent">
              Rebuild • Recover • Rise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#5a5a5a] mt-5 max-w-md md:max-w-lg mx-auto md:mx-0"
          >
            Heal your body with expert physiotherapy sessions crafted for you.
            Empower your movement, restore balance, and experience a golden path
            to recovery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="/book-session"
              className="inline-block bg-gradient-to-r from-[#b49559] to-[#d4b982] text-white font-semibold px-10 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book Your Session
            </Link>
          </motion.div>

          {/* Decorative shimmer line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 h-[3px] bg-gradient-to-r from-[#b49559] to-[#d4b982] mx-auto md:mx-0 rounded-full"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
