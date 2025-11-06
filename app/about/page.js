import AboutHero from "@/components/about/AboutHero";
import Navbar from "@/components/Navbar";
import AboutStory from '@/components/about/AboutStory';
import OurPhilosophy from '@/components/about/OurPhilosophy';
import MissionVision from '@/components/about/MissionVision';
import MeetTheExperts from "@/components/about/MeetTheExperts.jsx";
import BookSessionBanner from "@/components/about/BookSessionBanner";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <OurPhilosophy/>
      <MissionVision/>
      <MeetTheExperts/>
      <BookSessionBanner />
    </main>
  );
}
