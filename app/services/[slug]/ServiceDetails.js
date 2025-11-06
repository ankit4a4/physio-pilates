"use client";

import ServicesHero from "@/components/Services/ServicesHero";
import ServicesSection from "@/components/Services/ServicesSection";
import GallerySlider from "../../../components/Services/GallerySlider";

export default function ServiceDetails({ service }) {
  return (
    <main>
      <ServicesHero service={service} />
      <ServicesSection service={service} />
      <GallerySlider service={service} />
    </main>
  );
}
