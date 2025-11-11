import React from 'react';
import SkillCard from './SkillCard';
import { ChevronsRight } from 'lucide-react';
import { MotionWrapper } from './motion/MotionWrapper';
import Link from 'next/link';
import skillsLogo from '@/app/utility/skillsLogo';


const skills = skillsLogo;





function SkillSection() {
  return (
    <div className='w-[90%] bnpmg-foreground/30 p-10 border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <h2 className='text-4xl mb-2'>My Skills</h2>
      <div className="flex gap-4 overflow-hidden">
        <MotionWrapper className='flex min-w-[200%]' type='infinityCarousel'>
          {skills.map((skill) => (
            <SkillCard key={skill.id} src={skill.src} />
          ))}
          {skills.map((skill) => (
            <SkillCard key={skill.id} src={skill.src} />
          ))}
        </MotionWrapper>
        <Link href={"/pages/skills"}>
        <div className='absolute flex flex-col justify-center text-primary-foreground backdrop-blur-sm bg-primary/10 rounded-md hover:bg-primary/70 hover:shadow hover:shadow-muted-foreground items-center top-0 right-0  h-full w-25 md:w-40 mb-2'>
          <h3>See All</h3>
          <MotionWrapper type='leftRightPalse'>
            <ChevronsRight />
          </MotionWrapper>
        </div>
        </Link>
      </div>
    </div >
  )
}

export default SkillSection
