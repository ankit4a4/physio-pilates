'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Our Journey to Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          From humble beginnings to becoming a trusted name in wellness, we’ve
          built our legacy on care, innovation, and expertise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/about/our-story">
            <button className="bg-[#b49559] hover:bg-[#a88a50] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg">
              Explore Our Story
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
