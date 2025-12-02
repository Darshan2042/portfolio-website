import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxText({ children, speed = 50 }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, speed])

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  )
}
