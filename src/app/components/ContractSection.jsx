import React from 'react'
import { ArrowRight } from 'lucide-react'

function ContractSection() {
  return (
    <div className='w-[95%] text-center p-10 pb-10 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
            <h2 className='text-3xl font-bold mb-4 text-primary'>Have a project in mind?</h2>
            <p className='text-lg text-secondary mb-6'>Let's work together to create something amazing. I'm always open to discussing new projects and opportunities.</p>
            <button className='btn-primary inline-flex items-center justify-center text-foreground px-6 py-2 rounded-md hover:bg-secondary hover:text-primary transition-colors duration-300 whitespace-nowrap'>Get In Touch<ArrowRight className='ml-2' /></button>
        </div>
  )
}

export default ContractSection
