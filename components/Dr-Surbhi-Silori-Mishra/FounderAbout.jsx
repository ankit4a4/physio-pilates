import React from 'react'
import Link from 'next/link'
import img from "@/assets/about/about-hero.webp"


const FounderAbout = () => {
  return (
    <>
      {/* Hero Section with Modern Design */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Section with Modern Frame */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#b49559] opacity-60"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#5CE2E7] opacity-60"></div>
                
                <div className="relative group">
                  <img
                    src={img.src}
                    alt="Dr. Surbhi Silori Mishra, Founder and Lead Physiotherapist"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#b49559]">12+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-8 border border-gray-100">
                <div className="w-2 h-2 bg-[#5CE2E7] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for Consultation</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#b49559] to-[#9a7d4a] bg-clip-text text-transparent">
                Dr. Surbhi Silori Mishra
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-800">
                Founder & Lead <span className="text-[#5CE2E7]">Physiotherapist</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Transforming lives through evidence-based physiotherapy and 
                holistic healing practices with personalized care approach.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b49559]">1000+</div>
                  <div className="text-sm text-gray-600">Patients Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b49559]">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#b49559]">50+</div>
                  <div className="text-sm text-gray-600">Workshops</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Modern Design */}
      <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b49559] to-[#5CE2E7]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div>
              <div className="sticky top-24">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b49559] to-[#9a7d4a] bg-clip-text text-transparent">
                  About Dr. Surbhi
                </h2>
                
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  With over <span className="font-semibold text-[#b49559]">12 years</span> of clinical experience, 
                  Dr. Surbhi has helped thousands of patients achieve optimal wellness and mobility. 
                  Her comprehensive education in physiotherapy combined with specialized certifications 
                  enables her to provide cutting-edge treatment tailored to each individual's unique needs.
                </p>

                {/* Achievement Highlight */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#5CE2E7] bg-opacity-10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#5CE2E7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Quick Recovery Focus</h4>
                      <p className="text-gray-600">Average recovery time reduced by 40%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Qualifications */}
            <div className="space-y-6">
              {/* Qualification Cards */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5CE2E7]">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#b49559] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      MPT in Physiotherapy
                    </h3>
                    <p className="text-gray-600">
                      From leading institution with honors and specialized research in musculoskeletal disorders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5CE2E7]">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#b49559] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Certified Pilates Instructor
                    </h3>
                    <p className="text-gray-600">
                      Advanced rehabilitation focus with international certification and 8+ years of teaching experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#5CE2E7]">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-[#b49559] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Manual Therapy & Sports Rehabilitation
                    </h3>
                    <p className="text-gray-600">
                      Specialized expertise working with professional athletes and sports teams for injury prevention and recovery.
                    </p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FounderAbout