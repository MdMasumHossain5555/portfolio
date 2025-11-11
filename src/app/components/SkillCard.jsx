import React from 'react'
import Image from 'next/image';

function SkillCard({src=""}) {
  return (
    <div className='flex flex-col items-center justify-center bg-transparent p-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300'>
        <div className='h-20 w-20 relative mb-2'>
          <Image src={src} fill alt="skill icon"/>
        </div>
    </div>
  )
}

export default SkillCard;
