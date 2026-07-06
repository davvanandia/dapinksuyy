'use client'

import { useEffect, useRef } from 'react'

export default function Contact() {
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
      id="contact"
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-stack-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-start">
        <div className="reveal">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
            Let's start a <br />conversation.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-12">
            Whether you have a specific project in mind or just want to say hi,
            my inbox is always open for interesting collaborations.
          </p>
          <div className="space-y-6">
            <a
              href="mailto:hello@davinaanandia.com"
              className="block font-headline-md text-headline-md text-primary hover:underline underline-offset-8"
            >
              hello@davinaanandia.com
            </a>
            <div className="flex gap-6 mt-8">
              {['LinkedIn', 'Instagram', 'Dribbble', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal bg-white p-8 md:p-12 border border-outline-variant">
          <form className="space-y-8">
            <div>
              <label className="font-label-caps text-label-caps text-primary block mb-2">
                FULL NAME
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border-0 border-b border-primary p-0 py-2 focus:ring-0 focus:border-primary placeholder:text-outline-variant font-body-md"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-primary block mb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-transparent border-0 border-b border-primary p-0 py-2 focus:ring-0 focus:border-primary placeholder:text-outline-variant font-body-md"
                suppressHydrationWarning
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-primary block mb-2">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-0 border-b border-primary p-0 py-2 focus:ring-0 focus:border-primary placeholder:text-outline-variant font-body-md resize-none"
                suppressHydrationWarning
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps border border-primary hover:bg-surface hover:text-primary transition-all duration-300"
              suppressHydrationWarning
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}