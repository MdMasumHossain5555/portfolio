import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Layers3, Tag } from 'lucide-react'
import projectData from '@/app/utility/projectsData'

const createSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: createSlug(project.titel),
  }))
}

async function ProjectDetailPage({ params }) {
  const resolvedParams = await params
  const slug = Array.isArray(resolvedParams?.slug) ? resolvedParams.slug[0] : resolvedParams?.slug
  const project = projectData.find((item) => createSlug(item.titel) === slug)

  if (!project) {
    notFound()
  }

  return (
    <section className='w-[95%] mx-auto mt-6'>
      <div className='mb-4'>
        <Link href='/projects' className='btn-outline inline-flex items-center gap-2'>
          <ArrowLeft className='w-4 h-4' />
          Back to Projects
        </Link>
      </div>

      <div className='border border-border rounded-2xl p-5 md:p-8 shadow-foreground/20 shadow-lg backdrop-blur-sm bg-background/40'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='rounded-2xl overflow-hidden border border-border/60 bg-card/30 p-2'>
            <Image
              src={project.src}
              alt={project.titel}
              width={1200}
              height={800}
              className='w-full h-auto rounded-xl object-cover'
              priority={false}
            />
          </div>

          <div>
            <div className='flex flex-wrap items-center gap-2 mb-3'>
              <span className='text-xs md:text-sm px-3 py-1 rounded-full border border-cyan-200 gradient-text'>
                {project.category}
              </span>
              <span className='text-xs md:text-sm px-3 py-1 rounded-full border border-cyan-200 gradient-text'>
                {project.status}
              </span>
            </div>

            <h1 className='text-3xl md:text-4xl font-bold text-primary mb-4'>{project.titel}</h1>
            <p className='text-secondary leading-relaxed mb-6'>{project.desc}</p>

            <div className='mb-6'>
              <div className='flex items-center gap-2 mb-3'>
                <Tag className='w-4 h-4 text-primary' />
                <h2 className='text-lg font-semibold text-primary'>Technologies</h2>
              </div>
              <div className='flex flex-wrap gap-2'>
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className='px-3 py-1 text-sm rounded-full border border-border bg-card/40 text-secondary'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              {project.liveView && (
                <Link href={project.liveView} target='_blank' rel='noopener noreferrer' className='btn-primary inline-flex items-center gap-2'>
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </Link>
              )}
              {project.frontend && (
                <Link href={project.frontend} target='_blank' rel='noopener noreferrer' className='btn-outline inline-flex items-center gap-2'>
                  <Github className='w-4 h-4' />
                  Frontend Code
                </Link>
              )}
              {project.category !== 'Frontend' && project.backend && (
                <Link href={project.backend} target='_blank' rel='noopener noreferrer' className='btn-outline inline-flex items-center gap-2'>
                  <Layers3 className='w-4 h-4' />
                  Backend Code
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className='mt-8 border-t border-border pt-6'>
          <h2 className='text-2xl font-semibold text-primary mb-3'>Project Overview</h2>
          <p className='text-secondary leading-relaxed'>
            This project demonstrates practical implementation of modern web development concepts, including responsive UI, reusable components, and structured architecture. The stack was selected to ensure good performance, maintainability, and smooth user experience across devices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailPage
