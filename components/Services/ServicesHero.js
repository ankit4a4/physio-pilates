"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesHero({ service }) {
  if (!service) return null;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
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
          backgroundImage: `url(${service.mainimg?.src || ""})`,
        }}
      ></div>

      {/* Elegant overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00101010] via-[#00101038] to-[#00101060]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 text-white">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
        >
          <div className="w-2.5 h-2.5 bg-[#b59659] rounded-full shadow-sm shadow-[#5CE2E760]" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#EAEAEA]">
            Our Service
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-snug md:leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
        >
          {service.title.includes("&") ? (
            <>
              {service.title.split("&")[0]}{" "}
              <span className="text-[#b59659]">&</span>
              {service.title.split("&")[1]}
            </>
          ) : (
            <>
              {service.title.split(" ")[0]}{" "}
              <span className="text-[#b59659]">
                {service.title.split(" ").slice(1).join(" ")}
              </span>
            </>
          )}
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-100/90 leading-relaxed"
        >
          {service.heroDescription ||
            "Personalized, science-backed care tailored to your unique recovery and wellness goals."}
        </motion.p>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-20 h-1 mt-10 mx-auto bg-gradient-to-r from-[#b59659] to-[#b49559] rounded-full"
        ></motion.div>
      </div>
    </section>
  );
}
