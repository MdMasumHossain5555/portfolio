"use client";
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



import { motion } from "framer-motion";

export function Skill({ skill, percent, src }) {

  const getColor = () => {
    if (percent < 40) return "bg-red-500";
    if (percent < 70) return "bg-yellow-400";
    return "bg-green-500";
  };

  return (
    <div className="w-full max-w-xl p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition">

      {/* Top section */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
          <Image
            src={src}
            alt={skill}
            width={24}
            height={24}
          />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{skill}</h3>
        </div>

        <span className="text-sm font-medium text-gray-600">
          {percent}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${getColor()}`}
        />
      </div>

    </div>
  );
}

