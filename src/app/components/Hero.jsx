import React from 'react'
import { MotionWrapper } from './motion/MotionWrapper'
import { Download } from 'lucide-react'
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import StaggeredItem from './motion/StaggeredItem';
import HackerCircle from './HackerCircle';
function Hero() {
  return (
    <div className='w-[95%]  p-10 overflow-hidden rounded-md text-center mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 content-around items-center gap-10">
        <MotionWrapper className='flex flex-col content-center items-center text-center ' type="left">


          {/* <div className='relative w-70 h-70 mx-auto'>
          <MotionWrapper type="rotateClockwise">
            <div className='absolute inset-0 border-2 border-dashed border-primary rounded-full'>
            </div>
          </MotionWrapper>
          <MotionWrapper type="rotateAntiClockwise">
            <div className='absolute inset-0 border-2 border-dashed border-primary rounded-full'>
            </div>
          </MotionWrapper>
          <StaggeredItem type={"left"}>
            <img src="/masum.png" alt="Hero Image" className='w-70 h-70 rounded-full shadow-lg rounded-full shadow-lg block mx-auto' />
          </StaggeredItem>
          </div> */}

          <StaggeredItem type={"left"}>
            <HackerCircle />
          </StaggeredItem>
          <StaggeredItem type={"left"}>
            <h2 className='text-4xl'><span className='gradient-text'>Masum</span> Hossain</h2>
            <p>Full Stake developer.</p>
          </StaggeredItem>
          <StaggeredItem className='flex gap-4 mt-2' type={"left"} >
            <a href="https://www.linkedin.com/in/mdmasumhossain5/" target='blank'><FaLinkedin className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40 cursor-pointer' /></a>
            <a href="https://github.com/MdMasumHossain5555" target='blank'><FaGithubSquare className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40 cursor-pointer' /></a>
            <a href="https://www.facebook.com/mostafijur.rahman.241326" target='blank'><FaFacebookSquare className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40 cursor-pointer' /></a>
            <a href="mailto:masumhossain1712@gmail.com"target='blank'><MdEmail className='w-8 h-8 text-primary bg-primary-foreground block mx-auto border-0 rounded-md hover:bg-primary hover:text-background hover:border-background hover:shadow-primary/40 cursor-pointer' /></a>
          </StaggeredItem>
        </MotionWrapper>
        <MotionWrapper type="right">
          <div className='flex flex-col text-start'>
            <StaggeredItem type={"right"}>
              <p className='mb-15'>Hello There!</p>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
              <h1 className='text-5xl font-bold mb-6 gradient-text'>I am Masum Hossain,</h1>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
              <p className='text-lg text-secondary mb-6'> a passionate developer specializing in creating beautiful and functional web applications. Explore my projects and services to see how I can help bring your ideas to life.</p>
            </StaggeredItem>
            <StaggeredItem type={"right"}>
              <div className='flex flex-col mt-15 md:flex-row gap-4 content-around items-center'>
                <a href="/contact"><button className='btn-primary cursor-pointer items-center'>Get in Touch</button></a>
                <a href="/Resume of Web Developer-Masum.pdf" download><button className='btn-outline cursor-pointer flex items-center'>Download CV <MotionWrapper type='upDownPalse'><Download /></MotionWrapper> </button></a>
              </div>
            </StaggeredItem>
          </div>
        </MotionWrapper>
      </div >
    </div >
  )
}

export default Hero
