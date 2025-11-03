import logo from "@/assets/logo2.png"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#352C1C] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-2xl   tracking-widest text-white">
              <Image src={logo.src} height={100} width={100} alt="Wellness Studio" className="w-32" />
            </div>
            <p className="text-sm   leading-relaxed">
              Transform your life through mindful movement and expert care.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   tracking-wide">Services</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Pilates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Yoga
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Teacher Training
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   tracking-wide">Follow Us</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm  ">
          <p>
            © {currentYear} Wellness Studio. All rights reserved. Designed for
            excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
