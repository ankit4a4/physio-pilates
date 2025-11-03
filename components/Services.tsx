"use client";
import { Activity, Heart, Droplet, GraduationCap, ArrowRight } from "lucide-react";
import backgroundImage from "@/assets/home/background.jpg";

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: "Physiotherapy & Rehabilitation",
      description:
        "Clinical physiotherapy programs to treat pain, injuries, posture issues, and mobility limitations with scientific rehab protocols.",
    },
    {
      icon: Heart,
      title: "Pilates Training",
      description:
        "Personalised pilates sessions designed to build core strength, improve posture, enhance flexibility, and develop long-term body control.",
    },
    {
      icon: Droplet,
      title: "Dry Needling & Cupping Therapy",
      description:
        "Advanced pain-management techniques for muscle tightness, nerve tension, sports injuries & deep tissue recovery.",
    },
    {
      icon: GraduationCap,
      title: "Teacher Training Courses",
      description:
        "Professional certification in Pilates & Yoga with expert guidance, hands-on practice and industry-standard training modules.",
    },
  ];

  return (
    <section
      className="relative py-8 md:py-28 overflow-visible bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-0"></div>

      {/* Gradient & Effects Hata diye (Background overlay ke andar chala jayega) */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-visible">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
            <div className="w-2 h-2 bg-[#5CE2E7] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold tracking-widest text-white">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Expert Care For <span className="text-[#5CE2E7]">Your Body</span>
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Comprehensive wellness solutions combining modern science with holistic healing approaches
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 relative overflow-visible">
          <div className="space-y-8">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="space-y-8 md:mt-16">
            {services.slice(2, 4).map((service, index) => (
              <ServiceCard key={index + 2} service={service} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-[#352C1C] hover:bg-[#5CE2E7] text-white rounded-2xl transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
            <span className="text-lg font-semibold tracking-wide">View All Services</span>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <div className="group relative overflow-visible z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5CE2E7]/10 to-[#352C1C]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative p-8 bg-white/90 backdrop-blur-sm border border-[#5CE2E7]/10 rounded-2xl shadow-sm transition-all duration-500 group-hover:scale-[1.04] group-hover:border-[#5CE2E7]/30 group-hover:z-20 overflow-visible">

        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-[#5CE2E7]/10 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
          <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#5CE2E7] to-[#352C1C] rounded-2xl shadow-lg">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#5CE2E7] rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">{index + 1}</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#352C1C] tracking-tight group-hover:text-[#5CE2E7] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-[#352C1C]/70 leading-relaxed text-lg">{service.description}</p>

          <div className="pt-4">
            <a href="#" className="inline-flex items-center gap-3 group/link">
              <span className="text-sm font-semibold tracking-widest text-[#352C1C] group-hover/link:text-[#5CE2E7] transition-colors duration-300">
                LEARN MORE
              </span>
              <div className="w-8 h-8 bg-[#5CE2E7]/10 rounded-full flex items-center justify-center group-hover/link:bg-[#5CE2E7] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#5CE2E7] group-hover/link:text-white transition-colors duration-300 group-hover/link:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
