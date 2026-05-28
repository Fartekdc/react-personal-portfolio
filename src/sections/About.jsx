import React from 'react'
import { FaCode } from 'react-icons/fa'


const Highlight = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "I craft responsive, user‑friendly interfaces using ReactJS, TailwindCSS, and modern JavaScript frameworks to deliver seamless digital experiences."
  },
  {
    icon: FaCode,
    title: " Backend Engineering",
    description: "Skilled in NodeJS and Express, I design scalable APIs and server architectures that ensure performance, reliability, and security."
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "I craft responsive, user‑friendly interfaces using ReactJS, TailwindCSS, and modern JavaScript frameworks to deliver seamless digital experiences."
  },
  {
    icon: FaCode,
    title: "Database Management",
    description: "With expertise in MongoDB, I build efficient data models and optimize queries to keep applications fast and data‑driven."
  },
  {
    icon: FaCode,
    title: "Problem Solving",
    description: " I thrive on turning complex challenges into elegant solutions, ensuring every project is both functional and future‑ready."
  },
  {
    icon: FaCode,
    title: "Collaboration",
    description: " Experienced in working with diverse teams, I value communication and teamwork to bring ideas to life efficiently."
  },
]

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden '>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-24 items-center'>
          {/* left sect */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
          </div>

          <h1 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
            Beyond the Code,   
              <span className='font-serif italic font-normal text-white'> one component at a time</span>
          </h1>
          <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
            <p>
              I’m a passionate web developer specializing in React, NodeJS, and MongoDB. 
              With a focus on building scalable applications and intuitive user experiences, 
              I bring ideas to life through clean, functional code.
            </p>
            <p>
               For me, development is more than writing lines of code — it’s about solving problems, 
               creating meaningful experiences, and collaborating to bring visions to life. 
               Every project is an opportunity to merge creativity with technology, delivering impact that goes far beyond the screen.
            </p>
            <p>
              My journey in web development is driven by a passion for transforming ideas into digital realities. 
              From sleek front‑end designs to robust backend systems, I focus on building solutions that don’t just work — 
              they inspire, engage, and leave a lasting impression.
            </p>
          </div>
          <div className='glass rounded-2xl glow-border p-6 animate-fade-in animation-delay-300 '>
            <p className='text-lg font-medium italic text-foreground'>
              “My mission is to engineer digital solutions that merge innovation with impact. By leveraging modern technologies like React, NodeJS, and MongoDB, I build scalable applications that empower businesses to grow and users to thrive. I am committed to writing clean, efficient code, fostering collaboration across teams, and continuously learning to stay ahead in a rapidly evolving tech landscape. Every project I take on is an opportunity to transform ideas into reliable, high‑performance systems that drive measurable results.”
            </p>
          </div>
        </div>

        {/* right column */}
        <div className='grid sm:grid-cols-2 gap-6'>
          {Highlight.map((item, index) => (
            <div key={index} className='glass p-6 rounded-2xl animate-fade-in' style={{animationDelay: `${(index + 1) * 100}ms`}}>
              <div className='w-12 h-12 rounded-xl flex items-center bg-primary/20 justify-center mb-4 hover:bg-primary/25'>
                <item.icon  className='w-6 h-6 text-primary'/>
              </div>
              <h2 className='text-lg font-semibold mb-2 '>{item.title}</h2>
              <p className='text-sm text-muted-foreground'>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
            
      </div>
    </section>
  )
}

export default About