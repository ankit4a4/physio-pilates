import React from 'react'

const ContactHero = () => {
  return (
    <div className="relative w-full h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <img
        src="https://www.absolutehealth.net.au/wp-content/uploads/2020/10/sportsphysio-1200x627.jpg"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover  "
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl text-[#fff] md:text-6xl font-bold uppercase tracking-wide">
          Contact <span className="text-[#b49559]">Us</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Get in touch with our physiotherapy & wellness team — we’re here to help you heal, move, and feel better.
        </p>
      </div>
    </div>
  )
}

export default ContactHero
