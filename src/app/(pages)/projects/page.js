import React from 'react'
import { Card } from '@/app/components/ProjectCard'
import projectData from '@/app/utility/projectsData'
import { MotionWrapper } from '@/app/components/motion/MotionWrapper'

function Project() {
  return (
    <div className='mt-15 p-5 border-1 rounded-lg'>
      <h1 className='text-4xl font-bold'>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {projectData.map((project, index) => (
        <MotionWrapper key={index} delay={index * 0.10} type="bottom">
          <Card 
          key={index}
          src={project.src}
          titel={project.titel}
          desc={project.desc}
        />
        </MotionWrapper>

      ))}
      </div>
    </div>
  )
}

export default Project
