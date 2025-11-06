"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/about/ourstory.webp";


export default function AboutStory() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="about-story"
      className="relative py-20 md:py-28 bg-gradient-to-br from-white to-[#b495590D] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">

        {/* Left: Image */}
        <div
          className="w-full md:w-1/2 relative"
          data-aos="fade-right"
        >
          <div className="absolute -inset-4 bg-[#b4955915] rounded-3xl blur-xl mt-3"></div>
          <img
            src={img.src}
            alt="Physio Pilates Studio"
            className="relative rounded-3xl shadow-2xl w-full h-[450px] object-cover border border-[#b4955922]"
          />
        </div>

        {/* Right: Text */}
        <div
          className="w-full md:w-1/2 space-y-6"
          data-aos="fade-left"
        >

               {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b495590F] rounded-full border border-[#b4955922]">
            <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
            <span className="text-sm font-medium tracking-widest text-[#b49559]">
              OUR STORY
            </span>
          </div>
     

          <h2 className="text-4xl md:text-5xl font-bold text-[#b49559] leading-tight">
            Our Journey Toward Wellness
          </h2>

          <p className="text-[#6b6b6b] leading-relaxed text-base md:text-lg bg-white/70 p-4 rounded-xl border border-[#b4955915]" data-aos="fade-up">
            Built on the belief that healing begins with harmony, 
            <strong className="text-[#b49559]"> Physio Pilates</strong> was founded to bridge 
            the science of physiotherapy with the mindfulness of Pilates. 
            Our goal has always been simple — to help people reconnect 
            with their bodies through movement that restores and empowers.
          </p>

          <p className="text-[#6b6b6b] leading-relaxed text-base md:text-lg bg-white/70 p-4 rounded-xl border border-[#b4955915]" data-aos="fade-up">
            Each session is designed as therapy in motion — personalised, 
            restorative, and grounded in compassion. Whether it’s recovery 
            after injury, posture correction, or overall body conditioning, 
            our team ensures every experience supports your complete wellness.
          </p>
        </div>
      </div>
    </section>
  );
}
