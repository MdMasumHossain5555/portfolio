import React from 'react'
import Image from 'next/image'
import { IoEyeOutline } from "react-icons/io5";

function ProjectCard({src, titel, desc}) {
  return (
    <div className="w-70 h-80 p-2 border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm flex flex-col items-center gap-4">
        <Image width={300} height={100} src={src} alt={titel} className="max-w-full h-auto" />
        <h3 className="text-2xl text-foreground">{titel}</h3>
        <p className="text-muted-foreground">{desc}</p>
        <div className='cursor-pointer opacity-0 bg-primary/60 backdrop-blur-md w-full h-full rounded-b-md absolute top-0 flex flex-col justify-center items-center left-0 hover:opacity-100'>
            <IoEyeOutline size={100} className=" text-primary-foreground " />
            <h3 className='text-primary-foreground'>View Details</h3>
        </div>
    </div>
  )
}

export default ProjectCard
