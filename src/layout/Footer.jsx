import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'

const navlinks = [
  {href: "#about", label: "About"},
  {href: "#project", label: "Project"},
  {href: "#experience", label: "Experience"},
]

const socials = [
  {icon: FaLinkedin, href: "https://www.linkedin.com/in/lawal-farouq-6413a2340?utm_source=share_via&utm_content=profile&utm_medium=member_android"},
  {icon: FaTwitter, href: "https://x.com/Farouq11Lawal"},
  {icon: FaGithub, href: "https://github.com/Fartekdc"},
]

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-background border-t border-border py-12 mt-20 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          LF <span className="text-primary"></span>
        </a>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          {navlinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socials.map((social, idx) => (
            <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <social.icon className="w-4 h-4"/>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lawal Farouq. All rights reserved.
      </div>

      {/* Back to top button */}
      <div className="absolute right-6 bottom-6">
        <button 
          onClick={scrollToTop} 
          className="p-3 rounded-full glass hover:bg-primary/10 transition-all"
        >
          <ArrowUp className="w-5 h-5"/>
        </button>
      </div>
    </footer>
  )
}

export default Footer
