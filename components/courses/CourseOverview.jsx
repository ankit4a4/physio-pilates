"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Clock } from "lucide-react";

export default function CourseOverview() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white to-[#b495590D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922]">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Course Overview
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Become a Certified<br className="hidden sm:block" /> Pilates & Movement Teacher
          </h2>

          <p className="text-[#6b6b6b] leading-relaxed text-lg max-w-lg">
            Our comprehensive Teacher Training Course blends in-depth anatomy, 
            practical sessions, and holistic movement education. Learn to guide 
            others with confidence, awareness, and precision — the Physio Pilates way.
          </p>

          <div className="flex flex-wrap gap-6 mt-6 justify-center md:justify-start">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#5de3e8] w-6 h-6" />
              <span className="text-[#b49559] font-medium">International Certification</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-[#5de3e8] w-6 h-6" />
              <span className="text-[#b49559] font-medium">Expert Trainers</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-[#5de3e8] w-6 h-6" />
              <span className="text-[#b49559] font-medium">Flexible Duration</span>
            </div>
          </div>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-8 bg-[#5de3e8] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#b59659] transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Teacher Training"
            className="w-full h-full object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d9488]/40 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
