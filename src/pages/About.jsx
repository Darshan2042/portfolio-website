import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Darshan Pawar</strong> — a passionate 
            <strong> Computer Engineering student</strong> with a focus on 
            <strong> full-stack development</strong> and
            <strong> modern software solutions</strong>.  
            I enjoy building practical applications that solve real problems, from 
            web platforms to IoT-based systems.
          </p>

          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
            I’ve worked across the tech stack — developing MERN applications, creating 
            interactive UIs, and integrating APIs into real-world projects. My experience 
            includes internships at <strong>Infosys Springboard</strong> and 
            <strong> IEEE Bombay Section</strong>, where I built Python-powered tools and 
            web applications while strengthening teamwork and collaboration skills.
          </p>

          <p>
            As a final-year B.Tech Computer Engineering student, I’m skilled in 
            <strong> Python, JavaScript, React.js, Node.js, MongoDB, and MySQL</strong>.  
            I’ve built impactful projects including a cheque data extractor, an IoT-based 
            solar panel cleaning system, an expense tracker, and a pneumonia classification 
            system. I’m now seeking opportunities to apply my abilities and grow as a 
            full-stack developer while contributing to meaningful software solutions.
          </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {/* --- Education Card 1 --- */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,255,200,0.15)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "1.5rem 2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <FaUniversity size={40} color="var(--accent)" />
                <div>
                  <h4
                    style={{
                      color: "var(--accent)",
                      marginBottom: "0.4rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    B.Tech in Computer Engineering
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <strong>SVKM Institute of Technology, Dhule</strong> — DBATU University
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Final Year (Pursuing) | CGPA: 7.6
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>2022 – 2026</p>
                </div>
              </motion.div>

              {/* --- Education Card 2 --- */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,255,200,0.15)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "1.5rem 2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <FaGraduationCap size={38} color="var(--accent)" />
                <div>
                  <h4
                    style={{
                      color: "var(--accent)",
                      marginBottom: "0.4rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    Higher Secondary Education (12th Grade)
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <strong>D.M. Bari Junior College,Dhule</strong> — Maharashtra Board
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Percentage: 69%
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2022</p>
                </div>
              </motion.div>

              {/* --- Education Card 3 --- */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 25px rgba(0,255,200,0.15)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "14px",
                  padding: "1.5rem 2rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.2rem",
                }}
              >
                <FaSchool size={36} color="var(--accent)" />
                <div>
                  <h4
                    style={{
                      color: "var(--accent)",
                      marginBottom: "0.4rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    Secondary Education (10th Grade)
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <strong>KSK New City High School,Dhule</strong> — Maharashtra Board
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>
                    Percentage: 72%
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.7)" }}>Completed in 2020</p>
                </div>
              </motion.div>
            </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
