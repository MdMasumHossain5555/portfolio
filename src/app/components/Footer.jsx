import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-[95%] mx-auto mt-10 border border-border rounded-2xl bg-background/40 backdrop-blur-sm shadow-foreground/20 shadow-lg'>
      <div className='px-5 py-5 md:px-8 md:py-6'>
        <div className='grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-6'>
          <div>
            <h3 className='text-xl font-bold gradient-text'>Masum Hossain</h3>
            <p className='mt-2 text-secondary text-sm leading-relaxed max-w-xs'>
              Full-stack web developer building fast, modern, and user-focused digital products.
            </p>
          </div>

          <div>
            <h4 className='text-primary font-semibold mb-2'>Quick Links</h4>
            <ul className='space-y-1 text-sm text-secondary'>
              <li><Link href='/' className='hover:text-primary transition-colors duration-300'>Home</Link></li>
              <li><Link href='/projects' className='hover:text-primary transition-colors duration-300'>Projects</Link></li>
              <li><Link href='/skills' className='hover:text-primary transition-colors duration-300'>Skills</Link></li>
              <li><Link href='/about' className='hover:text-primary transition-colors duration-300'>About</Link></li>
              <li><Link href='/contact' className='hover:text-primary transition-colors duration-300'>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className='text-primary font-semibold mb-2'>Connect</h4>
            <div className='flex items-center gap-2'>
              <a href='https://github.com/MdMasumHossain5555' target='_blank' rel='noopener noreferrer' className='p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300'>
                <Github className='w-4 h-4' />
              </a>
              <a href='https://www.linkedin.com/in/mdmasumhossain5/' target='_blank' rel='noopener noreferrer' className='p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300'>
                <Linkedin className='w-4 h-4' />
              </a>
              <a href='mailto:masumhossain1712@gmail.com' className='p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300'>
                <Mail className='w-4 h-4' />
              </a>
            </div>
            <p className='mt-2 text-xs text-muted-foreground'>Open to freelance and collaboration.</p>
          </div>
        </div>

        <div className='mt-4 pt-3 border-t border-border flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs md:text-sm text-muted-foreground'>
          <p>&copy; {year} Masum Hossain. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
