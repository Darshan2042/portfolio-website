import React from 'react';
import { motion } from 'framer-motion';
import '../CSS/LayoutModeSelector.css';

export default function LayoutModeSelector({ onSelectMode }) {
  return (
    <div className="layout-mode-selector">
      <motion.div 
        className="selector-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1 
          className="selector-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p 
          className="selector-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Choose your preferred browsing experience
        </motion.p>

        <div className="mode-options">
          <motion.div
            className="mode-card"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectMode('single')}
          >
            <div className="mode-icon">📄</div>
            <h2>Single Page</h2>
            <p>Scroll through everything in one continuous flow</p>
            <ul className="mode-features">
              <li>✓ Smooth scrolling experience</li>
              <li>✓ Quick navigation</li>
              <li>✓ All content at once</li>
            </ul>
            <button className="mode-button">Choose Single Page</button>
          </motion.div>

          <motion.div
            className="mode-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectMode('multi')}
          >
            <div className="mode-icon">📚</div>
            <h2>Multi Page</h2>
            <p>Navigate through separate pages with transitions</p>
            <ul className="mode-features">
              <li>✓ Traditional navigation</li>
              <li>✓ Page transitions</li>
              <li>✓ Focused content</li>
            </ul>
            <button className="mode-button">Choose Multi Page</button>
          </motion.div>
        </div>

        <motion.p 
          className="selector-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          You can change this anytime from the navigation menu
        </motion.p>
      </motion.div>
    </div>
  );
}
