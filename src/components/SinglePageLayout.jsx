import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Contact from '../pages/Contact';

export default function SinglePageLayout() {
  return (
    <div className="single-page-layout">
      <motion.section 
        id="home" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Home />
      </motion.section>

      <motion.section 
        id="about" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.section>

      <motion.section 
        id="skills" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Skills />
      </motion.section>

      <motion.section 
        id="projects" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
      </motion.section>

      <motion.section 
        id="resume" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Resume />
      </motion.section>

      <motion.section 
        id="contact" 
        className="page-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}
