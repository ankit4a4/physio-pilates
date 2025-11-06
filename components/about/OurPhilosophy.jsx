"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { HeartPulse, Brain, Flower2 } from "lucide-react";

export default function OurPhilosophy() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const philosophyItems = [
    {
      title: "Mindful Movement",
      desc: "We blend awareness with precision — every motion is intentional, every breath restorative.",
      icon: <HeartPulse className="w-8 h-8 text-[#b49559]" />,
    },
    {
      title: "Science-Backed Care",
      desc: "Our programs are built on proven physiotherapy principles, ensuring safety and real results.",
      icon: <Brain className="w-8 h-8 text-[#b49559]" />,
    },
    {
      title: "Holistic Healing",
      desc: "We treat the whole person — body, mind, and energy — to restore balance and long-term vitality.",
      icon: <Flower2 className="w-8 h-8 text-[#b49559]" />,
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-20 md:py-28 bg-gradient-to-br from-white to-[#b495590D] overflow-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922] mb-6">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Where Science Meets Movement, <br className="hidden md:block" /> and
            Healing Finds Flow
          </h2>
        </div>

        {/* Description */}
        <div
          className="mt-10 max-w-3xl mx-auto text-[#b49559]/80 text-lg leading-relaxed space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            At <strong className="text-[#b49559]">Physio Pilates</strong>, we
            believe movement is medicine — when guided mindfully and supported
            by science. Our approach unites clinical expertise with the
            restorative power of pilates to create a balanced path to recovery,
            strength, and inner alignment.
          </p>
          <p>
            Every body tells a story, and our philosophy is built on listening —
            to your body’s needs, your goals, and your rhythm. We empower clients
            to take ownership of their wellness journey through awareness,
            consistency, and compassion.
          </p>
        </div>

        {/* Values Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {philosophyItems.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/60 border border-[#b4955920] shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#b49559] mb-3 group-hover:text-[#9c814d] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#b49559]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16" data-aos="zoom-in" data-aos-delay="400">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#b49559] text-white font-semibold rounded-full shadow-md hover:bg-[#9c814d] transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
