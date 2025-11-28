"use client";

import {
  Trophy,
  Users,
  GraduationCap,
  BookOpen,
  CheckCircle,
} from "lucide-react";

import { motion } from "framer-motion";

// Fade-up effect
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Zoom effect
const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Certification() {
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
    <section className="relative py-16 md:py-28 bg-[#5CE2E7] overflow-hidden">
      {/* Soft white glow overlay */}
      <div className="absolute inset-0 bg-white/20 blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm mb-4">
            <span className="text-sm font-medium tracking-[0.2em] text-white text-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              OUR CERTIFICATIONS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            Certified & Trusted Training
          </h2>

          <p className="mt-4 text-lg text-white/90 text-shadow-[0_1px_6px_rgba(0,0,0,0.25)] max-w-2xl mx-auto">
            Professional programs designed to help you gain practical skills and real-world confidence.
          </p>
        </motion.div>

        {/* Highlight Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-6"
          initial="hidden"
          whileInView="visible"
          variants={zoomIn}
          viewport={{ once: true }}
        >
          {highlights.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full shadow-md border border-white/30 backdrop-blur-md"
            >
              <CheckCircle className="w-5 h-5" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Certification Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/20 border border-white/30 rounded-2xl shadow-md p-8 text-center hover:scale-105 transition-all duration-500 backdrop-blur-md"
              variants={fadeUp}
              transition={{ delay: index * 0.15 }}
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[#5CE2E7] text-white rounded-xl mx-auto mb-4">
                <item.icon className="w-8 h-8" />
              </div>

              <div className="text-3xl font-bold text-white mb-1 text-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
                {item.value}
              </div>

              <p className="text-white/90 font-medium mt-2 text-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
