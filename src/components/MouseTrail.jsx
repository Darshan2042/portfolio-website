import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MouseTrail() {
  const [trail, setTrail] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile)
    }

    let mousePos = { x: 0, y: 0 }
    let trailItems = []

    const handleMouseMove = (e) => {
      mousePos = { x: e.clientX, y: e.clientY }
    }

    const updateTrail = () => {
      trailItems = [...trailItems.slice(-15), { ...mousePos, id: Date.now() }]
      setTrail([...trailItems])
    }

    window.addEventListener('mousemove', handleMouseMove)
    const interval = setInterval(updateTrail, 50)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkMobile)
      clearInterval(interval)
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9998 }}>
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            left: point.x,
            top: point.y,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: `rgba(124, 58, 237, ${0.6 - index * 0.04})`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px rgba(124, 58, 237, 0.8)'
          }}
        />
      ))}
    </div>
  )
}
