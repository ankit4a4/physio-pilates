"use client";
import { Activity, Heart, Droplet, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import homeServiceImg from '@/assets/home/home-service.jpg';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      icon: Activity,
      title: "Physiotherapy & Rehabilitation",
      description:
        "Restore your movement and confidence with advanced physiotherapy treatments designed to heal pain, correct posture, and rebuild strength.",
      link: "/services/physiotherapy",
    },
    {
      icon: Heart,
      title: "Pilates Training",
      description:
        "Enhance body control, balance, and flexibility with personalized Pilates sessions focused on posture, strength & long-term wellness.",
      link: "/services/pilates",
    },
    {
      icon: Droplet,
      title: "Dry Needling & Cupping Therapy",
      description:
        "Target muscle stiffness, knots, and inflammation with evidence-based dry needling and cupping techniques.",
      link: "/services/dry-needling-and-cupping-therapy",
    },
    {
      icon: Sparkles,
      title: "Yoga Sessions",
      description:
        "Achieve harmony of mind, body, and spirit with guided Yoga programs suitable for all levels.",
      link: "/services/yog",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-28 "
          style={{
    backgroundImage: `url(${homeServiceImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-20 space-y-4" data-aos="fade-down">
          <span className="inline-block px-5 py-2 rounded-full bg-[#C49625]/10 text-[#C49625] font-semibold tracking-wide">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#C49625]">
            Care Designed For Your Wellness
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personalized and science-based treatments to enhance your strength, posture & recovery.
          </p>
        </div>

        {/* Services List */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white border border-[#C49625]/20 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#5CE2E7] text-white rounded-xl mb-5">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-semibold text-[#C49625] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 font-medium text-[#5CE2E7] hover:text-[#C49625] transition"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
