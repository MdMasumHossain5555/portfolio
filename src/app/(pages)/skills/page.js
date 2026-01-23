
import React from 'react'
import { Skill } from '@/app/components/SkillCard'
import skillData from '@/app/utility/skillsLogo'

function Skills() {
  return (
    <div className='mt-15 border-1 rounded-lg p-5'>
      <h1 className='text-4xl '>My Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {skillData.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            disc={skill.disc}
          />
        ))}
      </div>
    </div >
  )
}

export default Skills
