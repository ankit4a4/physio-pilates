"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "@/assets/founderbg.jpg";

export default function FounderHero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="relative min-h-[80vh] md:min-h-[80vh] flex items-center justify-center bg-[#fefdfb] overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 md:scale-100 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${img.src})`,
        }}
      ></div>

      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00101010] via-[#00101060] to-[#00101090]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 text-white">
        {/* Tagline */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
          data-aos="zoom-in"
        >
          <div className="w-2.5 h-2.5 bg-[#b59659] rounded-full shadow-sm shadow-[#b5965960]" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#EAEAEA]">
            Our Visionary
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-snug md:leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          data-aos="fade-up"
        >
          Meet Our <span className="text-[#b59659]">Founder</span>
        </h1>

        {/* Description */}
        <p
          className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-100/90 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover the story, vision, and dedication behind{" "}
          <br className="hidden sm:block" />
          <span className="text-[#b59659] font-semibold">
            Dr. Surbhi Silori Mishra
          </span>{" "}
          — empowering lives through movement, strength, and mindful healing.
        </p>

        {/* Divider */}
        <div
          className="w-20 h-1 mt-10 mx-auto bg-gradient-to-r from-[#b59659] to-[#b49559] rounded-full"
          data-aos="zoom-in"
          data-aos-delay="300"
        ></div>
      </div>
    </section>
  );
}
