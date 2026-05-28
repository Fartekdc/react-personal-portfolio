import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const navlinks = [
    {href: "#about", label: "About"},
    {href: "#project", label: "Project"},
    {href: "#experience", label: "Experience"},
    // {href: "#testimonials", label: "Testimonials"}
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <div className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5 '} z-50`}>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href="#" className='text-xl font-bold tracking-tight hover:text-primary'>
          LF <span className='text-primary'></span>
        </a>

        {/* desktop nac */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-2'>
            {navlinks.map((link, index)=> (
              <a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'>{link.label}</a>
            ))}
          </div>
        </div>
        {/* CTA bttn */}
        <div className='hidden md:block'>
          <Button size='sm'>Contact me</Button>
        </div>

        {/* mobile btn */}
        <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </nav>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto px-6 py-4 flex flex-col gap-4'>
           {navlinks.map((link, index)=> (
              <a key={index} href={link.href} onClick={() => setIsMenuOpen(false)} className='text-lg text-muted-foreground hover:text-foreground py-2'>{link.label}</a>
            ))}
            <Button onClick={() => setIsMenuOpen(false)}>Contact me</Button>
        </div>
      </div>
      )}
      
    </div>
  )
}

export default Navbar