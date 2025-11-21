'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import client1 from "@/assets/home/client1.png";
import client2 from "@/assets/home/client2.png";
import client3 from "@/assets/home/client3.png";
import client4 from "@/assets/home/client4.png";
import client5 from "@/assets/home/client5.png";


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: 'Samarth Karan',
      role: 'Local Guide',
      content:
        'I had a great experience working with Dr. Surbhi. She was extremely accommodating of my schedule and took the time to fully understand my concerns around my runner’s knee and ITB issues. During each session, she performed a thorough assessment and asked very pointed, relevant questions that helped pinpoint the underlying causes of my discomfort.Her treatment approach was precise and effective, and after just 2–3 sessions, I noticed significant improvement in mobility and overall comfort. The exercises and movement techniques she recommended were clear, well-explained, and made a real difference in my recovery. I highly recommend her to anyone dealing with running-related injuries or seeking expert care.',
      image:
        client1.src,
    },
    {
      name: 'Amit Bahuguna',
      role: 'Local Guide',
      content:
        'I had a wonderful experience with Dr.Surbhi,She understood my entire problems and also reviewed my earlier reports. She helped me to ease out my worries and concern firstly by looking at the reports then helped to diagnose the problem and after regular sitings I had great relief ....thanks alot Dr.Surbhi for taking out your time and came like a Sunray and great support.I would like to strongly recommend Physio Pilate for all such individuals who are going through any back and neck ect problems must visit once to this place.😊👍',
      image:
        client2.src,
    },
    {
      name: 'Ashish Dasgupta',
      role: 'Certified Instructor',
      content:
        'A few weeks before the start of Durga Puja, I landed up with spasm of Quadratus Lumborum, notoriously known as the QL muscle. The pain was excruciating when I was changing sides on the bed. Throughout the day, I used to carry the discomfort of my left lower back, unable to hop onto an autorickshaw or any of the jerky battery driven rickshaws.My obvious visit landed at Dr. Surabhi’s clinic for curative measures. For 6 continuous physio sessions over 2- 3 weeks, she performed a combination of physiotherapy techniques and rehabilitating my muscles. The process was slow but systematic as I could feel my recovery from my third physio session. Her approach was based on a sound understanding of the underlying problem and her confidence in putting me back into action. She was open to discussing the problem, giving practical solutions towards further prevention. Her do’s and don’ts were extremely helpful. Finally, I had a successful Durga Puja, with active participation.Highly recommended for personalized physio needs, mobility and rehabilitation of muscles post trauma or degeneration.',
      image:
        client3.src,
    },
      {
      name: 'Rupanjali Mitra',
      role: 'Client',
      content:
        'Dr. Surbhi is magical! Not only does she know her work well, she has an eye for details and can get to the root cause and then works on getting you pain free!I had initially visited her for a Plantar fasciitis concern for my husband and I was interested only in fitness. My husband has not only recovered well, but has moved into proper Pilates sessions for strength building and muscle training!Even I had a recurring knee issue, which I always thought was arthiritis, but thanks to her, i know the real cause, its remedy and working towards rehab slowly. She explains each thing so meticulously and notices every concern with equal attention! Its fun training with her kind of enthusiasm. Kudos to her and wish her all the best for the future!',
      image:
        client4.src,
    },
    {
      name: 'Vibhuti Sharma',
      role: 'Client',
      content:
        'In March 2024, I suffered a major back issue which made my daily routine difficult. After seeing many doctors and spending copious amounts of money, in August 2024 I came across Physio Pilates. I till date feel lucky to have met Surbhi. Started my Physio + Pilates journey in August 2024, it’s been 6 months and my back is more than halfway to recovery. I know it for sure that soon I will be 100% recovered and strengthened.I love how patient and understanding Surbhi is, and the way she caters to each patient with care, it’s commendable.',
      image:
        client5.src,
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
    <section className="py-8 md:py-16 bg-white " data-aos="fade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 space-y-4" data-aos="fade-up">
          <span className="text-sm tracking-widest text-[#b49559]">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl text-[#b49559] tracking-wide">
            Client Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {visible.map((t, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="bg-[#F9FAFB] p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ffe234] text-[#ffe234]" />
                ))}
              </div>

              <p className="text-lg text-[#b49559] leading-relaxed mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-[#b49559] font-medium">{t.name}</h4>
                  {/* <span className="text-sm text-[#b49559]/70">{t.role}</span> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center items-center gap-4 mt-10"
          data-aos="fade-up"
        >
          <button
            onClick={prev}
            className="p-3 border border-gray-300 hover:border-[#5CE2E7] hover:bg-[#5CE2E7]/10 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-[#b49559]" />
          </button>

          <button
            onClick={next}
            className="p-3 border border-gray-300 hover:border-[#5CE2E7] hover:bg-[#5CE2E7]/10 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-[#b49559]" />
          </button>
        </div>

      </div>
    </section>
  );
}
