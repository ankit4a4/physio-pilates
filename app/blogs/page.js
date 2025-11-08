"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { articles } from "@/data/articles";
import BlogsImg from "@/assets/services/physio/phy-2.jpg";

export default function BlogsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <main className="w-full min-h-screen bg-white text-gray-800">
      {/* 🔹 Hero Section */}
      <section
        className="relative min-h-[75vh] md:min-h-[80vh] flex items-center justify-center bg-[#fefdfb] overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 md:scale-100 transition-transform duration-1000"
          style={{
            backgroundImage: `url(${BlogsImg.src})`,
          }}
        ></div>

        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00101010] via-[#00101060] to-[#00101090]"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 text-white">
          {/* Tagline */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/20 shadow-sm"
            data-aos="zoom-in"
          >
            <div className="w-2.5 h-2.5 bg-[#b59659] rounded-full shadow-sm shadow-[#b5965960]" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-[#EAEAEA]">
              Wellness Insights
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 leading-snug md:leading-tight tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
            data-aos="fade-up"
          >
            Our <span className="text-[#b59659]">Blog</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 max-w-2xl mx-auto text-gray-100/90 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Stay informed with the latest health, fitness, and wellness insights
            from our experts — empowering you to live a stronger, balanced life.
          </p>

          {/* Divider */}
          <div
            className="w-20 h-1 mt-10 mx-auto bg-gradient-to-r from-[#b59659] to-[#b49559] rounded-full"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
        </div>
      </section>

      {/* 🔹 Description Section */}
      <section
        className="py-16 px-6 md:px-12 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our collection of expert articles covering physiotherapy,
          pilates, yoga, and holistic wellness. Learn from professionals and
          stay ahead in your health journey.
        </p>
      </section>

      {/* 🔹 Blog Cards Section */}
      <section
        className="pb-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        data-aos="fade-up"
      >
        {articles.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={blog.img}
                alt={blog.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-3 gap-4">
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={16} />
                  {blog.author}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                {blog.name}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {blog.shortDesc}
              </p>

              <Link href={`/blogs/${blog.slug}`}>
                <button className="bg-[#b49559] hover:bg-[#a88a50] text-white px-5 py-2 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-95">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
