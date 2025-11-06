"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Eye } from "lucide-react"; // unique icons for Mission & Vision

export default function MissionVision() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="mission-vision"
      className="relative py-20 md:py-28 bg-gradient-to-br from-white to-[#b495590D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">

        {/* Section Header */}
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922] mb-6">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559]">
              OUR PURPOSE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Mission & Vision
          </h2>
          <p className="text-[#6b6b6b] max-w-3xl mx-auto mt-4 text-lg">
            The foundation of Physio Pilates lies in nurturing physical and mental wellness — empowering individuals to find harmony between movement, strength, and mindfulness.
          </p>
        </div>

        {/* Mission + Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" data-aos="fade-up">

          {/* Mission */}
          <div className="bg-white/80 rounded-3xl shadow-xl border border-[#b4955915] p-10 hover:shadow-2xl transition duration-500">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-teal-100 p-5 rounded-full shadow-inner mb-4">
                <Target className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-[#b49559]">
                Our Mission
              </h3>
            </div>
            <p className="text-[#6b6b6b] leading-relaxed">
              To guide every individual on a journey of holistic recovery and renewal — combining the precision of physiotherapy with the mindfulness of Pilates. We aim to restore balance, enhance strength, and promote healing through purposeful movement.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/80 rounded-3xl shadow-xl border border-[#b4955915] p-10 hover:shadow-2xl transition duration-500">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-teal-100 p-5 rounded-full shadow-inner mb-4">
                <Eye className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-[#b49559]">
                Our Vision
              </h3>
            </div>
            <p className="text-[#6b6b6b] leading-relaxed">
              To create a world where wellness is not just recovery, but a lifestyle. We envision a community that embraces conscious movement, self-awareness, and inner harmony — inspiring a healthier, stronger, and more balanced way of living.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
