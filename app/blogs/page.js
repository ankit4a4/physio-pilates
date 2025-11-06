"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, User } from "lucide-react";
import { articles } from "@/data/articles"; 
import BlogsImg from "../../assets/services/physio/phy-2.jpeg";

export default function BlogsPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={BlogsImg.src}
          alt="Blogs Hero"
          fill
          className="object-cover brightness-75"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Stay informed with the latest health, fitness, and wellness insights
            from our experts.
          </motion.p>
        </div>
      </section>

      {/* 🔹 Description Section */}
      <section className="py-16 px-6 md:px-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore our collection of expert articles covering physiotherapy,
          pilates, yoga, and more. Learn from professionals and stay ahead in
          your wellness journey.
        </p>
      </section>

      {/* 🔹 Blog Cards Section */}
      <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
