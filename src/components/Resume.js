import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="resume" className={`resume-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
        </motion.p>
        
        <motion.div 
          className="resume-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="resume-header">
            <div className="resume-title">
              <h1>VINDYA SATHSARANI</h1>
              <div className="resume-contact-info">
                <div className="info-item">
                  <strong>Address:</strong> 1/2 Wawathanna, Ambanpola, Matale
                </div>
                <div className="info-item">
                  <strong>Phone:</strong> 0779180997
                </div>
                <div className="info-item">
                  <strong>Email:</strong> vindya@example.com
                </div>
              </div>
            </div>
          </div>
          
          <div className="resume-section">
            <h2>ABOUT ME</h2>
            <p>
              I am a fourth-year undergraduate at Rajarata University of Sri Lanka, deeply passionate about ICT and
              specializing in web development. Eager to contribute my skills. I am dedicated to continuous learning and
              staying updated on industry trends.
            </p>
          </div>
          
          <div className="resume-section">
            <h2>WORK EXPERIENCE</h2>
            <div className="experience-item">
              <div className="job-title">Full Stack Developer</div>
              <div className="job-period">June 2023 - Present</div>
              <ul>
                <li>I am an undergraduate with one year of experience in backend and frontend development using MERN stack.</li>
              </ul>
            </div>
          </div>
          
          <div className="resume-section">
            <h2>TECHNICAL SKILLS</h2>
            <ul className="skills-list">
              <li>
                <strong>Web development & Frameworks -</strong> HTML, CSS, JavaScript, React.js, Vite, Node.js, Express.js, Tailwind css, Spring Boot
              </li>
              <li>
                <strong>Database management -</strong> MySQL, MongoDB
              </li>
              <li>
                <strong>Mobile App Development -</strong> React Native, Flutter
              </li>
              <li>
                <strong>Tools -</strong> Visual Studio, IntelliJ IDEA, Android Studio, Xcode
              </li>
              <li>
                <strong>Operating System -</strong> Windows, MacOS
              </li>
              <li>
                <strong>API testing and Development -</strong> Postman
              </li>
            </ul>
          </div>
          
          <div className="resume-section">
            <h2>PROJECTS</h2>
            <div className="project-item">
              <div className="project-title">Project Academic Management System (Web Application)</div>
              <div className="project-date">(2024 August)</div>
              <div className="project-tech">Used Technologies/Tools - MERN Stack</div>
            </div>
            
            <div className="project-item">
              <div className="project-title">Food Delivery System (Web Application)</div>
              <div className="project-date">(2024 June)</div>
              <div className="project-tech">Used Technologies/Tools - MERN Stack</div>
            </div>
          </div>
        </motion.div>
        
        <motion.a 
          href="/resume.pdf" 
          download
          className="download-btn bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaDownload /> Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;