import React from 'react'
import { MotionWrapper } from './motion/MotionWrapper'
import { Download } from 'lucide-react'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StaggeredItem from './motion/StaggeredItem';
function Hero() {
  return (
    <div className='w-[90%]  p-10 overflow-hidden rounded-md text-center mx-auto mt-20'>
      <div className="grid grid-cols-1 md:grid-cols-2 content-around items-center gap-10">
        <MotionWrapper className='flex flex-col content-center items-center text-center ' type="left">
          <StaggeredItem type={"left"}>
            <img src="/hero.png" alt="Hero Image" className='w-50 h-50 rounded-full shadow-lg w-52 h-52 rounded-full shadow-lg block mx-auto' />
          </StaggeredItem>
          <StaggeredItem type={"left"}>
            <h2 className='text-3xl'><span className='text-primary'>Masum</span> Hossain</h2>
            <p>Full Stake developer.</p>
          </StaggeredItem>
          <StaggeredItem className='flex gap-4 mt-2' type={"left"} >
            <FaLinkedin className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md' />
            <FaGithubSquare className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md' />
            <FaFacebookSquare className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md' />
            <MdEmail className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md' />
          </StaggeredItem>
        </MotionWrapper>
        <MotionWrapper type="right">
          <div className='flex flex-col text-start'>
            <StaggeredItem type={"right"}>
              <p className='mb-15'>Hello There!</p>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
              <h1 className='text-4xl font-bold mb-4 text-primary'>I am Masum Hossain,</h1>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
              <p className='text-lg text-secondary mb-6'> a passionate developer specializing in creating beautiful and functional web applications. Explore my projects and services to see how I can help bring your ideas to life.</p>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
            <div className='flex content-around items-center'>
              <button className='px-6 py-2 block mx-auto rounded-full transition-all border border-primary bg-primary/20 text-primary duration-600 hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40'>Get in Touch</button>
              <button className='px-6 py-2 flex gap-2 mx-auto rounded-full transition-all border border-primary bg-primary/20 text-foreground duration-600 hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40'>Download CV <MotionWrapper type='upDownPalse'><Download /></MotionWrapper> </button>
            </div>
            </StaggeredItem>
      </div>
    </MotionWrapper>
      </div >
    </div >
  )
}

export default Hero
