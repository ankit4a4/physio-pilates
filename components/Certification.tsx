import { Award, CheckCircle } from 'lucide-react';

export default function Certification() {
  const certifications = [
    'Govt. Recognized Training Standards',
    'Experienced & Qualified Faculty',
    'Advanced Practical Learning',
    'Lifetime Support & Guidance',
  ];

  return (
    <section className="py-8 md:py-24 bg-[#352C1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#5CE2E7]/20 rounded-full">
                <Award className="w-8 h-8 text-[#5CE2E7]" />
              </div>
              <div>
                <h2 className="text-1xl md:text-4xl tracking-wide font-semibold">
                  Certified & Trusted Training
                </h2>
                <p className="text-sm tracking-widest text-[#5CE2E7] mt-1">
                  PROFESSIONAL RECOGNITION
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed text-lg">
              We follow industry-standard certification and practical skill
              training, ensuring every student builds real-world expertise
              and confidence in physiotherapy & wellness practice.
            </p>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5CE2E7] flex-shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block px-8 py-4 border border-[#5CE2E7] text-[#5CE2E7] text-sm tracking-widest hover:bg-[#5CE2E7] hover:text-[#352C1C] transition-all duration-500 mt-4"
            >
              VIEW CERTIFICATIONS
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-[#5CE2E7]/10 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#5CE2E7] mb-2">
                  100%
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Certification Success
                </div>
              </div>

              <div className="bg-white/5 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#5CE2E7] mb-2">
                  5000+
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Trained Students
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-white/5 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#5CE2E7] mb-2">
                  10+ Years
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Training Experience
                </div>
              </div>

              <div className="bg-[#5CE2E7]/10 p-8 aspect-square flex flex-col justify-center items-center text-center rounded-lg">
                <div className="text-4xl text-[#5CE2E7] mb-2">
                  25+
                </div>
                <div className="text-sm tracking-wide text-white/80">
                  Professional Programs
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
