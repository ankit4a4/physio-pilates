import { Activity, Heart, Droplet, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: 'Physiotherapy',
      description:
        'Evidence-based physiotherapy treatments to restore movement and function, reduce pain, and improve your quality of life.',
    },
    {
      icon: Heart,
      title: 'Pilates',
      description:
        'Premium Pilates sessions focusing on core strength, flexibility, and mind-body connection in our luxury studio.',
    },
    {
      icon: Droplet,
      title: 'Dry Needling & Cupping',
      description:
        'Advanced therapeutic techniques for pain relief, muscle recovery, and enhanced healing.',
    },
    {
      icon: GraduationCap,
      title: 'Teacher Training',
      description:
        'Comprehensive certification programs for aspiring Pilates and Yoga instructors with industry-leading mentorship.',
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#F7F4EF] to-[#DFF9FA] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[350px] h-[350px] bg-[#5CE2E7]/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[350px] h-[350px] bg-[#352C1C]/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-widest text-[#352C1C]">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl text-[#352C1C] tracking-wide">
            Holistic Wellness Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm hover:bg-[#352C1C] transition-all duration-500 border border-gray-200 hover:border-[#5CE2E7] rounded-xl shadow-sm hover:shadow-xl"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-[#5CE2E7]/10 group-hover:bg-[#5CE2E7]/30 transition-all duration-500 rounded-lg">
                  <service.icon className="w-7 h-7 text-[#5CE2E7]" />
                </div>

                <h3 className="text-xl tracking-wide text-[#352C1C] group-hover:text-white transition-all duration-500">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#352C1C]/70 group-hover:text-white/80 transition-all duration-500">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm tracking-widest text-[#352C1C] group-hover:text-white transition-all duration-500"
                >
                  LEARN MORE
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
