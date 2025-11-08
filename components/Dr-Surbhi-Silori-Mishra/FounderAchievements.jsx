import React from 'react'

const FounderAchievements = () => {
    return (
        <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-0 left-0 w-full h-full bg-[length:50px_50px] bg-[linear-gradient(to_right,#b49559_1px,transparent_1px),linear-gradient(to_bottom,#b49559_1px,transparent_1px)]"></div>
            </div>
            
            {/* Floating Accents */}
            <div className="absolute top-10 right-10 w-20 h-20 border border-[#b49559] rounded-full opacity-10"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border border-[#5CE2E7] rounded-full opacity-10"></div>
            
            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="w-12 h-0.5 bg-[#b49559] opacity-60"></div>
                        <span className="text-sm font-semibold uppercase tracking-wider text-[#b49559]">
                            Milestones
                        </span>
                        <div className="w-12 h-0.5 bg-[#b49559] opacity-60"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Professional <span className="text-[#b49559]">Achievements</span>
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Recognized expertise and dedicated service in physiotherapy and rehabilitation
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Experience */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-[#b49559] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-[#b49559] transition-all duration-300 h-full flex items-start space-x-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-16 h-16 bg-[#b49559] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div className="text-2xl font-bold text-[#b49559]">10+</div>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b49559] transition-colors duration-300">
                                    Years of Experience
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Dedicated clinical practice and exceptional patient care with proven results
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-12 h-1 bg-[#b49559] rounded-full mr-3"></div>
                                    <span className="text-sm text-[#b49559] font-medium">Expert Level</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pilates Certification */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-[#5CE2E7] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-[#5CE2E7] transition-all duration-300 h-full flex items-start space-x-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-16 h-16 bg-[#5CE2E7] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#5CE2E7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5CE2E7] transition-colors duration-300">
                                    Certified Pilates Instructor
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Advanced therapeutic rehabilitation certification with specialized training methodology
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-12 h-1 bg-[#5CE2E7] rounded-full mr-3"></div>
                                    <span className="text-sm text-[#5CE2E7] font-medium">Advanced Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dry Needling */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-[#b49559] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-[#b49559] transition-all duration-300 h-full flex items-start space-x-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-16 h-16 bg-[#b49559] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#b49559]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#b49559] transition-colors duration-300">
                                    Dry Needling Specialist
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Expert in advanced trigger point therapy and myofascial release techniques
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-12 h-1 bg-[#b49559] rounded-full mr-3"></div>
                                    <span className="text-sm text-[#b49559] font-medium">Specialist Level</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sports Rehabilitation */}
                    <div className="group relative">
                        <div className="absolute -inset-1 bg-[#5CE2E7] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 group-hover:border-[#5CE2E7] transition-all duration-300 h-full flex items-start space-x-6">
                            {/* Icon */}
                            <div className="flex-shrink-0 w-16 h-16 bg-[#5CE2E7] bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-[#5CE2E7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#5CE2E7] transition-colors duration-300">
                                    Sports Rehabilitation Expert
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Specialized training in athletic injury management and performance enhancement
                                </p>
                                <div className="flex items-center mt-4">
                                    <div className="w-12 h-1 bg-[#5CE2E7] rounded-full mr-3"></div>
                                    <span className="text-sm text-[#5CE2E7] font-medium">Expert Level</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="text-center mt-12 pt-8 border-t border-gray-100">
                    <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-2 h-2 bg-[#b49559] rounded-full"></div>
                        <span>Continuously advancing skills and knowledge</span>
                        <div className="w-2 h-2 bg-[#5CE2E7] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FounderAchievements