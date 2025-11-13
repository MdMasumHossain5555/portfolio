import React from 'react'
import ProjectCard from './ProjectCard'
import { MotionWrapper } from './motion/MotionWrapper'
import StaggeredItem from './motion/StaggeredItem'
import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';

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
    <div className='w-[90%] p-2 pb-10 border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <MotionWrapper type='left' >
        <h2 className='text-3xl md:text-4xl'>My Project</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-4 overflow-hidden'>
          {projects.map((project, index) => (
            <StaggeredItem key={index} type={"left"}>
              <ProjectCard
                key={index}
                src={project.src}
                titel={project.titel}
                desc={project.desc}
              />
            </StaggeredItem>
          ))}
          <Link href={"/pages/projects"}>
          <div className="w-70 xl:w-60 h-80 p-2 bg-primary/10 hover:bg-primary/70 hover:shadow hover:shadow-muted-foreground border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm flex flex-col justify-center items-center gap-4">
            <h3 className='text-4xl text-primary-foreground'>See All</h3>
            <MotionWrapper type='leftRightPalse'>
              <ChevronsRight />
            </MotionWrapper>
          </div>
          </Link>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default ProjectSection
