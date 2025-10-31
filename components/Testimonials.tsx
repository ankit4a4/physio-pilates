'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Executive',
      content:
        'The transformation I have experienced here is beyond words. The instructors are incredibly knowledgeable and caring. This place has become my sanctuary.',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'James Anderson',
      role: 'Entrepreneur',
      content:
        'After years of back pain, the physiotherapy treatments here have given me my life back. Professional, caring, and truly effective.',
      image:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Emma Thompson',
      role: 'Certified Instructor',
      content:
        'The teacher training program was exceptional. The level of detail and support I received has prepared me perfectly for my career.',
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  const next = () => setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);

  const visible = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section className="py-8 md:py-16  bg-white overflow-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-widest text-[#352C1C]">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl text-[#352C1C] tracking-wide">
            Client Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {visible.map((t, i) => (
            <div
              key={i}
              className="bg-[#F9FAFB] p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#5CE2E7] text-[#5CE2E7]" />
                ))}
              </div>

              <p className="text-lg text-[#352C1C] leading-relaxed mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#352C1C] font-medium">{t.name}</h4>
                  <span className="text-sm text-[#352C1C]/70">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prev}
            className="p-3 border border-gray-300 hover:border-[#5CE2E7] hover:bg-[#5CE2E7]/10 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-[#352C1C]" />
          </button>

          <button
            onClick={next}
            className="p-3 border border-gray-300 hover:border-[#5CE2E7] hover:bg-[#5CE2E7]/10 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-[#352C1C]" />
          </button>
        </div>

      </div>
    </section>
  );
}
