'use client'
import React from 'react'
import ProjectCard from '@/app/components/ProjectCard'
import projectData from '@/app/utility/projectsData'
import { MotionWrapper } from '@/app/components/motion/MotionWrapper'
import ProjectCategory from '@/app/components/ProjectCategory'
import { useState } from 'react'

const categories = ['All', 'Frontend', 'Backend', 'Full Stack']


function Project() {
  const [filteredProjects, setFilteredProjects] = useState(projectData);
  const handleCategoryChange = (category) => {
    if (category === 'All') {
      // Show all projects
      setFilteredProjects(projectData);
    } else {
      // Filter projects based on category
      setFilteredProjects(projectData.filter(project => project.category === category));
    }
  }
  return (
    <>
      <div className='flex gap-2 neon-glow-purple border border-cyan-200 w-40 mx-auto mt-3 mb-5 p-2 rounded-full opacity-60 text-cyan-400 text-center justify-center items-center backdrop-blur-md'>💼 My Portfolio</div>
      <h1 className='text-5xl mt-7 font-semi-bold text-center'>Featured <span className='gradient-text'>Projects</span></h1>
      <p className='text-center text-muted-foreground mt-3'>Explore my latest work and creative solutions across various domains</p>
      <ProjectCategory categories={categories} onCategoryChange={handleCategoryChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
        {filteredProjects.map((project, index) => (
        <MotionWrapper key={index} delay={index * 0.10} type="bottom">
          <ProjectCard 
          key={index}
          src={project.src}
          titel={project.titel}
          desc={project.desc}
          link={project.link}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          category={project.category}
          status={project.status}
        />
        </MotionWrapper>

      ))}
      </div>
    </>
  )
}

export default Project
