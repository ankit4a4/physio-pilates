"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Users2, Award, HeartPulse } from "lucide-react";

export default function MeetTheExperts() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const experts = [
    {
      name: "Dr. Meera Khanna",
      role: "Senior Physiotherapist",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      desc: "Over 10 years of orthopedic rehab experience — guiding clients toward balance and strength through mindful physiotherapy.",
      icon: <HeartPulse className="w-6 h-6 text-[#0d9488]" />,
    },
    {
      name: "Ananya Patel",
      role: "Certified Pilates Instructor",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      desc: "Pilates expert focusing on posture, flexibility, and functional mobility. Each session blends flow, precision, and calm.",
      icon: <Award className="w-6 h-6 text-[#0d9488]" />,
    },
    {
      name: "Rahul Menon",
      role: "Sports Rehab Specialist",
      img: "https://randomuser.me/api/portraits/men/42.jpg",
      desc: "Dedicated to injury prevention and athlete recovery — restoring endurance, coordination, and performance.",
      icon: <Users2 className="w-6 h-6 text-[#0d9488]" />,
    },
    {
      name: "Sana Iqbal",
      role: "Movement Therapist",
      img: "https://randomuser.me/api/portraits/women/85.jpg",
      desc: "Blending somatic techniques with mindful exercise for lasting wellness and mobility confidence.",
      icon: <HeartPulse className="w-6 h-6 text-[#0d9488]" />,
    },
    {
      name: "Arjun Rao",
      role: "Physiotherapy Assistant",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
      desc: "Supporting tailored recovery programs with care, focus, and energy — ensuring steady progress for every client.",
      icon: <Award className="w-6 h-6 text-[#0d9488]" />,
    },
  ];

  return (
    <section
      id="meet-the-experts"
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-[#fff9f2] via-[#fff] to-[#fdf5eb] overflow-hidden"
    >
      {/* Decorative Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-[#b49559]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b4955910] rounded-full border border-[#b4955925]">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Meet the Experts
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto mt-3 sm:mt-4 text-base sm:text-lg">
            A passionate team blending science, mindfulness, and movement — guiding each journey toward strength and healing.
          </p>
        </div>

        {/* Swiper Slider */}
        <div data-aos="fade-up" className="mt-12 sm:mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.2, centeredSlides: true },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {experts.map((expert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl shadow-[0_6px_20px_rgb(0,0,0,0.08)] border border-[#b4955933] p-6 sm:p-8 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgb(180,149,89,0.25)] transition duration-500 h-full flex flex-col items-center text-center mx-2">
                  <div className="relative mb-5 sm:mb-6">
                    <img
                      src={expert.img}
                      alt={expert.name}
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-[3px] border-[#b49559] shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-1.5 sm:p-2 rounded-full shadow-md border border-[#b4955930]">
                      {expert.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#b49559]">
                    {expert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0d9488] font-medium mt-1">
                    {expert.role}
                  </p>
                  <p className="text-[#6b6b6b] mt-3 sm:mt-4 leading-relaxed text-xs sm:text-sm px-2 sm:px-0">
                    {expert.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
