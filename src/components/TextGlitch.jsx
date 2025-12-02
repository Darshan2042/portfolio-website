import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

export default function TextGlitch({ children, play = false }) {
  const controls = useAnimation()
  const [displayText, setDisplayText] = useState(children)

  useEffect(() => {
    if (play) {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
      let iterations = 0
      
      const interval = setInterval(() => {
        setDisplayText(prev => 
          prev.split('').map((char, index) => {
            if (index < iterations) {
              return children[index]
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          }).join('')
        )
        
        iterations += 1/3
        
        if (iterations >= children.length) {
          clearInterval(interval)
          setDisplayText(children)
        }
      }, 30)
      
      return () => clearInterval(interval)
    }
  }, [play, children])

  return (
    <motion.span
      animate={play ? {
        x: [0, -2, 2, -2, 0],
        textShadow: [
          '0 0 0px rgba(124, 58, 237, 0)',
          '2px 0 10px rgba(124, 58, 237, 0.8)',
          '-2px 0 10px rgba(6, 182, 212, 0.8)',
          '0 0 0px rgba(124, 58, 237, 0)'
        ]
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  )
}
