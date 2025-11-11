import React from 'react'

function ProjectCard({width, height, src, titel, desc}) {
  return (
    <div className="project-card" style={{width: width, height: height}}>
        <img src={src} alt={titel} className="project-image" />
        <h3 className="text-2xl text-foreground">{titel}</h3>
        <p className="text-muted-foreground">{desc}</p>
      
    </div>
  )
}

export default ProjectCard
