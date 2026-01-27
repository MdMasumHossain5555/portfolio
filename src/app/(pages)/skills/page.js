
import React from 'react'
import { Skill } from '@/app/components/SkillCard'
import skillData from '@/app/utility/skillsLogo'
import { CodeXml, Terminal } from 'lucide-react';
import { FaTools } from "react-icons/fa";

function Skills() {
  const frontend = skillData.filter(skill => skill.category === 'Frontend');
  const backend = skillData.filter(skill => skill.category === 'Backend');
  const tools = skillData.filter(skill => skill.category === 'Tool');
  return (
    <div className='mx-5'>
      <div className='flex gap-2 neon-glow-purple border border-cyan-200 w-40 mx-auto mt-5 mb-7 p-2 rounded-full opacity-60 text-cyan-400 text-center justify-center items-center backdrop-blur-md'>⚡ My Expertise</div>
      <h1 className='text-4xl text-center mb-5 font-semibold'>Skills & <span className='gradient-text'>Technologies</span></h1>
      <p className='text-center mb-15 text-muted-foreground'>A comprehensive overview of my technical skills and proficiencies</p>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex gap-3'><CodeXml className=" text-cyan-500" /><span className='gradient-text'>Frontend</span> Development</h2>
        <div className='mx-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {frontend.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            disc={skill.disc}
            percent={skill.percent}
            skill={skill.name}
          />
        ))}
      </div> 
      </section>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex gap-3'><Terminal className="text-4xl" /><span className='gradient-text'>Backend</span> Development</h2>
        <div className='mx-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {backend.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            disc={skill.disc}
            percent={skill.percent}
            skill={skill.name}
          />
        ))}
      </div>
      </section>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex gap-3'><FaTools className="text-red-500 text-2xl" /><span className='gradient-text'>Tools</span> & Platforms</h2>
        <div className='mx-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {tools.map((skill, index) => (
          <Skill
            key={index}
            src={skill.src}
            disc={skill.disc}
            percent={skill.percent}
            skill={skill.name}
          />
        ))}
      </div>
      </section>
    </div >
  )
}

export default Skills
