'use client'

import { useEffect, useRef } from 'react'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/constants'

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('active')
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="projects"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl"
    >
      <div className="mb-stack-lg reveal active">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Selected Works
        </h2>
        <div className="w-20 h-1 bg-primary mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-stack-md">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            className={index % 2 === 1 ? 'md:mt-24' : ''}
          />
        ))}
      </div>
    </section>
  )
}