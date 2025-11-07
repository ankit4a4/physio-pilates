import Link from "next/link";
import img from "@/assets/founderbg.jpg"

export default function FounderHero() {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Meet Our Founder
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover the story, vision, and dedication behind <br />
          <span className="text-[#5CE2E7] font-semibold">
            Dr. Surbhi Silori Mishra
          </span>
        </p>
      </div>
    </section>
  );
}
