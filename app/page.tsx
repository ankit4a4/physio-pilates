import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Certification from '@/components/home/Certification';
import Testimonials from '@/components/home/Testimonials';
import Gallery from '@/components/home/Gallery';
import CTA from '@/components/home/CTA';

export default function Home() {

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Certification />
      <Testimonials />
      <Gallery />
      <CTA />
    </main>
  );
}
