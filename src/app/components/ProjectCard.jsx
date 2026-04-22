import React from 'react'
import Image from 'next/image'
import { IoEyeOutline } from "react-icons/io5";
import Link from 'next/link';
import { Github, ExternalLink} from 'lucide-react';

const createSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

const truncateText = (text = '', maxLength = 120) => {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trim()}...`
}

function ProjectCard({ src, titel, desc, link, githubLink, liveLink, category, status }) {
  const detailHref = link && link !== '#' ? link : `/projects/${createSlug(titel)}`
  const shortDesc = truncateText(desc, 130)

  return (
    <div className='relative group'>
      <Link href={detailHref}>
      <div className="glass-card glass-card-hover w-[98%] md:w-lg h-100 p-8 md:p-10 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm flex flex-col items-center gap-4 text-center">
        <div className='absolute top-1 left-1 gradient-text font-mono text-[12px] border border-cyan-200 rounded-2xl px-2 py-1'>{category}</div>
        <div className='absolute top-1 right-1 gradient-text font-mono text-[12px] border border-cyan-200 rounded-2xl px-2 py-1'>{status}</div>
        <Image width={500} height={300} src={src} alt={titel} className="max-w-full h-25 md:h-50 rounded-md object-cover" />
        <h3 className="text-2xl text-foreground leading-tight">{titel}</h3>
        <p className="text-muted-foreground leading-relaxed min-h-12">{shortDesc}</p>
        <div className='glass-card glass-card-hover cursor-pointer opacity-0 bg-primary/40 backdrop-blur-md w-full h-full rounded-md absolute top-0 flex flex-col justify-center items-center left-0 hover:opacity-100'>
          <IoEyeOutline size={50} className=" text-primary-foreground opacity-70" />
          <h3 className='text-primary-foreground opacity-70'>View Details</h3>
        </div>
      </div>
    </Link>
    <div className='absolute opacity-0 group-hover:opacity-100 flex top-10 right-20 gap-4 z-100'>
      <Link href={liveLink || "#"} target="_blank" rel="noopener noreferrer">
        <ExternalLink className='!rounded-full !w-12 !p-2 !h-12 btn-primary !text-black' />
      </Link>
      <Link href={githubLink || "#"} target="_blank" rel="noopener noreferrer">
        <Github className='!rounded-full !w-12 !p-2 !h-12 btn-primary !text-black' />
      </Link>
    </div>

    </div>
  )
}

export default ProjectCard


export const Card = ({ src, titel, desc, link }) => {
  const detailHref = link && link !== '#' ? link : `/projects/${createSlug(titel)}`
  const shortDesc = truncateText(desc, 90)

  return (
    <Link href={detailHref}>
      <div className="glass-card glass-card-hover w-70 h-80 p-2 border border-border rounded-md mx-auto mt-10 shadow-foreground/20 shadow-lg backdrop-blur-sm flex flex-col items-center gap-4">
        <Image width={300} height={100} src={src} alt={titel} />
        <h3 className="text-2xl text-foreground">{titel}</h3>
        <p className="text-muted-foreground text-center leading-relaxed">{shortDesc}</p>
        <div className='glass-card glass-card-hover cursor-pointer opacity-0 bg-primary/60 backdrop-blur-md w-full h-full rounded-md absolute top-0 flex flex-col justify-center items-center left-0 hover:opacity-100'>
          <IoEyeOutline size={50} className=" text-primary-foreground opacity-70" />
          <h3 className='text-primary-foreground opacity-70'>View Details</h3>
        </div>
      </div>
    </Link>
  )
}