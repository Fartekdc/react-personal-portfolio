import React from 'react'
import { FaArrowUp, FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "E-commerce Platform",
    description: "a full‑stack e‑commerce application designed for scalability and seamless user experience. The platform features product browsing, secure checkout, and real‑time inventory management. ",
    image: "/project/cart-js.png",
    link: "#",
    tags: ["React", "NodeJs", "MonngoDb", "Express"]
  },
   {
    title: "Chatting App",
    description: "engineered a real‑time chat app that enables instant communication between users with features like private messaging, group chats, and live typing indicators. Leveraging WebSockets and Socket.IO, the app delivers smooth, low‑latency interactions",
    image: "/project/chat-5.png",
    link: "#",
    tags: ["React", "NodeJs", "MonngoDb", "Express"]
  },
   {
    title: "An Exploring world site",
    description: "Explore the world with Bismealth",
    image: "/project/dev-2.png",
    link: "#",
    tags: ["React", "NodeJs", "MonngoDb", "Express"]
  },
]

const Project = () => {
  return (
    <section id='project' className='py-32 relative overflow-hidden'>
      {/* bg glow */}
      <div className='absolute top-1/4 right-0 w-96 h-96 rounded-full blur-2xl'></div>
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'></div>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16 '>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in uppercase'>Featured work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 m-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'> will always make impact</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            Each project allowed me to experiment with different aspects of development — from authentication and role‑based access control to responsive design and API integration.
          </p>
        </div>
        {/* project grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1' style={{animationDelay: `${(index + 1) * 100}ms`}}>
              {/*img  */}
              <div className='relative overflow-hidden aspect-video'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'/>
                <div className='absolute inset-4 bg-gradient-to-1 from-card via-card/50 to-transparent opacity-60'></div>
                {/* overlay link */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <FaArrowUp className='w-5 h-5'/>
                  </a>
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <FaGithub className='w-5 h-5'/>
                  </a>
                </div>
              </div>

              {/* content */}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <FaArrowUp className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 trnasition-all'/>
                </div>
                <p className='text-muted-foreground'>{project.description}</p>
                <div className='flex flex-wrap gap-2 '>{project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className='px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer'>{tag}</span>
                ))}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project