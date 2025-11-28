"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "@/assets/home/hero2.webp";
import {motion} from "framer-motion"

export default function CoursesHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center bg-[#fefdfb] overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 md:scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: `url('${img.src}')`,
        }}
      ></div>

      {/* Elegant overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00101010] via-[#00101070] to-[#001010A0]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 text-white">
        {/* Tagline */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
          data-aos="zoom-in"
        >
          {/* Teal dot (accent) */}
          <div className="w-2.5 h-2.5 bg-[#5ce2e7] rounded-full shadow-sm shadow-[#5ce2e780]" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#EAEAEA]">
            Courses
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-snug md:leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          data-aos="fade-up"
        >
          Explore <span className="text-[#b59659]"></span>{" "}
          <br className="hidden sm:block" />
          Workshops & Courses
        </h1>

        {/* Paragraph */}
        <p
          className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-100/90 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join our immersive professional teacher training courses — empowering educators with practical skills, hands-on workshops, and transformative learning experiences.
        </p>

       {/* Decorative Divider */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="w-24 h-1 mt-10 mx-auto bg-gradient-to-r from-[#b59659] via-[#5ce2e7] to-[#b49559] rounded-full"
             ></motion.div>
      </div>
    </section>
  );
}
