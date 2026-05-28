import React from 'react'
import Button from '../components/Button'
import { ArrowRight, GitBranch } from 'lucide-react'
import { Fa5, FaChevronDown, FaGithub, FaInstagram } from 'react-icons/fa6'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const skills = [
    "HTML",
    "CSS3",
    "Tailwind css",
    "JavaScript",
    "ReactJs",
    "NodeJs",
    "Express",
    "MongoDB"
  ]

const Hero = () => {
  
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* bg img */}
      <div className='absolute inset-0'>
        <img src="/bg.png" alt="" className='w-full h-full object-cover opacity-40'/>
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'/>
      </div>

      {/* green dot */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div className='absolute w-1.5 h-1.5 rounded-full opacity-60'
          style={{
            backgroundColor: "#20B2A6",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
          ></div>
        ))}
      </div>
      {/* content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse'/>Web Developer * React/NodeJs specialist
              </span>
              
            </div>
            {/* hedlines */}
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-3xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-200'>Turning <span className='text-primary glow-text'>Ideas</span>
              <br /> Into Visual <br /> <span className='font-serif italic font-normal text-white'>Impact</span>
              </h1>
              <p className='text-lg  text-muted-foreground max-w-lg animate-fade-in animation-delay-300'>Hi, I'm Lawal Farouq — a Web Developer, I build dynamic, responsive, and scalable web applications using ReactJS, NodeJS, and MongoDB. My focus is on crafting seamless user experiences and efficient backend systems that bring ideas to life. Whether it’s a sleek front-end interface or a robust server architecture, I turn concepts into clean, functional code that performs beautifully  </p>
            </div>
            {/* CTA */}
            <div>
              <Button size='lg' className='animation-delay-300'>Contact me <ArrowRight className='w-5 h-5'/></Button>
            </div>
            {/* social links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-300'>
              <span className='text-sm text-muted-foreground'>Follow me:</span>
              {[
                {icon: FaLinkedin, href: "https://www.linkedin.com/in/lawal-farouq-6413a2340?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
                {icon: FaTwitter, href: "https://x.com/Farouq11Lawal"},
                {icon: FaGithub, href: "https://github.com/Fartekdc"}
              ].map((social, idx) => (
                <a key={idx} href={social.href} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>{<social.icon className='w-4 h-4'/>}</a>
              ))}
            </div>
          </div>
          {/* right column */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* profile img */}
            <div className='relative max-w--md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse'/>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/pf.png" alt="" className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[550px] lg:h-[600px] aspect-[4/5] object-cover rounded-2xl'/>
                {/* floatig badge */}
                <div className='absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-600 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </div>

                {/* state badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl gap-4 py-3 animate-float animation-delay-500'>
                  <div className='text-2xl font-bold text-primary'>3+</div>
                  <div className='text-sm text-muted-foreground'>Years Exp</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies i use</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
             { [...skills, ...skills].map((skill, index) => (
              <div key={index} className='flex-shrink-0 px-8 py-4'>
                <span className='text-sm font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
              </div>
             ))}
            </div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in'>
        <a href="#about" className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <FaChevronDown className='w-4 h-4 animate-bounce'/>
        </a>
      </div>
    </section>
  )
}

export default Hero