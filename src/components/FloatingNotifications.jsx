import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const achievements = [
  { emoji: '🎉', text: 'Welcome to my portfolio!' },
  { emoji: '🚀', text: 'Explore my projects' },
  { emoji: '💼', text: 'Full-Stack Developer' },
  { emoji: '⚡', text: 'MERN Stack Expert' }
]

export default function FloatingNotifications() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    // Show welcome notification after 3 seconds
    const timer = setTimeout(() => {
      addNotification(0)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const addNotification = (index) => {
    if (index >= achievements.length) return

    const id = Date.now()
    setNotifications(prev => [...prev, { ...achievements[index], id }])

    // Remove after 4 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
      // Show next notification
      setTimeout(() => addNotification(index + 1), 500)
    }, 4000)
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      pointerEvents: 'none'
    }}>
      <AnimatePresence>
        {notifications.map(notif => (
          <motion.div
            key={notif.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.95), rgba(6, 182, 212, 0.95))',
              padding: '12px 20px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(124, 58, 237, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              minWidth: '250px'
            }}
          >
            <span style={{ fontSize: '24px' }}>{notif.emoji}</span>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>
              {notif.text}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
