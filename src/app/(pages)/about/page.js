import React from 'react'
import Image from 'next/image'
import { BriefcaseBusiness, Rocket, Code2, Layers, Workflow, CheckCircle2 } from 'lucide-react'

function About() {
  const strengths = [
    {
      title: 'Product-Focused Development',
      desc: 'I turn ideas into real, usable products with clear structure and practical business value.',
      icon: Rocket,
    },
    {
      title: 'Modern Full-Stack Skills',
      desc: 'I build responsive frontends and reliable backends using modern tools and scalable patterns.',
      icon: Code2,
    },
    {
      title: 'Clean Architecture',
      desc: 'I write maintainable code with reusable components, strong naming, and performance-aware decisions.',
      icon: Layers,
    },
  ]

  const process = [
    {
      title: 'Discover & Plan',
      desc: 'I clarify goals, user needs, and project scope before writing production code.',
    },
    {
      title: 'Build & Iterate',
      desc: 'I develop features in clean modules with responsive UI and backend integration.',
    },
    {
      title: 'Optimize & Launch',
      desc: 'I polish performance, fix edge cases, and prepare stable deployment-ready builds.',
    },
  ]

  const techFocus = [
    'Next.js',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
    'Framer Motion',
    'REST APIs',
  ]

  return (
    <section className='w-[95%] mx-auto mt-10'>
      <div className='border border-border rounded-2xl p-6 md:p-10 shadow-foreground/20 shadow-lg backdrop-blur-sm bg-background/40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center'>
          <div className='order-2 lg:order-1'>
            <div className='inline-flex items-center gap-2 neon-glow-purple border border-cyan-200 px-4 py-2 rounded-full opacity-80 text-cyan-400 backdrop-blur-md mb-5'>
              <BriefcaseBusiness className='w-4 h-4 text-amber-50' />
              <span>About Me</span>
            </div>

            <h1 className='text-3xl md:text-5xl font-bold mb-5'>
              Building Modern Web Products with <span className='gradient-text'>Purpose</span>
            </h1>

            <p className='text-lg text-secondary leading-relaxed max-w-2xl mb-7'>
              I am Masum Hossain, a full-stack web developer focused on creating fast, reliable, and user-centered digital products. I enjoy solving real problems through clean architecture, thoughtful UI decisions, and maintainable code that scales with growth.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'>
              <div className='rounded-xl border border-border bg-card/40 p-4 text-center'>
                <h3 className='text-2xl font-bold gradient-text'>20+</h3>
                <p className='text-sm text-muted-foreground'>Technologies Used</p>
              </div>
              <div className='rounded-xl border border-border bg-card/40 p-4 text-center'>
                <h3 className='text-2xl font-bold gradient-text'>7+</h3>
                <p className='text-sm text-muted-foreground'>Project Demos</p>
              </div>
              <div className='rounded-xl border border-border bg-card/40 p-4 text-center'>
                <h3 className='text-2xl font-bold gradient-text'>100%</h3>
                <p className='text-sm text-muted-foreground'>Quality Focus</p>
              </div>
            </div>

            <a href='/contact'>
              <button className='btn-primary'>Let\'s Work Together</button>
            </a>
          </div>

          <div className='order-1 lg:order-2'>
            <div className='rounded-2xl overflow-hidden border border-border/60 shadow-md shadow-foreground/10 bg-muted/20 p-2'>
              <Image
                src='/masum.png'
                alt='Masum Hossain portrait'
                width={900}
                height={1100}
                className='w-full h-auto rounded-xl object-cover'
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-4'>
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className='rounded-xl border border-border bg-card/40 p-5 shadow-foreground/10 shadow-sm'
              >
                <Icon className='w-5 h-5 text-primary mb-3' />
                <h2 className='text-lg font-semibold mb-2 text-primary'>{item.title}</h2>
                <p className='text-secondary leading-relaxed'>{item.desc}</p>
              </article>
            )
          })}
        </div>

        <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          <article className='rounded-xl border border-border bg-card/40 p-6 shadow-foreground/10 shadow-sm'>
            <h2 className='text-2xl font-semibold text-primary mb-3'>Professional Overview</h2>
            <p className='text-secondary leading-relaxed mb-4'>
              I specialize in creating modern web applications that balance UI quality, performance, and maintainability. My focus is on delivering real, usable solutions that help businesses move faster and serve users better.
            </p>
            <p className='text-secondary leading-relaxed'>
              From portfolio websites to full-stack products, I enjoy building end-to-end systems with clean architecture and thoughtful details.
            </p>
          </article>

          <article className='rounded-xl border border-border bg-card/40 p-6 shadow-foreground/10 shadow-sm'>
            <h2 className='text-2xl font-semibold text-primary mb-4'>Current Focus Areas</h2>
            <div className='flex flex-wrap gap-2'>
              {techFocus.map((tech) => (
                <span key={tech} className='px-3 py-1 rounded-full border border-border bg-background/70 text-sm text-secondary'>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>

        <div className='mt-10 rounded-xl border border-border bg-card/40 p-6 shadow-foreground/10 shadow-sm'>
          <div className='flex items-center gap-2 mb-5'>
            <Workflow className='w-5 h-5 text-primary' />
            <h2 className='text-2xl font-semibold text-primary'>How I Work</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {process.map((item) => (
              <article key={item.title} className='rounded-lg border border-border bg-background/60 p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <CheckCircle2 className='w-4 h-4 text-primary' />
                  <h3 className='font-semibold text-primary'>{item.title}</h3>
                </div>
                <p className='text-secondary leading-relaxed'>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className='mt-10 rounded-xl border border-border bg-card/40 p-6 text-center shadow-foreground/10 shadow-sm'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-3'>Ready to Build Something Great?</h2>
          <p className='text-secondary max-w-2xl mx-auto mb-5'>
            I am available for freelance work, product collaboration, and long-term development support.
          </p>
          <a href='/contact'>
            <button className='btn-outline'>Discuss Your Project</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
