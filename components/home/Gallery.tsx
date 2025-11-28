"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/assets/home/homegallery1.webp";
import img2 from "@/assets/home/homegallery2.jpg";
import img3 from "@/assets/home/HomeGallery3.webp";
import img4 from "@/assets/home/HomeGallery4.webp";
import img5 from "@/assets/home/HomeGallery5.webp";
import img6 from "@/assets/home/homegallery6.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-16 bg-[#5CE2E7] relative overflow-hidden">
      {/* Soft glow behind */}
      <div className="absolute inset-0 bg-white/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex mb-6 items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-sm mx-auto">
            <span className="text-sm font-medium tracking-[0.2em] text-white text-shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
              OUR GALLERY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            Our Physiotherapy Work
          </h2>
          <p className="mt-3 text-white/90 text-lg max-w-2xl mx-auto">
            Real treatment moments & patient care captured from our center.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[250px]">
          {images.map((url, i) => (
            <motion.div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* White card glow */}
              <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl opacity-30"></div>

              <Image
                src={url.src}
                alt={`Gallery image ${i + 1}`}
                height={100}
                width={100}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-[cubic-bezier(.22,.68,0,.99)] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-white hover:bg-white/10 hover:scale-105 transition transform shadow-md"
          >
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
