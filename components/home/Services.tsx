"use client";
import { Activity, Heart, Droplet, Sparkles, ArrowRight } from "lucide-react";
import backgroundImage from "@/assets/home/background.jpg";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const services = [
    {
      icon: Activity,
      title: "Physiotherapy & Rehabilitation",
      description:
        "Restore your movement and confidence with advanced physiotherapy treatments designed to heal pain, correct posture, and rebuild strength. From injury recovery to post-surgery rehab — we help you move freely again.",
      link: "/services/physiotherapy",
    },
    {
      icon: Heart,
      title: "Pilates Training",
      description:
        "Enhance your body control, balance, and flexibility with personalized Pilates sessions guided by certified experts. Perfect for posture correction, core strengthening, and long-term wellness.",
      link: "/services/pilates",
    },
    {
      icon: Droplet,
      title: "Dry Needling & Cupping Therapy",
      description:
        "Target muscle knots, stiffness, and inflammation using evidence-based techniques like dry needling and cupping. Ideal for athletes and anyone seeking fast pain relief and improved circulation.",
      link: "/services/dry-needling-and-cupping-therapy",
    },
    {
      icon: Sparkles,
      title: "Yoga Sessions",
      description:
        "Experience harmony of mind, body, and spirit through our guided Yoga programs. Improve flexibility, mental focus, and inner peace with expert-led sessions suitable for all levels.",
      link: "/services/yog",
    },
  ];

  return (
    <section
      className="relative py-8 md:py-28 bg-[#5CE2E7]/10 bg-cover bg-center"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20 space-y-4" data-aos="fade-down">
          <span className="inline-block px-5 py-2 rounded-full bg-[#b49559]/10 text-[#b49559] font-semibold tracking-wide">
            OUR SERVICES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559]">
            Care Designed For <span className="text-[#b49559]">Your Wellness</span>
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
              className="bg-white border border-[#b49559]/20 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#5CE2E7] text-[#fff] rounded-xl mb-5">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-semibold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5 leading-relaxed">
                {service.description}
              </p>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 font-medium text-[#5CE2E7] hover:text-black transition"
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
