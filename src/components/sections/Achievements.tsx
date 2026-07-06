'use client'

import { useEffect, useRef } from 'react'
import { milestones } from '@/lib/constants'

export default function Achievements() {
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
      id="achievements"
      className="bg-primary text-on-primary py-stack-xl"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 reveal">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">
              Milestones
            </h2>
            <p className="font-body-lg text-body-lg opacity-80">
              A timeline of recognition and professional evolution.
            </p>
          </div>

          <div className="md:col-span-8 space-y-12 reveal">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="flex gap-8 items-start border-b border-on-primary-fixed-variant pb-8 group"
              >
                <span className="font-headline-md text-headline-md opacity-30 group-hover:opacity-100 transition-opacity">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md opacity-70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}