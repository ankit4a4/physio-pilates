export default function Gallery() {
  const images = [
    { url: 'https://images.pexels.com/photos/3822167/pexels-photo-3822167.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Pilates Studio' },
    { url: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Yoga Session' },
    { url: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Wellness Space' },
    { url: 'https://images.pexels.com/photos/3822517/pexels-photo-3822517.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Training Session' },
    { url: 'https://images.pexels.com/photos/3822357/pexels-photo-3822357.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Studio Equipment' },
    { url: 'https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Group Class' },
  ];

  return (
    <section className="relative py-8 md:py-16 bg-[#F7F4EF]">
      {/* Soft luxury glows */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm tracking-widest text-[#352C1C]">GALLERY</span>
          <h2 className="text-4xl md:text-5xl text-[#352C1C] tracking-wide">Our Space</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden aspect-square cursor-pointer rounded-xl">
              <div className="absolute inset-0 bg-[#5CE2E7] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
              <img src={image.url} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-4 border border-[#352C1C] text-[#352C1C] text-sm tracking-widest hover:bg-[#352C1C] hover:text-white transition-all duration-500">
            VIEW FULL GALLERY
          </a>
        </div>
      </div>
    </section>
  );
}
