'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 bg-surface border-b border-outline-variant
        transition-all duration-300
        ${isScrolled ? 'py-4 shadow-sm' : 'py-6'}
      `}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md tracking-tighter text-primary"
        >
          Davina Anandia
        </Link>

        <div className="hidden md:flex gap-gutter items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
          <button className="bg-primary text-on-primary px-6 py-2 border border-primary hover:bg-surface hover:text-primary transition-all duration-300">
            Hire Me
          </button>
        </div>

        <button className="md:hidden p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}