"use client";

import { motion } from "framer-motion";

const ServicesHero = ({ service }) => {
  if (!service) return null;

  return (
    <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.mainimg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {service.description1}
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;
