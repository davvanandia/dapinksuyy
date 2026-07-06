'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updatePosition)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updatePosition)
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div
      className="custom-cursor hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        backgroundColor: isHovering ? 'rgba(0,0,0,0.05)' : 'transparent',
        transition: 'transform 0.15s ease-out, background-color 0.2s ease',
      }}
    />
  )
}