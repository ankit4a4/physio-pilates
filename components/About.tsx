export default function About() {
  return (
    <section id="about" className="py-8 md:py-24 bg-gradient-to-br from-white to-[#352C1C0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#352C1C0F] rounded-full border border-[#352C1C22]">
                <div className="w-2 h-2 bg-[#352C1C] rounded-full"></div>
                <span className="text-sm font-medium tracking-widest text-[#352C1C]">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#352C1C] font-bold leading-tight">
                Physio • Pilates • <span className="text-[#352C1C]/80">Wellness</span> Redefined
              </h2>
            </div>

            <div className="space-y-6 text-[#352C1C]/80 leading-relaxed text-lg">
              <p className="bg-white/70 p-4 rounded-xl border border-[#352C1C15]">
                Welcome to <strong className="text-[#352C1C]">Physio Pilates</strong> — a holistic health & movement studio 
                dedicated to healing, strengthening and transforming the body through science-based care.
              </p>
              <p>
                We specialize in <strong className="text-[#352C1C]">Physiotherapy, Pilates, Yoga, Dry Needling & Cupping Therapy</strong>, 
                offering personalised recovery & posture correction programs.
              </p>
              <p>
                We also offer <strong className="text-[#352C1C]">Teacher Training Courses</strong> for future wellness professionals.
              </p>
              <p className="bg-[#352C1C08] p-4 rounded-xl border border-[#352C1C15]">
                With modern equipment & expert care, we help you <strong className="text-[#352C1C]">feel better, move better & live better</strong>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 md:gap-8 md:pt-8">
              <div className="text-center p-4 rounded-2xl bg-white/60 border border-[#352C1C20] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-[#352C1C] mb-2">800+</div>
                <div className="text-sm font-medium text-[#352C1C]/70 tracking-wide">Happy Patients</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 border border-[#352C1C20] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-[#352C1C] mb-2">20+</div>
                <div className="text-sm font-medium text-[#352C1C]/70 tracking-wide">Certified Experts</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 border border-[#352C1C20] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-[#352C1C] mb-2">10+</div>
                <div className="text-sm font-medium text-[#352C1C]/70 tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side Image Collage */}
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#352C1C22] to-[#352C1C0A] rounded-3xl -rotate-3 scale-105"></div>
            
            {/* Center Main Image */}
            <div className="relative z-20 group">
              <img
                src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="w-80 md:w-[400px] h-[480px] object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                alt="Main Studio"
              />
              <div className="absolute inset-0 bg-[#352C1C15] rounded-2xl group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Left Small Image */}
            <div className="absolute left-4 md:left-8 top-8 z-30 group">
              <div className="absolute -inset-4 bg-[#352C1C15] rounded-2xl transform -rotate-6 scale-105 group-hover:rotate-0 transition-transform"></div>
              <img
                src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="relative w-48 h-64 md:w-56 md:h-72 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform"
                alt="Pilates"
              />
            </div>

            {/* Right Small Image */}
            <div className="absolute right-4 md:right-8 bottom-8 z-30 group">
              <div className="absolute -inset-4 bg-[#352C1C15] rounded-2xl transform rotate-6 scale-105 group-hover:rotate-0 transition-transform"></div>
              <img
                src="https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="relative w-48 h-64 md:w-56 md:h-72 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform"
                alt="Rehab"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
