import React from 'react'
import ProjectCard from './ProjectCard'
import { MotionWrapper } from './motion/MotionWrapper'
import StaggeredItem from './motion/StaggeredItem'
import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import projectData from '@/app/utility/projectsData';

const projects = [
  {
    src: "/projectImage/doctors.png",
    titel: "Doctor's",
    desc: "this is the website of a doctor's appointment booking system. it allows users to book appointments with doctors online."
  },
  {
    src: "/projectImage/doctors.png",
    titel: "Doctor's",
    desc: "this is my picture. it is for test"
  },
  {
    src: "/projectImage/doctors.png",
    titel: "Doctor's",
    desc: "this is my picture. it is for test"
  },
];

function ProjectSection() {
  return (
    <div className='w-[95%] p-3 md:p-7 pb-10 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <MotionWrapper type='left' >
        <h2 className='text-primary text-3xl md:text-4xl'>My Project</h2>
      </MotionWrapper>

      <div className='grid grid-cols-1 p-5 md:grid-cols-2 gap-3 '>
        {projectData.slice(0, 2).map((project, index) => (
          <MotionWrapper delay={index * 0.20} key={index} type={"left"}>
            <ProjectCard
              key={index}
              src={project.src}
              titel={project.titel}
              desc={project.desc}
              link={project.link}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              category={project.category}
            />
          </MotionWrapper>
        ))}
      </div>
      <Link href={"/pages/projects"}>
          <div className="btn-outline w-52 mx-auto mt-6 flex items-center justify-center gap-2">
            <h3>See All Projects</h3>
            <MotionWrapper type='leftRightPalse'>
              <ChevronsRight />
            </MotionWrapper>
          </div>
        </Link>
    </div>
  )
}

export default ProjectSection
