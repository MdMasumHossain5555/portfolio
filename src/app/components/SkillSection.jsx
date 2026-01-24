import React from 'react';
import SkillCard from './SkillCard';
import { ChevronsRight } from 'lucide-react';
import { MotionWrapper } from './motion/MotionWrapper';
import Link from 'next/link';
import skillsLogo from '@/app/utility/skillsLogo';


const skills = skillsLogo;





function SkillSection() {
  return (
    <div className='w-[90%] p-10 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <h2 className='text-primary text-4xl mb-2'>My Skills</h2>
      <div className="flex gap-4 overflow-hidden">
        <MotionWrapper className='flex min-w-[200%]' type='infinityCarousel'>
          {skills.map((skill) => (
            <SkillCard key={skill.id} src={skill.src} />
          ))}
          {skills.map((skill) => (
            <SkillCard key={skill.id} src={skill.src} />
          ))}
        </MotionWrapper>
      </div>
      <Link href={"/pages/skills"}>
          <div className='btn-outline w-50 mx-auto mt-6 flex items-center justify-center gap-2'>
            <h3>See All Skill</h3>
            <MotionWrapper type='leftRightPalse'>
              <ChevronsRight />
            </MotionWrapper>
          </div>
        </Link> 
    </div >
  )
}

export default SkillSection
