"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Clock, Heart, PhoneCall, CheckCircle } from "lucide-react";
import img1 from "@/assets/services/pilate/pilate-2.jpg"
import img2 from "@/assets/services/pilate/pilate-5.jpg"
import img3 from "@/assets/services/therapy/therapy-5.jpg"
import img4 from "@/assets/services/physio/phy-5.jpg"

export default function CourseDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

const courses = [
  {
    title: "200-Hour Pilates Teacher Training",
    duration: "8 Weeks • Beginner to Intermediate",
    price: "₹49,999",
    desc: "Master the art of mindful movement, anatomy, and teaching methodology — the perfect foundation for aspiring instructors.",
    benefits: [
      "Comprehensive anatomy modules",
      "Live sessions with senior mentors",
      "Internationally recognized certification",
    ],
    img: img1.src,
  },
  {
    title: "300-Hour Advanced Pilates Training",
    duration: "12 Weeks • Advanced Level",
    price: "₹74,999",
    desc: "Deepen your practice with advanced biomechanics, reformer techniques, and therapeutic Pilates sequences.",
    benefits: [
      "Advanced teaching methodology",
      "Client-specific correction techniques",
      "Hands-on mentorship & evaluation",
    ],
    img: img2.src,
  },
  {
    title: "Holistic Body Conditioning Program",
    duration: "6 Weeks • All Levels",
    price: "₹34,999",
    desc: "A unique blend of physiotherapy, Pilates, and mobility training — designed for strength, flexibility, and injury prevention.",
    benefits: [
      "Personalized assessment and guidance",
      "Focus on strength & flexibility balance",
      "Ideal for fitness professionals & enthusiasts",
    ],
    img: img3.src,
  },
  {
    title: "Reformer & Equipment Masterclass",
    duration: "10 Weeks • Intermediate to Advanced",
    price: "₹59,999",
    desc: "Learn how to effectively teach using reformer, chair, and Cadillac equipment with proper cueing and safety techniques.",
    benefits: [
      "Practical hands-on sessions",
      "Postural correction principles",
      "Advanced movement sequencing",
    ],
    img: img4.src,
  },
];


  return (
    <section
      id="course-details"
      className="relative py-24 bg-gradient-to-br from-white via-[#fefbf8] to-[#b495590A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922]">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Our Courses
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559] mt-4">
            Explore Our Teacher Training Programs
          </h2>
          <p className="text-[#6b6b6b] mt-4 max-w-3xl mx-auto">
            Gain the knowledge, confidence, and guidance to become a certified instructor — or enhance your wellness journey through movement and science.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 text-left">
                <h3 className="text-2xl font-semibold text-[#b49559] mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 text-teal-700 font-medium mb-4">
                  <Clock className="w-4 h-4" /> {course.duration}
                </div>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">
                  {course.desc}
                </p>

                <ul className="text-[#6b6b6b] space-y-2 mb-6">
                  {course.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-teal-600" /> {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-[#b49559]">
                    {course.price}
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#5de3e8] text-white font-semibold rounded-full hover:bg-[#b59659] transition-all duration-300 shadow-md"
                  >
                    <PhoneCall className="w-5 h-5" /> Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
