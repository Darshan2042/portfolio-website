import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import TiltCard from '../components/TiltCard'

const PROJECTS = [
  {
    title: '🩺 Multi-Class Pneumonia Classification from X-Ray Images',
    desc: 'An AI system that classifies chest X-rays into Normal, Bacterial, or Viral Pneumonia using U-Net for segmentation and ResNet for classification with confidence scoring.',
    ss: '/pneumonia_ai.png',
    tech: ['Python', 'OpenCV', 'scikit-image', 'MongoDB'],
    live: '#',
    code: '#'
  },
  {
    title: '💳 CheckMate – Automated Cheque Data Extractor',
    desc: 'A Streamlit-based system for extracting cheque details from images/PDFs using Python and MongoDB, automating document processing and data validation.',
    ss: '/checkmate.png',
    tech: ['Python', 'Streamlit', 'MongoDB'],
    live: 'https://checkmate-cheque-extractor.streamlit.app/',
    code: 'https://github.com/Darshan2042/Checkmate'
  },
  {
    title: '🔆 Smart IoT-Based Solar Panel Cleaning System',
    desc: 'Designed an IoT system to monitor solar panel performance and trigger automated cleaning using sensors, with a basic machine learning model for fault detection.',
    ss: '/iot_solar.jpg.png',
    tech: ['IoT (Arduino, Sensors)', 'React', 'Firebase'],
    live: '#',
    code: '#'
  },
  {
    title: '💼 Portfolio & Personal Branding Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://portfolio-website-delta-sand-29.vercel.app/',
    code: 'https://github.com/Darshan2042/portfolio-website'
  },
  {
    title: '💰 ExpenseTrack – Personal Finance Manager',
    desc: 'A full-stack application that helps users log, categorize, and track daily expenses with secure user authentication and clean UI for financial insights.',
    ss: '/expensetrack.png',
    tech: ['React.js', 'Bootstrap', 'JavaScript', 'MongoDB'],
    live: '#',
    code: '#'
  },
  {
    title: '📚 StudyMate – Interactive Learning App',
    desc: 'A cross-platform learning app that offers video lectures, quizzes, and real-time progress tracking using Firebase, built with React Native and Node.js.',
    ss: '/studymate.png',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    live: '#',
    code: '#'
  },
];


export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      id="projects"
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          🚀 Projects
        </motion.h2>
        <motion.p 
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A collection of my major works — blending research, AI innovation.
        </motion.p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <TiltCard
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 16,
                overflow: 'visible',
                boxShadow: '0 0 20px rgba(0,255,255,0.08)'
              }}
            >
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div 
                  className="ss" 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{ borderRadius: 12, overflow: 'hidden' }}
                >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 12
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: '#0ea5e9', marginBottom: 6 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 8, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,255,255,0.05)',
                        border: '1px solid rgba(0,255,255,0.1)',
                        padding: '3px 8px',
                        borderRadius: 6,
                        fontSize: 12,
                        color: '#aaf'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 5px 15px rgba(14,165,233,0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#0ea5e9',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      border: '1px solid rgba(0,255,255,0.1)',
                      textDecoration: 'none'
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: '0 5px 20px rgba(6,182,212,0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: 'none'
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
