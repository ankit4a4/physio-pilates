"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import img from "@/assets/course.jpg"

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  const reasons = [
    {
      title: "Why are we different?",
      desc: "We combine physiotherapy and Pilates-based rehabilitation to create a holistic experience that restores both your physical and mental balance.",
    },
    {
      title: "Why choose our programs?",
      desc: "Our programs are designed to address your unique needs, whether you're recovering from an injury, rehabilitating ]after surgery, or simply seeking to improve your overall wellness.",
    },

    {
      title: "Why choose our instructors?",
      desc: "Our team includes physiotherapists and movement experts who provide personalized mentorship and real-time feedback.",
    },
    {
      title: "Why join our community?",
      desc: "Connect with over 500+ passionate learners and professionals who share your dedication to wellness and healing.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-gradient-to-br from-[#fffaf5] via-[#fefcf8] to-white py-24 md:py-28 overflow-visible"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 items-center">
        {/* LEFT — Accordion Section */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922] mb-5">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl font-bold text-[#b49559] mb-6">
            Experience the Difference with Our Approach
          </h2>

          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Because we go beyond physical recovery — we help you{" "}
            <span className="text-[#b49559] font-medium">
              transform your lifestyle
            </span>{" "}
            through mindful movement, science-based therapy, and community
            support.
          </p>

          <div className="space-y-5">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? "bg-[#0d948810] border-[#0d9488] shadow-lg"
                    : "bg-white border-[#b4955930] hover:shadow-md"
                }`}
              >
                <button
                  className="w-full flex justify-between items-center text-left px-5 py-4 text-lg font-semibold text-[#b49559]"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {item.title}
                  <motion.span
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-[#0d9488] font-bold"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-5 pb-4 text-gray-700 leading-relaxed"
                    >
                      {item.desc}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image & Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 md:mt-0"
        >
          {/* Main Image */}
          <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden border border-[#b495591a]">
            <Image
              src={img.src}
              alt="Why Choose Us"
              width={600}
              height={420}
              className="object-cover w-full h-[420px]"
            />

            {/* Floating Badge (Now on top of image) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-6 left-6 bg-[#5de3e8] text-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-white z-10"
            >
              <p className="text-lg font-semibold">Trusted by 500+ Students</p>
              <p className="text-sm opacity-90">and 30+ Certified Trainers</p>
            </motion.div>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              "Certified Trainers",
              "Clinical Expertise",
              "Personalized Guidance",
              "Supportive Community",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#f8f8f8] rounded-xl px-4 py-3 border border-[#b4955915]"
              >
                <CheckCircle2 className="text-[#5de3e8]" />
                <span className="text-gray-700 text-sm font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
