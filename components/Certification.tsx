"use client";
import { Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certification() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const certifications = [
    'Govt. Recognized Training Standards',
    'Experienced & Qualified Faculty',
    'Advanced Practical Learning',
    'Lifetime Support & Guidance',
  ];

  return (
    <section className="py-8 md:py-24 bg-[#b89650] text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8" data-aos="fade-up">
            <div className="flex items-center gap-4" data-aos="zoom-in">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-4xl tracking-wide font-semibold">
                  Certified & Trusted Training
                </h2>
                <p className="text-xs tracking-widest text-white/80 mt-1">
                  PROFESSIONAL RECOGNITION
                </p>
              </div>
            </div>

            <p className="text-white/90 leading-relaxed text-lg" data-aos="fade-up">
              We follow industry-standard certification and practical
              skill training to ensure every student builds real-world
              expertise and confidence in physiotherapy & wellness practice.
            </p>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3" data-aos="fade-up">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{cert}</span>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="inline-block px-8 py-4 border border-white text-white text-sm tracking-widest hover:bg-white hover:text-[#b89650] transition-all duration-500 mt-4"
              data-aos="zoom-in"
            >
              VIEW CERTIFICATIONS
            </Link>
          </div>

          {/* RIGHT BOXES */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div data-aos="zoom-in" className="bg-white/80 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#b89650] mb-2 font-semibold">100%</div>
                <div className="text-sm tracking-wide text-black/80">Certification Success</div>
              </div>

              <div data-aos="zoom-in" className="bg-black/30 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-white mb-2 font-semibold">5000+</div>
                <div className="text-sm tracking-wide text-white/90">Trained Students</div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div data-aos="zoom-in" className="bg-black/30 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-white mb-2 font-semibold">10+ Years</div>
                <div className="text-sm tracking-wide text-white/90">Training Experience</div>
              </div>

              <div data-aos="zoom-in" className="bg-white/80 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#b89650] mb-2 font-semibold">25+</div>
                <div className="text-sm tracking-wide text-black/80">Professional Programs</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
