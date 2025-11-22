"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "@/assets/home/HomeAbout1.jpg";
import img2 from "@/assets/home/homeAbout2.webp";
import img3 from "@/assets/home/HomeAbout3.webp";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
        className="py-8 md:py-24 bg-[#5CE2E7]/10"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side Text */}
          <div className="space-y-8" data-aos="fade-up">
            <div className="space-y-4" data-aos="zoom-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922]">
                <span className="text-sm font-medium tracking-widest text-[#b49559]">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#b49559] font-bold leading-tight">
                Physio • Pilates •{" "}
                <span className="text-[#b49559]">Wellness</span> Redefined
              </h2>
            </div>

            <div className="space-y-6 text-[#b49559]/80 leading-relaxed text-lg">
              <p
                className="bg-white/70 p-4 rounded-xl border border-[#b4955915]"
                data-aos="fade-up"
              > 
              <strong className="text-gray-600">
                Welcome to Physio Pilates - 
              </strong>
               <span className="text-gray-600 italic">
                   "The only centre in Delhi which provides combination of physiotherapy and pilates for the treatment."
                   </span>
              </p>
              <p data-aos="fade-up " className="text-gray-600">  
                We specialize in{" "}
                <strong className="text-gray-600">
                  Physiotherapy, Pilates, Yoga, Dry Needling & Cupping Therapy
                </strong>
                , offering personalised recovery & posture correction programs.
              </p>
              <p
                className="bg-[#b4955908] p-4 rounded-xl border border-[#b4955915] text-gray-600"
                data-aos="fade-up"
              >
                With expert care, we help you{" "}
                <strong className="text-gray-600">
                  feel better, move better & live better
                </strong>
                .
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-8 md:pt-8">
              {[
                ["800+", "Happy Patients"],
                ["20+", "Certified Experts"],
                ["10+", "Years Experience"],
              ].map(([num, text], i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  className="text-center p-4 rounded-2xl bg-white/60 border border-[#b4955920] shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#b49559] mb-2">
                    {num}
                  </div>
                  <div className="text-sm font-medium text-black tracking-wide">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Images */}
          <div
            className="relative flex items-center justify-center overflow-hidden h-[400px] sm:h-[500px] md:h-[600px]"
            data-aos="zoom-in"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#5ce2e733] to-[#b495590A] rounded-3xl -rotate-3 scale-105"></div>

            {/* Center Image (always visible, adjusts size on smaller screens) */}
            <div className="relative z-20 group">
              <Image
                src={img1.src}
                height={100}
                width={100}
                className="w-60 sm:w-72 md:w-80 lg:w-[400px] h-[340px] sm:h-[420px] md:h-[400px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                alt="Main Studio"
                data-aos="fade-up"
              />
            </div>

            {/* Hidden on mobile */}
            <div
              className="absolute left-4 md:left-8 top-8 z-30 group hidden sm:block"
              data-aos="zoom-in"
            >
              <Image
                height={180}
                width={100}
                src={img2.src}
                className="relative w-36 sm:w-44 md:w-48 h-52 sm:h-48 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform"
                alt="Pilates"
              />
            </div>

            {/* Hidden on mobile */}
            <div
              className="absolute right-4 md:right-8 bottom-8 z-30 group hidden sm:block"
              data-aos="zoom-in"
            >
              <Image
                src={img3.src}
                height={100}
                width={100}
                className="relative w-36 sm:w-44 md:w-48 h-52 sm:h-48 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform"
                alt="Rehab"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
