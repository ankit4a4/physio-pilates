import React from 'react'
import GalleryHero from '../../components/gallery/GalleryHero'
import GallerySection from '../../components/gallery/GallerySection'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <Navbar />
      <GalleryHero />
      <GallerySection />
      <Footer />
    </>
  )
}

export default page
