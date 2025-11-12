import React from "react";
import {
    Heart,
    Zap,
    Activity,
    ShieldCheck,
    MoveUpRight,
    Globe2,
} from "lucide-react";

const FounderExpertise = () => {
    return (
        <>
            {/* Expertise Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#b49559] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#5CE2E7] opacity-5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-8 h-0.5 bg-[#b49559]"></div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-[#b49559]">
                                Specializations
                            </span>
                            <div className="w-8 h-0.5 bg-[#b49559]"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-[#b49559] to-[#9a7d4a] bg-clip-text text-transparent">
                                Areas of
                            </span>
                            <span className="bg-gradient-to-r from-[#5CE2E7] to-[#4bc4d4] bg-clip-text text-transparent block mt-2">
                                Expertise
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Dr. Surbhi blends physiotherapy, pilates, and yoga to restore balance, mobility, and strength through mindful, holistic care.
                        </p>
                    </div>

                    {/* Expertise Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Physiotherapy */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#b49559] to-[#d4b87a] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#b49559] group-hover:-translate-y-2 h-full flex flex-col">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#b49559] to-[#d4b87a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                                    <Heart size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#b49559] transition-colors duration-300">
                                    Physiotherapy
                                </h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    Over a decade of clinical experience in physiotherapy — helping patients recover from injuries, improve mobility, and manage pain effectively.
                                </p>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Pain & Injury Management
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Posture & Mobility Correction
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Functional Recovery
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pilates */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#5CE2E7] to-[#8aeef2] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#5CE2E7] group-hover:-translate-y-2 h-full flex flex-col">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#5CE2E7] to-[#8aeef2] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#5CE2E7] transition-colors duration-300">
                                    Pilates
                                </h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    Certified Balance Body (USA) instructor guiding clients to build strength, balance, and core stability through personalized pilates routines.
                                </p>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#5CE2E7] rounded-full mr-3"></div>
                                        Core Conditioning
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#5CE2E7] rounded-full mr-3"></div>
                                        Balance & Posture Training
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#5CE2E7] rounded-full mr-3"></div>
                                        Functional Strength
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Yoga & Wellness */}
                        <div className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#b49559] to-[#d4b87a] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
                            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#b49559] group-hover:-translate-y-2 h-full flex flex-col">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#b49559] to-[#d4b87a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                                    <Activity size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#b49559] transition-colors duration-300">
                                    Yoga & Wellness
                                </h3>
                                <p className="text-gray-600 leading-relaxed flex-grow">
                                    Certified in yoga from Shri Lal Bahadur Shastri Sanskrit Vidyapeeth — integrating movement, breath, and mindfulness for holistic healing.
                                </p>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Mindful Movement
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Stress & Posture Balance
                                    </li>
                                    <li className="flex items-center text-sm text-gray-500">
                                        <div className="w-1.5 h-1.5 bg-[#b49559] rounded-full mr-3"></div>
                                        Holistic Wellness Integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#b49559] overflow-hidden">
                <div className="max-w-5xl mx-auto relative">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 border border-gray-200 mb-8 shadow-sm">
                            <div className="w-2 h-2 bg-[#5CE2E7] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-[#222]">
                                Philosophy & Approach
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#FFF]">
                            Her Vision
                        </h2>

                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 mb-8 shadow-md">
                            <p className="text-xl md:text-2xl text-[#222] leading-relaxed mb-8">
                                Dr. Surbhi’s vision is rooted in a{" "}
                                <span className="text-[#5CE2E7] font-semibold">holistic approach</span> — uniting physiotherapy, pilates, and yoga to restore balance and build lifelong wellness.
                            </p>

                            <div className="relative">
                                <div className="absolute -top-4 -left-4 text-6xl text-[#b49559] opacity-30">"</div>
                                <blockquote className="text-2xl md:text-3xl font-light italic text-center text-[#000] relative z-10">
                                    Healing begins with awareness — movement makes it lasting.
                                </blockquote>
                                <div className="absolute -bottom-4 -right-4 text-6xl text-[#5CE2E7] opacity-30">"</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                                <div className="w-12 h-12 bg-[#b49559] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="text-[#b49559]" size={24} />
                                </div>
                                <h4 className="text-[#000] font-semibold mb-2">Patient Empowerment</h4>
                                <p className="text-[#333] text-sm">
                                    Encouraging patients to take charge of their healing
                                </p>
                            </div>

                            <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                                <div className="w-12 h-12 bg-[#5CE2E7] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <MoveUpRight className="text-[#5CE2E7]" size={24} />
                                </div>
                                <h4 className="text-[#000] font-semibold mb-2">Root Cause Focus</h4>
                                <p className="text-[#333] text-sm">
                                    Addressing deeper issues for sustainable recovery
                                </p>
                            </div>

                            <div className="text-center bg-white rounded-2xl p-6 shadow-md">
                                <div className="w-12 h-12 bg-[#b49559] bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Globe2 className="text-[#b49559]" size={24} />
                                </div>
                                <h4 className="text-[#000] font-semibold mb-2">Holistic Wellness</h4>
                                <p className="text-[#333] text-sm">
                                    Integrating physiotherapy, pilates, and yoga principles
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FounderExpertise;
