import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import projectData from '@/app/utility/projectsData'
import { MotionWrapper } from '@/app/components/motion/MotionWrapper'

function Project() {
  return (
    <>
      <h1 className='text-4xl font-bold'>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
        {projectData.map((project, index) => (
        <MotionWrapper key={index} delay={index * 0.10} type="bottom">
          <ProjectCard 
          key={index}
          src={project.src}
          titel={project.titel}
          desc={project.desc}
        />
        </MotionWrapper>

      ))}
      </div>
    </>
  )
}

export default Project
