'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const images = [
  "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/4325460/pexels-photo-4325460.jpeg?auto=compress&cs=tinysrgb&w=1920",

];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animation without editing Tailwind config */}
      <style>
        {`
          @keyframes zoomAnim {
            0% { transform: scale(1); }
            100% { transform: scale(1.12); }
          }
          .zoom-bg {
            animation: zoomAnim 6s ease-in-out infinite alternate;
          }
        `}
      </style>

      <section className="relative md:py-0  min-h-screen flex items-center justify-center overflow-hidden">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />

        {/* Slideshow Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-[3000ms] zoom-bg"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />

        {/* Content */}
        <div className="relative z-[2] max-w-5xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl  md:mt-0 mt-20  tracking-wider leading-tight">
            Transform Your
            <span className="block text-[#5CE2E7]   mt-2">
              Wellness Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl   text-white/80 max-w-2xl mx-auto leading-relaxed mt-6">
            Experience premium Pilates, Yoga, and Physiotherapy in a serene,
            luxury environment designed for your transformation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10">
            <a
              href="#contact"
              className="group px-8 py-4 bg-[#5CE2E7] text-black text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2"
            >
              BOOK A SESSION
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-white text-white text-sm tracking-widest   hover:bg-white hover:text-black transition-all duration-500"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
