import Link from "next/link";
import FounderHero from "@/components/Dr-Surbhi-Silori-Mishra/FounderHero"
import FounderAbout from "@/components/Dr-Surbhi-Silori-Mishra/FounderAbout"
import FounderExpertise from "@/components/Dr-Surbhi-Silori-Mishra/FounderExpertise"
import FounderAchievements from "@/components/Dr-Surbhi-Silori-Mishra/FounderAchievements"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
        <FounderHero />
        <FounderAbout />
        <FounderExpertise />
        <FounderAchievements />
      {/* Founder Intro Section */}
     

   

      {/* Achievements Section */}
     
    </main>
  );
}
