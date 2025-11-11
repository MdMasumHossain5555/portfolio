import React from 'react';
import SkillCard from './SkillCard';
import { ChevronsRight } from 'lucide-react';
import { MotionWrapper } from './motion/MotionWrapper';
import Link from 'next/link';

const skills = [
  {
    id: 1,
    category: "Frontend",
    src: "/assets/html.svg",
  },
  {
    id: 2,
    catrgory: "Frontend",
    src: "/assets/css.svg",
  },
  {
    id: 3,
    category: "Frontend",
    src: "/assets/javascript.svg",
  },
  {
    id: 4,
    category: "Frontend",
    src: "/assets/react.svg",
  },
  {
    id: 5,
    category: "Backend",
    src: "/assets/nodejs.svg",
  },
  {
    id: 6,
    category: "Frontend",
    src: "/assets/nextjs.svg",
  },
  {
    id: 7,
    category: "Backend",
    src: "/assets/mongodb.svg",
  },
  {
    id: 8,
    category: "Tool",
    src: "/assets/git.svg",
  },
  {
    id: 9,
    category: "Tool",
    src: "/assets/github.svg",
  },
  {
    id: 10,
    category: "Frontend",
    src: "/assets/tailwind.svg",
  },
  {
    id: 11,
    category: "Tool",
    src: "/assets/figma.svg",
  },
  {
    id: 12,
    category: "Backend",
    src: "/assets/expressjs.svg",
  },
  {
    id: 13,
    category: "Frontend",
    src: "/assets/scss.svg",
  },
  {
    id: 14,
    category: "Frontend",
    src: "/assets/sass.svg",
  },
  {
    id: 15,
    category: "Tool",
    src: "/assets/npm.svg",
  },
  {
    id: 16,
    category: "Tool",
    src: "/assets/yarn.svg",
  },
  {
    id: 17,
    category: "Tool",
    src: "/assets/vscode.svg",
  },
  {
    id: 18,
    category: "Backend",
    src: "/assets/mysql.svg",
  },
  {
    id: 19,
    category: "Tool",
    src: "/assets/postman.svg",
  },
  {
    id: 20,
    category: "Backend",
    src: "/assets/firebase.svg",
  },
  {
    id: 21,
    category: "Tool",
    src: "/assets/vercel.svg",
  },
  {
    id: 22,
    category: "Tool",
    src: "/assets/render.svg",
  },
  {
    id: 23,
    category: "Tool",
    src: "/assets/vite.svg",
  },
];





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
