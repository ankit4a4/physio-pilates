import logo from "@/assets/logo2.png"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#342811] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="text-2xl    text-white">
              <Image src={logo.src} height={100} width={100} alt="Wellness Studio" className="w-32" />
            </div>
            <p className="text-md  ">
              Transform your life through mindful movement and expert care.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   text-2xl ">Services</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Pilates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Yoga
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Teacher Training
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   text-2xl ">Company</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white   text-2xl ">Follow Us</h3>
            <ul className="space-y-2 text-sm  ">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#5CE2E7] transition-colors duration-300 text-md"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm  ">
          <p>
            © {currentYear} Physio Pilates. All rights reserved. | Powered by <Link href="https://rankmantra.com/" target="_blank">Rankmantra</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
