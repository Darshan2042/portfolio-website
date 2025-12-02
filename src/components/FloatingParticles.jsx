import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingParticles() {
  const particles = Array.from({ length: 30 })

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            borderRadius: '50%',
            background: `rgba(${Math.random() > 0.5 ? '124, 58, 237' : '6, 182, 212'}, 0.6)`,
            boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(124, 58, 237, 0.5)`
          }}
        />
      ))}
    </div>
  )
}
