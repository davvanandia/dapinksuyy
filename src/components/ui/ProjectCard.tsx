'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  category: string
  title: string
  description: string
  cta: string
  href: string
  image: string
  alt: string
  className?: string
}

export default function ProjectCard({
  category,
  title,
  description,
  cta,
  href,
  image,
  alt,
  className = '',
}: ProjectCardProps) {
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
    <div
      ref={ref}
      className={`reveal border border-outline-variant hover:border-primary transition-colors duration-500 group ${className}`}
    >
      <div className="image-hover-zoom aspect-[16/10] bg-surface-container relative">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
        />
      </div>
      <div className="p-8">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
          {category}
        </p>
        <h3 className="font-headline-md text-headline-md text-primary mb-4">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          {description}
        </p>
        <Link
          href={href}
          className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 group-hover:pr-4 transition-all inline-block"
        >
          {cta}
        </Link>
      </div>
    </div>
  )
}