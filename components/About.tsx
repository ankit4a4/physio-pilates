export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm tracking-widest text-[#352C1C] ">
                ABOUT US
              </span>
              <h2 className="text-4xl md:text-5xl   text-[#352C1C] tracking-wide">
                Elevate Your Practice
              </h2>
            </div>

            <div className="space-y-4 text-[#352C1C]/70  leading-relaxed">
              <p>
                We are a premium wellness studio dedicated to helping you achieve
                optimal health through evidence-based practices and personalized
                care.
              </p>
              <p>
                Our team of certified professionals brings years of expertise in
                Pilates, Yoga, Physiotherapy, and specialized treatments to guide
                you on your wellness journey.
              </p>
              <p>
                Experience the perfect blend of traditional techniques and modern
                approaches in our state-of-the-art facility designed for your
                comfort and transformation.
              </p>
            </div>

            <div className="flex items-center gap-12 pt-6">
              <div>
                <div className="text-4xl  text-[#352C1C]">500+</div>
                <div className="text-sm text-[#352C1C]/60 tracking-wide">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-4xl  text-[#352C1C]">15+</div>
                <div className="text-sm text-[#352C1C]/60 tracking-wide">
                  Expert Trainers
                </div>
              </div>
              <div>
                <div className="text-4xl  text-[#352C1C]">10+</div>
                <div className="text-sm text-[#352C1C]/60 tracking-wide">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 bg-[#352C1C]/30 rounded-sm" />
            <img
              src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wellness Studio"
              className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
