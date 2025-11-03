"use client";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="py-8 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm tracking-[3px] text-[#b49559]">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#b49559] mt-2">
            Begin Your Wellness Journey
          </h2>
          <p className="text-[#b49559]/70 text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Connect with us to book your personalized wellness session today.
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 }
            }
          }}
          viewport={{ once: true }}
        >
          {[
            { icon: <Phone className="w-6 h-6 text-[#5CE2E7]" />, label: "PHONE", val: "+1 (234) 567-8900" },
            { icon: <Mail className="w-6 h-6 text-[#5CE2E7]" />, label: "EMAIL", val: "info@wellness.com" },
            { icon: <MapPin className="w-6 h-6 text-[#5CE2E7]" />, label: "LOCATION", val: "123 Wellness Street, City" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="bg-[#5CE2E7]/10 p-8 rounded-xl text-center border border-[#5CE2E7]/20"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5CE2E7]/20 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-sm tracking-widest text-[#b49559]/90">{item.label}</p>
              <p className="text-lg font-medium text-[#b49559] mt-1">{item.val}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="bg-[#b49559] rounded-2xl p-10 text-center text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-medium mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Book your session or chat with our team on WhatsApp for guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/1234567890"
              target="_blank"
              className="px-8 py-4 bg-[#5CE2E7] text-[#b49559] font-medium rounded-full hover:bg-white transition duration-300"
            >
              WhatsApp Us
            </Link>
            <Link
              href="#"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-[#b49559] transition duration-300"
            >
              Book Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
