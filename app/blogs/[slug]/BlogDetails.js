"use client";
import { motion } from "framer-motion";

export default function BlogDetails({ blog }) {
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.img.src || blog.img})` }}

      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">{blog.name}</h1>
          <p className="text-lg">
            By {blog.author} • {blog.date}
          </p>
        </div>
      </section>

      {/* 🔹 Blog Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-8">
        {blog.desc.map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-lg text-gray-800 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {blog.details.map((item, i) => (
          <div key={i} className="mt-10">
            {item.heading && (
              <h2 className="text-2xl font-semibold mb-3 text-[#b49559]">
                {item.heading}
              </h2>
            )}
            {item.desc &&
              item.desc.map((d, j) => (
                <p key={j} className="text-gray-700 mb-4 leading-relaxed">
                  {d}
                </p>
              ))}

            {item.smallheading && (
              <h3 className="text-lg font-semibold mt-6 text-[#b49559]">
                {item.smallheading}
              </h3>
            )}
            {item.smalldesc && (
              <p className="text-gray-700 mt-2">{item.smalldesc}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
