'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
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
      className="relative min-h-[80vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl reveal"
    >
      <p className="font-label-caps text-label-caps text-on-surface-variant mb-6">
        CREATIVE PROFESSIONAL
      </p>
      <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-primary max-w-4xl">
        Crafting narratives through{' '}
        <span className="italic font-normal">design</span> &amp;{' '}
        <span className="italic font-normal">strategy</span>.
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-8 mb-12">
        Davina Anandia is a multi-disciplinary creative specialist focused on
        building premium digital experiences that bridge the gap between human
        emotion and functional excellence.
      </p>
      <Link
        href="#projects"
        className="inline-flex items-center group w-fit"
      >
        <span className="bg-primary text-on-primary px-10 py-4 font-label-caps text-label-caps border border-primary group-hover:bg-surface group-hover:text-primary transition-all duration-300">
          View My Work
        </span>
        <span className="ml-4 material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-2">
          arrow_forward
        </span>
      </Link>
    </section>
  )
}