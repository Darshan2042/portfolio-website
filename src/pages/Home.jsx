import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from '../components/AnimatedText'
import TypingText from '../components/TypingText'
import "../CSS/Home.css"
import '../index.css' 


// 🖼️ Public Assets (served from `public/`) — use absolute paths
// Fixed: Matches exact filename "Profile_Pic.png" in public folder (case-sensitive)
const photo = '/Profile_Pic.png'
const githubLogo = '/github.png'
const linkedinLogo = '/linkedin.png'
const gmailLogo = '/gmail.png'
const whatsappLogo = '/whatsapp.png'
const instagramLogo = '/insta.png'
const facebookLogo = '/facebook.png'

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 200, 300], [1, 0.5, 0])

  const professions = [
    "Aspiring Software Engineer",
    "Passionate Programmer",
    "Tech Learner",
    "Problem Solver",
    "Code Enthusiast",
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Darshan2042' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/darshan2042' },
    { img: gmailLogo, title: 'Email', link: 'mailto:pawardarshan1204@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+919552312042' },
    { img: instagramLogo, title: 'Instagram', link: 'https://www.instagram.com/darshan.pawar_42/' },
    { img: facebookLogo, title: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100046490590336' },
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Darshan Pawar"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I'm{' '}
            <span className="home-name-wrapper">
              <motion.span
                animate={{ backgroundPositionX: ['0%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                className="home-name"
                style={{ display: 'inline-block' }}
              >
                Darshan Pawar
              </motion.span>
            </span>
          </h1>

          {/* Typing Animated Text */}
          <div className="typing-effect" style={{ minHeight: '30px' }}>
            <TypingText 
              texts={[
                'Computer Engineer',
                'Full-Stack Developer', 
                'Tech Explorer',
                'MERN Stack Developer'
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              pauseTime={2000}
            />
          </div>

          {/* Profession Tags */}
          <motion.div 
            className="profession-tags"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {professions.map((role, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }
                }}
                whileHover={{ 
                  scale: 1.08, 
                  background: 'linear-gradient(90deg,var(--accent),var(--accent-2))',
                  boxShadow: '0 5px 15px rgba(0,255,255,0.3)'
                }} 
                transition={{ type: 'spring', stiffness: 400, damping: 15 }} 
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div 
            className="info-cards"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6
                }
              }
            }}
          >
            {[
              { label: '📍 Location', value: 'Dhule, Maharashtra, India' },
              { label: '💼 Expertise', value: 'Full-Stack Development' },
              { label: '📧 Contact', value: 'pawardarshan1204@gmail.com' },
            ].map((info, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { type: 'spring', stiffness: 200, damping: 20 }
                  }
                }}
                whileHover={{ 
                  y: -6, 
                  scale: 1.05,
                  boxShadow: '0 8px 20px rgba(0,255,255,0.2)'
                }} 
                transition={{ type: 'spring', stiffness: 300, damping: 15 }} 
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Quick Links */}
      <motion.div 
        className="quick-links"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.h2 
          className="quick-links-title"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Connect with me
        </motion.h2>
        <motion.div 
          className="quick-links-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 1.3
              }
            }
          }}
        >
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -180 },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 260, damping: 20 }
                }
              }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 8,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 20px var(--accent)) brightness(1.3)' }}
                transition={{ duration: 0.3 }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

    </section>
  )
}
