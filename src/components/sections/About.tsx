'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function About() {
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
      id="about"
      className="bg-surface-container-low py-stack-xl"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          <div className="w-full md:w-1/2 reveal">
            <div className="aspect-[4/5] bg-surface-dim relative overflow-hidden border border-outline-variant">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Bxu4LqLm-cyg2zFZJFHe1m9cOlmE1NWljJe-hyzat1TjhnnBoBmDsJaviKgRPCvLMo1IejqBsDaoq0MzPdcnWbIMpYZs2Z8zZPixgxkxVaX3EnzKvJip5PwD18PAHezwcPn2qWHAbY1fQmgtIhkq7I6ZCqznjbRB_EPEb_G4uGo71WJ3bWgE1AbRAsnplDaAJccKNgvrII9Y6_bPnE_7KhFISfgxQZTC10Y0tZAr2bWxFBJKIGH4"
                alt="A sophisticated black and white professional portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 reveal">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
              The Mind Behind the Canvas
            </h2>
            <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
              <p>
                I believe that design is not just what it looks like, but how it
                works and, more importantly, how it feels. My journey began with
                a fascination for typography and the silent power of whitespace
                — elements that still define my aesthetic today.
              </p>
              <p>
                I am currently a freshman at Telkom University, pursuing a
                degree in Information Systems (S1 Sistem Informasi). This
                academic path follows my graduation from SMK Prestasi Prima,
                where I specialized in Software Engineering and Game
                Development, providing me with a robust technical foundation for
                my creative pursuits.
              </p>
              <p>
                Over the last few years, I have collaborated with various brands
                to translate complex ideas into elegant, intuitive digital
                realities. My approach is rooted in deep research, strategic
                thinking, and an unwavering commitment to minimalist precision.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">
                  07+
                </h4>
                <p className="font-label-caps text-label-caps">Years Experience</p>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">
                  42
                </h4>
                <p className="font-label-caps text-label-caps">Projects Completed</p>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">
                  12
                </h4>
                <p className="font-label-caps text-label-caps">Design Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}