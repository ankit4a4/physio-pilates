'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import img1 from "@/assets/home/Hero1.jpg"
import img2 from "@/assets/home/Hero2.jpg"
import img3 from "@/assets/home/Hero3.jpg"
import img4 from "@/assets/home/Hero4.jpg"
import img5 from "@/assets/home/Hero5.jpg"
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
    title: 'Yoga For Body & Mind',
    subtitle: 'Enhance flexibility, balance and inner peace with our guided yoga sessions for all levels.',
    cta: 'Start Your Yoga Journey',
    image: img3.src,
  },
  {
    title: 'Dry Needling & Cupping Therapy',
    subtitle: 'Targeted relief from chronic pain, tension and muscle tightness using scientific deep-tissue therapy.',
    cta: 'Experience Relief',
    image: img4.src,
  },
  {
    title: 'Become a Certified Trainer',
    subtitle: 'Professional Instructor training courses in physiotherapy, pilates and yoga to build your healthcare career.',
    cta: 'Enroll Now',
    image: img5.src,
  },
];


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: any) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: any) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative h-screen  w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(167, 199, 231, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#b49559] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#8AB4D9] transition-all duration-300 shadow-lg"
                    >
                      {slides[currentSlide].cta}
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute hidden md:block left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#b49559] hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 hidden md:block md:right-8 top-1/2 -translate-y-1/2 bg-[#b49559] hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 z-10"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? 'bg-[#b49559] w-8'
              : 'bg-[#b49559]/50 hover:bg-white/70'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
