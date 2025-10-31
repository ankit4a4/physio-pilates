import { Award, CheckCircle } from 'lucide-react';

export default function Certification() {
  const certifications = [
    'Internationally Accredited Programs',
    'Expert-Led Training',
    'Comprehensive Curriculum',
    'Lifetime Support',
  ];

  return (
    <section className="py-24 bg-[#352C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#5CE2E7]/20 rounded-full">
                <Award className="w-8 h-8 text-[#5CE2E7]" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl   tracking-wide">
                  Certified Excellence
                </h2>
                <p className="text-sm tracking-widest text-[#5CE2E7]   mt-1">
                  GLOBAL RECOGNITION
                </p>
              </div>
            </div>

            <p className="text-white/80   leading-relaxed text-lg">
              Our programs are recognized worldwide, ensuring you receive the
              highest quality training and certification that opens doors to a
              successful career in wellness.
            </p>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5CE2E7] flex-shrink-0" />
                  <span className=" ">{cert}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block px-8 py-4 border border-[#5CE2E7] text-[#5CE2E7] text-sm tracking-widest   hover:bg-[#5CE2E7] hover:text-[#352C1C] transition-all duration-500 mt-4"
            >
              VIEW CERTIFICATIONS
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#5CE2E7]/10 p-8 aspect-square flex flex-col justify-center items-center text-center">
                <div className="text-4xl   text-[#5CE2E7] mb-2">
                  100%
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Certification Rate
                </div>
              </div>
              <div className="bg-white/5 p-8 aspect-square flex flex-col justify-center items-center text-center">
                <div className="text-4xl   text-[#5CE2E7] mb-2">
                  50+
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Countries
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/5 p-8 aspect-square flex flex-col justify-center items-center text-center">
                <div className="text-4xl   text-[#5CE2E7] mb-2">
                  1000+
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Graduates
                </div>
              </div>
              <div className="bg-[#5CE2E7]/10 p-8 aspect-square flex flex-col justify-center items-center text-center">
                <div className="text-4xl   text-[#5CE2E7] mb-2">
                  20+
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
