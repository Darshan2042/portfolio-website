import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setIsDark(!isDark)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: 'fixed',
        top: '80px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: isDark 
          ? 'linear-gradient(135deg, #7c3aed, #06b6d4)' 
          : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        boxShadow: isDark 
          ? '0 4px 20px rgba(124, 58, 237, 0.4)' 
          : '0 4px 20px rgba(251, 191, 36, 0.4)'
      }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Moon size={24} color="#fff" /> : <Sun size={24} color="#fff" />}
      </motion.div>
    </motion.button>
  )
}
