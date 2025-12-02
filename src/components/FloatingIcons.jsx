import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Rocket, Star, Zap } from 'lucide-react'

const icons = [Code, Rocket, Star, Zap]

export default function FloatingIcons() {
  const [activeIcons, setActiveIcons] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      const IconComponent = icons[Math.floor(Math.random() * icons.length)]
      const newIcon = {
        id: Date.now(),
        Icon: IconComponent,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50
      }
      
      setActiveIcons(prev => [...prev, newIcon])

      setTimeout(() => {
        setActiveIcons(prev => prev.filter(icon => icon.id !== newIcon.id))
      }, 8000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <AnimatePresence>
        {activeIcons.map(({ id, Icon, x }) => (
          <motion.div
            key={id}
            initial={{ y: window.innerHeight + 50, x, opacity: 0, rotate: 0 }}
            animate={{ 
              y: -100, 
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 8, 
              ease: 'linear',
              rotate: { duration: 8, ease: 'linear' }
            }}
            style={{
              position: 'absolute'
            }}
          >
            <Icon 
              size={30} 
              color="rgba(124, 58, 237, 0.3)"
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
