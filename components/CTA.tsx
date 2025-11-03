import { Phone, Mail, MapPin } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-8 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sm tracking-[3px] text-[#5CE2E7]">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#352C1C] mt-2">
            Begin Your Wellness Journey
          </h2>
          <p className="text-[#352C1C]/70 text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Connect with us to book your personalized wellness session today.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          {/* Phone */}
          <div className="bg-[#5CE2E7]/10 p-8 rounded-xl text-center border border-[#5CE2E7]/20">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#5CE2E7]/20 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#5CE2E7]" />
            </div>
            <p className="text-sm tracking-widest text-[#352C1C]/60">PHONE</p>
            <p className="text-lg font-medium text-[#352C1C] mt-1">+1 (234) 567-8900</p>
          </div>

          {/* Email */}
          <div className="bg-[#5CE2E7]/10 p-8 rounded-xl text-center border border-[#5CE2E7]/20">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#5CE2E7]/20 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#5CE2E7]" />
            </div>
            <p className="text-sm tracking-widest text-[#352C1C]/60">EMAIL</p>
            <p className="text-lg font-medium text-[#352C1C] mt-1">info@wellness.com</p>
          </div>

          {/* Location */}
          <div className="bg-[#5CE2E7]/10 p-8 rounded-xl text-center border border-[#5CE2E7]/20">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#5CE2E7]/20 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#5CE2E7]" />
            </div>
            <p className="text-sm tracking-widest text-[#352C1C]/60">LOCATION</p>
            <p className="text-lg font-medium text-[#352C1C] mt-1">123 Wellness Street, City</p>
          </div>

        </div>

        {/* CTA Box */}
        <div className="bg-[#352C1C] rounded-2xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-medium mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Book your session or chat with our team on WhatsApp for guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#5CE2E7] text-[#352C1C] font-medium rounded-full hover:bg-white transition duration-300"
            >
              WhatsApp Us
            </a>

            <a
              href="#"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-medium rounded-full hover:bg-white hover:text-[#352C1C] transition duration-300"
            >
              Book Online
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
