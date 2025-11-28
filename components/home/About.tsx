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
      className="relative py-16 md:py-28 bg-[#5CE2E7] overflow-hidden"
      data-aos="fade-up"
    >
      {/* Soft white glow top wave */}
      <div className="absolute top-0 left-0 w-full h-32 bg-white/20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT TEXT SIDE */}
          <div className="space-y-10" data-aos="fade-up">

            {/* TAG + HEADING */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm">
                <span className="text-sm font-medium tracking-[0.2em] text-white text-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                Physio • Pilates • Wellness Redefined
              </h2>
            </div>

            {/* PARAGRAPHS */}
            <div className="space-y-6 text-white leading-relaxed text-lg text-shadow-[0_1px_6px_rgba(0,0,0,0.25)]">
              <p
                className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-md shadow-md"
                data-aos="fade-up"
              >
                <strong className="text-white">Welcome to Physio Pilates —</strong>{" "}
                <span className="italic text-white/90">
                  "The only centre in Delhi offering physiotherapy + pilates combined treatments."
                </span>
              </p>

              <p data-aos="fade-up" className="text-white">
                We specialize in{" "}
                <strong className="text-[#ffffff]">
                  Physiotherapy, Pilates, Yoga, Dry Needling & Cupping Therapy
                </strong>{" "}
                providing personalized posture and recovery programs.
              </p>

              <p
                className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-md shadow-md"
                data-aos="fade-up"
              >
                With expert care, we help you{" "}
                <strong className="text-white">
                  feel better, move better & live better
                </strong>.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-5 md:gap-10 pt-4">
              {[
                ["800+", "Happy Patients"],
                ["10+", "Years Experience"],
              ].map(([num, text], i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  className="text-center p-6 rounded-2xl bg-white/20 border border-white/30 shadow-md hover:scale-105 transition-all backdrop-blur-md"
                >
                  <div className="text-4xl font-extrabold text-white mb-1 text-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                    {num}
                  </div>
                  <div className="text-sm font-medium text-white tracking-wide text-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES SIDE */}
          <div
            className="relative flex items-center justify-center overflow-visible h-[420px] sm:h-[500px] md:h-[620px]"
            data-aos="zoom-in"
          >
            {/* White glow behind images */}
            <div className="absolute inset-0 bg-white/30 blur-3xl rounded-3xl"></div>

            {/* Center Image */}
            <div className="relative z-20 group">
              <Image
                src={img1.src}
                height={100}
                width={100}
                className="w-60 sm:w-72 md:w-80 lg:w-[420px] h-[360px] sm:h-[440px] md:h-[450px] object-cover rounded-2xl shadow-xl transform group-hover:scale-105 duration-500"
                alt="Main Studio"
              />
            </div>

            {/* Left Small Image */}
            <div className="absolute left-4 md:left-10 top-10 z-30 hidden sm:block group">
              <Image
                height={180}
                width={100}
                src={img2.src}
                className="w-40 md:w-48 h-52 md:h-56 object-cover rounded-xl shadow-lg transform group-hover:scale-105 duration-500"
                alt="Pilates"
              />
            </div>

            {/* Right Small Image */}
            <div className="absolute right-4 md:right-10 bottom-10 z-30 hidden sm:block group">
              <Image
                src={img3.src}
                height={100}
                width={100}
                className="w-40 md:w-48 h-52 md:h-56 object-cover rounded-xl shadow-lg transform group-hover:scale-105 duration-500"
                alt="Rehab"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
