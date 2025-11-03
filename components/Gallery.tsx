"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    'https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://www.health.com/thmb/7fFFXMLVCzMmhjxfXfs3kTiRS6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HLTH_MoveYourBody_YogaPoses_THUMB-LARGE-726a28603c8043eba44eb9f128f30551.jpg',
    'https://exceedhealthhub.com.au/wp-content/uploads/2021/11/Dry-Needling-_-Cupping-scaled.jpg',
    'https://uploads-ssl.webflow.com/61791a8b6c568b9710518140/619511a7fa674f472e307f10_KMD00810-min.jpg',
    'https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section className="py-8 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Animation */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#b1965b]">
            Our Physiotherapy Work
          </h2>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
            Real treatment moments & patient care from our center
          </p>
        </motion.div>

        {/* Grid Images with Scroll Animation */}
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
              <img 
                src={url}
                className="
                  w-full h-full object-cover 
                  grayscale group-hover:grayscale-0 
                  transition-all duration-700 ease-[cubic-bezier(.22,.68,0,.99)] 
                  scale-100 group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="
              inline-block px-10 py-3 rounded-full font-semibold tracking-wide
              border border-[#b1965b] text-[#b1965b]
              hover:bg-[#b1965b] hover:text-black
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(177,150,91,0.4)]
            "
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
