import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    let mousePos = { x: 0, y: 0 }
    let trailItems = []

    const handleMouseMove = (e) => {
      mousePos = { x: e.clientX, y: e.clientY }
      setMousePosition(mousePos)
    }

    const mouseEnter = () => setCursorVariant('hover')
    const mouseLeave = () => setCursorVariant('default')

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
      
      // Add hover effect to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-circle')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', mouseEnter)
        el.addEventListener('mouseleave', mouseLeave)
      })

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', checkMobile)
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', mouseEnter)
          el.removeEventListener('mouseleave', mouseLeave)
        })
      }
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

  // Don't render on mobile devices
  if (isMobile) return null

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: 0.4,
      rotate: 0
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 2.5,
      opacity: 0.2,
      rotate: 90
    }
  }

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 1200, damping: 30, mass: 0.2 }}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '3px solid rgba(124, 58, 237, 0.6)',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'screen',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1), transparent)'
        }}
      />
      <motion.div
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: cursorVariant === 'hover' ? 1.5 : 1
        }}
        transition={{ type: 'spring', stiffness: 1600, damping: 35, mass: 0.1 }}
        style={{
          position: 'fixed',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 1), rgba(236, 72, 153, 0.8))',
          pointerEvents: 'none',
          zIndex: 10001,
          boxShadow: '0 0 15px rgba(124, 58, 237, 0.8)'
        }}
      />
    </>
  )
}
