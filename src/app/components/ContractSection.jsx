import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function ContractSection() {
  return (
    <div className='w-[95%] mx-auto mt-10 border border-border rounded-2xl p-6 md:p-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <div className='flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-10'>
        <div className='w-full text-center lg:w-1/2 lg:text-left'>
          <h2 className='text-3xl font-bold mb-4 text-primary'>Have a Project in Mind?</h2>
          <p className='text-lg text-secondary mb-6'>Let's build something meaningful together. I help founders and teams design and develop fast, scalable web products, from MVPs to long-term platforms.</p>
          <a href="/contact">
            <button className='btn-primary inline-flex items-center justify-center text-foreground px-6 py-2 rounded-lg hover:bg-secondary hover:text-primary transition-colors duration-300 whitespace-nowrap'>
              Start a Project
              <ArrowRight className='ml-2' />
            </button>
          </a>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='relative mx-auto max-w-xl overflow-hidden rounded-2xl border border-border/60 bg-muted/20 p-2'>
            <Image
              src='/projectInMind.png'
              alt='Developer working on a project'
              width={960}
              height={768}
              className='h-auto w-full rounded-xl object-cover'
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractSection
