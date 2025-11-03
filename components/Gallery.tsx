"use client";

export default function Gallery() {
  const images = [
    'https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://exceedhealthhub.com.au/wp-content/uploads/2021/11/Dry-Needling-_-Cupping-scaled.jpg',
    'https://uploads-ssl.webflow.com/61791a8b6c568b9710518140/619511a7fa674f472e307f10_KMD00810-min.jpg',
    'https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  return (
    <section className="py-8 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ✅ Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#b1965b]">
            Our Physiotherapy Work
          </h2>
          <p className="mt-3 text-gray-400 text-lg max-w-2xl mx-auto">
            Real treatment moments & patient care from our center
          </p>
        </div>

        {/* ✅ Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((url, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl">
              <img 
                src={url}
                alt=""
                className="
                  w-full h-full object-cover 
                  grayscale group-hover:grayscale-0 
                  transition-all duration-500 ease-out 
                  scale-100 group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>

        {/* ✅ View More Button */}
        <div className="text-center mt-12">
          <a 
            href="/gallery"
            className="
              inline-block px-8 py-3 rounded-full
              border border-white text-white 
              hover:bg-[#b1965b] hover:text-white 
              transition-all duration-300 
              font-medium tracking-wide
            "
          >
            View More
          </a>
        </div>

      </div>

      {/* ✅ Masonry Row Spans */}
      <style jsx>{`
        .auto-rows-[250px] > :nth-child(1) { grid-row: span 2; }
        .auto-rows-[250px] > :nth-child(5) { grid-row: span 2; }
        .auto-rows-[250px] > :nth-child(3) { grid-row: span 2; }

        @media (min-width: 768px) {
          .auto-rows-[250px] > :nth-child(1) { grid-row: span 2; }
          .auto-rows-[250px] > :nth-child(3) { grid-row: span 2; }
          .auto-rows-[250px] > :nth-child(6) { grid-row: span 2; }
        }
      `}</style>
    </section>
  );
}
