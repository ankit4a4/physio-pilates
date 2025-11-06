"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { Users2, Award, HeartPulse } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slider-custom.css";

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="meet-the-experts"
      className="relative py-24 md:py-32 bg-gradient-to-br from-[#fff9f2] via-[#fff] to-[#fdf5eb] overflow-hidden"
    >
      {/* Decorative Gold Shine */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#b49559]/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b4955910] rounded-full border border-[#b4955925]">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559] uppercase">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Meet the Experts
          </h2>
          <p className="text-[#6b6b6b] max-w-2xl mx-auto mt-4 text-lg">
            A passionate team blending science, mindfulness, and movement — guiding each journey toward strength and healing.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="fade-up" className="mt-14">
          <Slider {...sliderSettings}>
            {experts.map((expert, index) => (
              <div key={index} className="px-4 mb-10">
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#b4955933] p-8 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgb(180,149,89,0.3)] transition duration-500 h-full flex flex-col items-center">
                  <div className="relative mb-6">
                    <img
                      src={expert.img}
                      alt={expert.name}
                      className="w-40 h-40 rounded-full object-cover border-[3px] border-[#b49559] shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md border border-[#b4955930]">
                      {expert.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#b49559]">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-[#0d9488] font-medium mt-1">
                    {expert.role}
                  </p>
                  <p className="text-[#6b6b6b] mt-4 leading-relaxed text-sm">
                    {expert.desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
