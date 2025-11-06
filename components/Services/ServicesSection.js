"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react"; // ✅ Tick icon import

export default function ServicesSection({ service }) {
  if (!service) return null;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        
        {/* 🖼️ LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full h-full flex justify-center"
        >
          <div className="w-full h-[350px] md:h-[450px] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={service.mainimg}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 📄 RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {service.title}
          </h2>

          <p className="text-gray-700 text-lg mb-4">
            {service.description1}
          </p>

          <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
            {service.description2?.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>

          {/* ✅ Levels with blue ticks */}
          <div className="flex flex-wrap gap-3 mb-6">
            {service.levels?.map((level, index) => (
              <span
                key={index}
                className="flex items-center gap-2 bg-[#b49559]/10 border border-[#b49559] text-[#b49559] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Check size={16} className="text-blue-500" />
                {level}
              </span>
            ))}
          </div>

          {/* Button */}
          <Link href={service.button}>
            <button className="bg-[#b49559] hover:bg-[#a88a50] text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md">
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
