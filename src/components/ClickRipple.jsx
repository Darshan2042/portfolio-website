import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ClickRipple() {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const ripple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    }
    
    setRipples(prev => [...prev, ripple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id))
    }, 1000)
  }

  React.useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 9999
    }}>
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            initial={{ 
              scale: 0,
              opacity: 1,
              x: ripple.x,
              y: ripple.y
            }}
            animate={{ 
              scale: 3,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid rgba(124, 58, 237, 0.8)',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
