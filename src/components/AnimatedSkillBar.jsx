import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedSkillBar({ skill, percentage, delay = 0 }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 600
      }}>
        <span>{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
          viewport={{ once: true }}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1, 
            delay,
            ease: 'easeOut'
          }}
          viewport={{ once: true }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
            borderRadius: '10px',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}
