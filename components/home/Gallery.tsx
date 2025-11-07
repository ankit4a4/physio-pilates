"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import img1 from "@/assets/home/homegallery1.jpg"
import img2 from "@/assets/home/homegallery2.jpg"
import img3 from "@/assets/home/homegallery3.jpg"
import img4 from "@/assets/home/homegallery4.jpg"
import img5 from "@/assets/home/homegallery5.jpg"
import img6 from "@/assets/home/homegallery6.jpg"
import Image from "next/image";

export default function Gallery() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <section className="py-8 md:py-20 bg-[#5CE2E7]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559]">
            Our Physiotherapy Work
          </h2>
          <p className="mt-3 text-[#483d28] text-lg max-w-2xl mx-auto">
            Real treatment moments & patient care from our center
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((url, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-3xl"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              < Image
                height={100}
                width={100}
                src={url.src}
                className="
                  w-full h-full object-cover 
                  brightness-90 group-hover:brightness-100
                  transition-all duration-700 ease-[cubic-bezier(.22,.68,0,.99)]
                  scale-100 group-hover:scale-110 
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B2B]/70 via-[#0B2B2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="
             inline-flex items-center gap-3 border hover:bg-[#5CE2E7] px-8 py-4 bg-[#b49559]  text-white rounded-xl font-semibold hover:scale-[1.1] transition shadow-md border-white
            "
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
