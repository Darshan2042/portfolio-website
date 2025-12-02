import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "./AnimatedLogo";

const links = [
  { label: "Home", to: "/", anchor: "home" },
  { label: "About Me", to: "/about", anchor: "about" },
  { label: "Skills", to: "/skills", anchor: "skills" },
  { label: "Projects", to: "/projects", anchor: "projects" },
  { label: "Resume", to: "/resume", anchor: "resume" },
  { label: "Contact", to: "/contact", anchor: "contact" },
];

export default function Navbar({ layoutMode, onModeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const linksRef = useRef(null);

  // Check if links overflow nav width (to show hamburger)
  const checkOverflow = () => {
    if (!navRef.current || !linksRef.current) return;
    setShowButton(linksRef.current.scrollWidth > navRef.current.offsetWidth);
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Track active section for single-page mode
  useEffect(() => {
    if (layoutMode !== 'single') return;

    const handleScroll = () => {
      const sections = links.map(l => document.getElementById(l.anchor));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(links[i].anchor);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [layoutMode]);

  // Handle navigation click
  const handleNavClick = (e, link) => {
    if (layoutMode === 'single') {
      e.preventDefault();
      const element = document.getElementById(link.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  // Toggle layout mode
  const toggleLayoutMode = () => {
    const newMode = layoutMode === 'single' ? 'multi' : 'single';
    onModeChange(newMode);
    setIsOpen(false);
  };

  return (
    <>
      {/* --- Navbar --- */}
      <nav
        ref={navRef}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          fontFamily: "inherit",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }} onClick={(e) => {
          if (layoutMode === 'single') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
            <AnimatedLogo size={50} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <motion.h1 
                style={{ margin: 0, fontSize: 16, fontWeight: 700 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Darshan Pawar
              </motion.h1>
              <motion.div 
                style={{ fontSize: 12, color: "var(--muted)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Full-Stack Developer
              </motion.div>
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div
          ref={linksRef}
          style={{
            display: showButton ? "none" : "flex",
            justifyContent: "center",
            gap: "2rem",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {links.map((l) => {
            const isActive = layoutMode === 'single' 
              ? activeSection === l.anchor 
              : window.location.pathname === l.to;

            return layoutMode === 'single' ? (
              <a
                key={l.anchor}
                href={`#${l.anchor}`}
                onClick={(e) => handleNavClick(e, l)}
                style={{
                  position: "relative",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <motion.span
                    animate={{ color: isActive ? "var(--accent)" : "white" }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "70%",
                        height: "2px",
                        marginTop: "4px",
                        borderRadius: "1px",
                        backgroundColor: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                      }}
                    />
                  )}
                </motion.div>
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end
                style={{
                  position: "relative",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      color: "var(--accent)",
                      textShadow: "0 0 8px var(--accent)",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.span
                      animate={{ color: isActive ? "var(--accent)" : "white" }}
                      transition={{ duration: 0.3 }}
                    >
                      {l.label}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: "70%",
                          height: "2px",
                          marginTop: "4px",
                          borderRadius: "1px",
                          backgroundColor: "var(--accent)",
                          boxShadow: "0 0 6px var(--accent)",
                        }}
                      />
                    )}
                  </motion.div>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Layout Mode Toggle Button - Right Side */}
        {!showButton && (
          <motion.button
            onClick={toggleLayoutMode}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(99, 102, 241, 0.3) 100%)",
              border: "2px solid rgba(124, 58, 237, 0.6)",
              borderRadius: "25px",
              padding: "0.6rem 1.3rem",
              color: "white",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
            }}
          >
            <motion.span
              animate={{ rotate: layoutMode === 'single' ? 0 : 360 }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", alignItems: "center", fontSize: "1.1rem" }}
            >
              {layoutMode === 'single' ? '📚' : '📄'}
            </motion.span>
            <span>{layoutMode === 'single' ? 'Multi-Page' : 'Single-Page'}</span>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%)",
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        )}

        {/* Hamburger */}
        {showButton && (
          <div className="mobile-btn">
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "1.8rem",
                cursor: "pointer",
                zIndex: 10000,
              }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </nav>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {isOpen && showButton && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "4rem",
              overflowY: "auto",
              zIndex: 9999,
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                fontSize: "2rem",
                color: "#fff",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {links.map((l) => 
              layoutMode === 'single' ? (
                <a
                  key={l.anchor}
                  href={`#${l.anchor}`}
                  onClick={(e) => handleNavClick(e, l)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "1rem 0",
                    width: "100%",
                    textAlign: "center",
                    fontSize: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "1rem 0",
                    width: "100%",
                    textAlign: "center",
                    fontSize: 16,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {l.label}
                </NavLink>
              )
            )}
            
            {/* Layout Mode Toggle in Mobile Menu */}
            <motion.button
              onClick={toggleLayoutMode}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)",
                border: "2px solid rgba(124, 58, 237, 0.7)",
                borderRadius: "30px",
                padding: "1rem 2rem",
                color: "white",
                fontSize: "1rem",
                cursor: "pointer",
                fontWeight: 600,
                marginTop: "2rem",
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>
                {layoutMode === 'single' ? '📚' : '📄'}
              </span>
              Switch to {layoutMode === 'single' ? 'Multi-Page' : 'Single-Page'} Mode
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
