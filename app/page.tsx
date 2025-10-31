import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Certification from '@/components/Certification';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Certification />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}
