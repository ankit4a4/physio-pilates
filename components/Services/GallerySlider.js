"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function GallerySlider({ service }) {
  if (!service?.gallery || service.gallery.length === 0) return null;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 🏷️ Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {service.title} Gallery
        </h2>

        {/* Divider */}
        <div className="w-24 h-[3px] bg-[#b49559] mx-auto mb-10 rounded-full" />

        {/* 🎞️ Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {service.gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={img}
                  alt={`${service.title} Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
