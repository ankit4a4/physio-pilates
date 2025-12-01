'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from "@/assets/home/hero3.jpg";
import img2 from "@/assets/home/hero2.jpg";
import img3 from "@/assets/home/hero1.jpg";
import Link from 'next/link';

const slides = [
  {
    title: 'Rebuild • Recover • Transform',
    subtitle: 'Advanced physiotherapy treatments to heal pain, restore strength and improve mobility naturally.',
    cta: 'Book Physiotherapy Session',
    image: img1.src,
  },
  {
    title: 'Strength Through Pilates',
    subtitle: 'Strengthen your core, improve posture and build a balanced body with personalised pilates training.',
    cta: 'Join Pilates Program',
    image: img2.src,
  },
  {
    title: 'Yog For Body & Mind',
    subtitle: 'Enhance flexibility, balance and inner peace with our guided Yog sessions for all levels.',
    cta: 'Start Your Yog Journey',
    image: img3.src,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
      position: "absolute"
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute"
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 1,
      position: "absolute"
    }),
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* 🔥 Top Gradient for Logo Visibility */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-[5]" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 60, damping: 20 },
          }}
          className="absolute inset-0"
        >

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">

                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-[#b49559] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
                    >
                      {slides[currentSlide].cta}
                    </motion.button>
                  </Link>
                </motion.div>

              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-20"
      >
        <ChevronLeft className="h-6 w-6 text-[#C49625]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden md:block right-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg z-20"
      >
        <ChevronRight className="h-6 w-6 text-[#C49625]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#b49559] w-8" : "bg-white w-3 opacity-70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
