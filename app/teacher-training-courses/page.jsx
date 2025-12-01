import Navbar from '@/components/Navbar'
import React from 'react'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseOverview from '@/components/courses/CourseOverview'
import CourseDetails from '@/components/courses/CourseDetails'
import WhyChooseUs from '@/components/courses/WhyChooseUs'
import Certification from '@/components/courses/Certification'

const page = () => {
  return (
    <main>
        <CoursesHero/>
        <CourseOverview/>
        <CourseDetails/>
        <Certification/>
        <WhyChooseUs/>
    </main>
  )
}

export default page