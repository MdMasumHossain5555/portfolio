import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { MotionWrapper } from './motion/MotionWrapper'
function AboutSection() {
    return (
        <div className='w-[95%] p-6 md:p-8 lg:p-10 border border-border rounded-2xl bg-background/40 mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
            <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-10'>
                <MotionWrapper type='left' delay={0.1} className='w-full lg:w-1/2'>
                    <div className='rounded-2xl overflow-hidden border border-border/60 shadow-md shadow-foreground/10'>
                    <Image
                        src='/aboautMe.png'
                        alt='Developer working on a laptop'
                        width={1200}
                        height={800}
                        className='w-full h-auto max-w-xl mx-auto lg:mx-0'
                        priority={false}
                    />
                    </div>
                </MotionWrapper>

                <MotionWrapper type='right' delay={0.2} className='w-full lg:w-1/2 text-center lg:text-left'>
                    <h2 className='text-3xl font-bold mb-4 text-primary'>About Me</h2>
                    <p className='text-lg text-secondary mb-6 max-w-prose mx-auto lg:mx-0 leading-relaxed'>I am a full-stack web developer focused on building responsive, scalable, and user-friendly applications. I enjoy solving real business problems through practical design, performance-focused code, and reliable deployment.</p>
                    <a href="/about"><button className='btn-primary inline-flex items-center justify-center text-foreground px-6 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300 whitespace-nowrap'>Learn More About Me <ArrowRight className='ml-2' /></button></a>
                </MotionWrapper>
            </div>
        </div>
    )
}

export default AboutSection