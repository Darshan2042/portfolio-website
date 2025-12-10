import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import FloatingParticles from './components/FloatingParticles'
import SpotlightEffect from './components/SpotlightEffect'
import PageTransition from './components/PageTransition'
import LoadingScreen from './components/LoadingScreen'
import BackToTop from './components/BackToTop'
import MouseTrail from './components/MouseTrail'
import GlowingOrbs from './components/GlowingOrbs'
import FloatingIcons from './components/FloatingIcons'
import ClickRipple from './components/ClickRipple'
import SinglePageLayout from './components/SinglePageLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import Certificates from './pages/Certificates'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SkillNetwork from './pages/Skills'  

export default function App() {
  const location = useLocation()
  const [layoutMode, setLayoutMode] = useState('single') // Default to single-page

  // Load saved preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('layoutMode')
    if (savedMode) {
      setLayoutMode(savedMode)
    }
  }, [])

  // Handle mode selection
  const handleModeSelect = (mode) => {
    setLayoutMode(mode)
    localStorage.setItem('layoutMode', mode)
  }

  return (
    <div className="app">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Advanced Animation Features */}
      <ScrollProgress />
      <CustomCursor />
      <ClickRipple />
      <GlowingOrbs />
      <FloatingParticles />
      <FloatingIcons />
      <SpotlightEffect />
      <MouseTrail />
      <BackToTop />
      
      <Navbar layoutMode={layoutMode} onModeChange={handleModeSelect} />
      
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {layoutMode === 'single' ? (
          <SinglePageLayout />
        ) : (
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              {/* <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} /> */}
              <Route path="/skills" element={<PageTransition><SkillNetwork /></PageTransition>} />
              {/* <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} /> */}
              {/* <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} /> */}
              <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        )}
      </main>
      
      <footer className="footer">
        © {new Date().getFullYear()} Darshan Pawar — Built with React
      </footer>
    </div>
  )
}
