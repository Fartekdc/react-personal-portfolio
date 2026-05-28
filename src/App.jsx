import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Experience from './sections/Experience'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Project/>
        <Experience/>
        <Testimonial/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App