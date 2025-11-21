"use client";
import {
  Trophy,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certification() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const certifications = [
    { icon: Trophy, title: "Certification Success", value: "100%" },
    { icon: Users, title: "Trained Students", value: "5000+" },
    { icon: GraduationCap, title: "Training Experience", value: "10+ Years" },
    { icon: BookOpen, title: "Professional Programs", value: "25+" },
  ];

  const highlights = [
    "Experienced Faculty",
    "Practical Learning",
    "Lifetime Support",
  ];

  return (
    <section
      className="relative py-16 bg-[#5CE2E7]/20"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

      <div className="relative max-w-6xl mx-auto px-4 text-center space-y-8">
        {/* Header */}
        <div data-aos="fade-down">
          <span className="inline-block mb-1 px-5 py-2 rounded-full bg-[#b49559]/10 text-[#b49559] font-semibold tracking-wide">
            OUR CERTIFICATIONS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-[#b49559]">
            Certified & Trusted  Training
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Professional programs designed to help you gain practical skills and real-world confidence.
          </p>
        </div>

        {/* Highlight Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-6" data-aos="zoom-in">
          {highlights.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-white text-[#b49559] px-4 py-2 rounded-full shadow-sm border border-[#5CE2E7]/20"
            >
              <CheckCircle className="w-5 h-5" />
              {item}
            </span>
          ))}
        </div>

        {/* Four Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          data-aos="fade-up"
        >
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#5CE2E7]/20 rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#5CE2E7] text-white rounded-xl mx-auto mb-4">
                <item.icon className="w-8 h-8" />
              </div>

              <div className="text-3xl font-bold text-black mb-1">
                {item.value}
              </div>

              <p className="text-gray-600 font-medium mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
