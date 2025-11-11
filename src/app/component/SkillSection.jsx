import React from 'react';
import {  SiReact, SiGithub, SiFigma } from "react-icons/si";



function SkillSection() {
  return (
    <div className='w-[90%] bnpmg-foreground/30 p-10 border rounded-md text-center mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm'>
      <div className="flex gap-4">
        <SiReact color="#61DAFB" size={48} />
      {/* <SiVisualstudiocode color="#007ACC" size={48} /> */}
      <SiGithub color="#181717" size={48} />
      <SiFigma color="#F24E1E" size={48} />
      </div>
    </div>
  )
}

export default SkillSection
