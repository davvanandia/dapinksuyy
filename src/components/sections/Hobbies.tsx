'use client'

import { useEffect, useRef } from 'react'

export default function Hobbies() {
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
      id="hobbies"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl"
    >
      <div className="mb-stack-lg reveal text-center active">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Beyond the Screen
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">
          The things that keep me inspired and balanced.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px] reveal">
        {/* Photography */}
        <div className="md:col-span-2 md:row-span-2 bg-surface-container-high p-8 flex flex-col justify-between border border-outline-variant hover:border-primary transition-all group">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-4xl text-primary">
              photo_camera
            </span>
            <p className="font-label-caps text-label-caps border border-primary px-3 py-1">
              PASSION
            </p>
          </div>
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              Film Photography
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Capturing the world through a 35mm lens, finding beauty in the
              grain and the unexpected light leaks.
            </p>
          </div>
        </div>

        {/* Reading */}
        <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-col justify-center border border-outline-variant hover:border-primary transition-all">
          <div className="flex items-center gap-4 mb-4">
            <span className="material-symbols-outlined text-primary">
              menu_book
            </span>
            <h3 className="font-headline-md text-headline-md text-primary">
              Literature
            </h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A relentless reader of existential philosophy and contemporary
            fiction. Current favorite: "Meditations" by Marcus Aurelius.
          </p>
        </div>

        {/* Traveling */}
        <div className="md:col-span-1 bg-surface-container p-8 flex flex-col justify-center items-center text-center border border-outline-variant hover:border-primary transition-all">
          <span className="material-symbols-outlined text-4xl text-primary mb-4">
            flight
          </span>
          <h3 className="font-label-caps text-label-caps text-primary">Travel</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            15 Countries &amp; counting.
          </p>
        </div>

        {/* Architecture */}
        <div className="md:col-span-1 bg-primary text-on-primary p-8 flex flex-col justify-center items-center text-center border border-primary hover:bg-surface hover:text-primary transition-all group">
          <span className="material-symbols-outlined text-4xl mb-4 transition-colors group-hover:text-primary">
            architecture
          </span>
          <h3 className="font-label-caps text-label-caps">Brutalism</h3>
          <p className="font-body-md text-body-md opacity-80 group-hover:opacity-100 mt-2">
            Design Inspiration
          </p>
        </div>
      </div>
    </section>
  )
}