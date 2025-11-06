import React from 'react'
import ContactHero from '../../components/contact/ContactHero'
import ContactForm from '../../components/contact/ContactForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
    <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </>
  )
}

export default page
