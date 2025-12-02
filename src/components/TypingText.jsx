import React, { useState, useEffect } from 'react'

export default function TypingText({ 
  texts = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  className = '' 
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Finished typing, start pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={className}>
      {displayText}
      <span 
        style={{
          borderRight: '2px solid currentColor',
          animation: 'blink 1s step-end infinite',
          marginLeft: '2px'
        }}
      >
        |
      </span>
    </span>
  )
}
