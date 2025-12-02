import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedLogo({ size = 48 }) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      whileHover="hover"
    >
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '2px solid transparent',
          borderTopColor: '#7c3aed',
          borderRightColor: '#06b6d4',
          borderRadius: '50%'
        }}
      />
      
      {/* Inner rotating ring - opposite direction */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '80%',
          height: '80%',
          border: '2px solid transparent',
          borderBottomColor: '#10b981',
          borderLeftColor: '#f59e0b',
          borderRadius: '50%'
        }}
      />

      {/* Hexagon background */}
      <motion.div
        variants={{
          hover: { rotate: 180, scale: 1.1 }
        }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          width: '65%',
          height: '65%',
          background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)'
        }}
      />

      {/* DP Text */}
      <motion.div
        variants={{
          hover: { scale: 1.2 }
        }}
        style={{
          position: 'relative',
          fontSize: size * 0.35,
          fontWeight: 900,
          color: '#fff',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          zIndex: 1
        }}
      >
        DP
      </motion.div>

      {/* Pulse effect */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '2px solid #7c3aed',
          borderRadius: '50%'
        }}
      />
    </motion.div>
  )
}
