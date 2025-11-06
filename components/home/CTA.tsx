"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-12 bg-[#b49559]">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <span className="text-xs font-semibold tracking-widest text-[#fff] uppercase">
            Contact Us
          </span>

          <h2 className="text-3xl font-bold text-white">
            Let's Begin Your Healing Journey
          </h2>

          <p className="text-white/90 text-sm max-w-xl mx-auto">
            Book a consultation or chat with us on WhatsApp
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            className="px-8 py-3 bg-[#b49559] hover:bg-[#5CE2E7] text-white border border-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-105"
          >
            WhatsApp Us
          </Link>

          <Link
            href="#"
            className="px-8 py-3 bg-[#b49559] hover:bg-[#5CE2E7] text-white border border-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
