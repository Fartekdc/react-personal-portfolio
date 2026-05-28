import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import { FaMailchimp } from 'react-icons/fa'
import Button from '../components/Button'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "farouqlawal06@gmail.com",
    href: "mailTo:farouqlawal06@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 814-179-5759",
    href: "tel:+2348141795759",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitStatus, setIsSubmitStatus] = useState({
    type: null,   // success or error
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitStatus({type: null, message: ""});
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIICKEY;

      if(!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variable")
      }
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, publicKey);

      setIsSubmitStatus({type: "success", message: "Message sent successfully, i'll get back to you soon."});
      setFormData({name: "", email: "", message: ""});
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSubmitStatus({type: "error", message: error.text ||"failed to send mesage, please try again."});
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section id='experience' className="py-32 relative overflow-hidden">
      <div className='absolute left-0 top-0 w-full h-full'>
        <div className='absolute left-1/4 top-1/4 h-96 w-96 bg-primary/5 rounded-full blur-3xl '></div>
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'></div>

      </div>

      <div className='container mx-auto p-6 relative z-10'>
        {/* section header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider'>
            Get In Touch
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-200 text-secondary-foreground'>
            Let's Develop <span className='font-serif italic font-normal text-white'> something awesome</span>
          </h2>
          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
            “Open to collaborations and opportunities — feel free to connect.”
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-200'>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div >
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                <input id='name' onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type="text" placeholder='your name' required className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none t rnasition-all'/>
              </div>

               <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                <input id='email' onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} type="text" placeholder='your email' required className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none trnasition-all'/>
              </div>

               <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                <textarea id='message' onChange={(e) => setFormData({...formData, message: e.target.value})} value={formData.message} type="text" placeholder='your message' required className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none trnasition-all resize-none'/>
              </div>

              <Button className='w-full' type="submit" size='lg' disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <Send className='w-5 h-5'/></>
                  )
                }
                
              </Button>

              {isSubmitStatus.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl ${isSubmitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-600" : "bg-red-500/10 border border-red-500/20 text-red-600"}`}>
                  {isSubmitStatus.type === "success" ? (
                    <CheckCircle className='w-5 h-5 flex-shrink-8'/>
                  ) : (
                    <AlertCircle className='w-5 h-5 flex-shrink-8'/>
                  )}
                  <p className='text-sm'>{isSubmitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* contact info */}
          <div className='space-y-6 animate-fade-in animation-delay-400'>
            <div className='glass rounded-3xl p-6'>
              <h2 className='text-xl font-semibold mb-6'>
                Contact Information
              </h2>
              <div className='space-y-4'>
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.href} className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors'>
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center'>
                      <item.icon className='w-5 h-5 text-primary'/>
                    </div>
                    <div>
                      <div className='text-sm text-muted-foreground'>
                        {item.label}
                      </div>
                      <div className='font-medium'>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className='glass rounded-3xl p-8 border border-primary/10'>
              <div className='flex items-center gap-3 mb-4'>
                <span className='w-3 h-3 bg-green-600 rounded-full animate-pulse'/>
                <span className='font-medium'>Currently Available</span>
              </div>
              <p className='text-muted-foreground text-sm'>
                Currently open to full‑time roles, freelance projects, and collaborations. I’m available to discuss opportunities that align with my skills in React, NodeJS, and MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact