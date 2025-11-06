import Navbar from '@/components/Navbar'
import React from 'react'
import CoursesHero from '@/components/courses/CoursesHero'
import CourseOverview from '@/components/courses/CourseOverview'
import CourseDetails from '@/components/courses/CourseDetails'
import WhyChooseUs from '@/components/courses/WhyChooseUs'

const page = () => {
  return (
    <main>
        <CoursesHero/>
        <CourseOverview/>
        <CourseDetails/>
        <WhyChooseUs/>
    </main>
  )
}

export default page