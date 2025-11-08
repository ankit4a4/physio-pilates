import React from 'react'
import img from "@/assets/home/homegallery1.jpg"
const GalleryHero = () => {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center ">
            {/* Background Image */}
            <img
                src={img.src}
                alt="Gallery Background"
                className="absolute inset-0 w-full h-full object-cover object-top"
            />
          

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
                    Our <span className="text-[#b49559]">Gallery</span>
                </h1>
                <p className="mt-3 text-lg md:text-xl text-gray-200">
                    Moments from our physiotherapy, pilates & wellness sessions
                </p>
            </div>
        </div>
    )
}

export default GalleryHero
