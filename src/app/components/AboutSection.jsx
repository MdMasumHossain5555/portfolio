import React from 'react'
import { ArrowRight } from 'lucide-react'
function AboutSection() {
    return (
        <div className='w-[90%] text-center p-10 pb-10 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
            <h2 className='text-3xl font-bold mb-4 text-primary'>About Me</h2>
            <p className='text-lg text-secondary mb-6'>a passionate developer specializing in creating beautiful and functional web applications. Explore my projects and services to see how I can help bring your ideas to life.</p>
            <button className='btn-primary inline-flex items-center justify-center text-foreground px-6 py-2 rounded-md hover:bg-secondary hover:text-primary transition-colors duration-300 whitespace-nowrap'>Learn More About Me <ArrowRight className='ml-2' /></button>
        </div>
    )
}

export default AboutSection