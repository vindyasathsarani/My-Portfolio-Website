import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './About.css';

// Use a placeholder image for now
// REPLACE_WITH_YOUR_ACTUAL_PHOTO
const aboutImage = 'https://via.placeholder.com/500x600';

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="about" className={`about-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="Vindya Sathsarani" />
          </div>
          
          <div className="about-text">
            <h3>MERN Stack Developer</h3>
            
            {/* REPLACE_WITH_YOUR_ACTUAL_BIO */}
            <p>
              I'm a passionate Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). 
              With a strong foundation in JavaScript and modern web technologies, I create responsive, user-friendly applications 
              that solve real-world problems.
            </p>
            
            <p>
              My journey in web development began during my university years, where I discovered my passion for creating 
              digital experiences. Since then, I've been continuously expanding my skills and staying up-to-date with 
              the latest industry trends and best practices.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">Vindya Sathsarani</span>
              </div>
              
              {/* REPLACE_WITH_YOUR_ACTUAL_DETAILS */}
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">vindya.sathsarani@example.com</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Colombo, Sri Lanka</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value">Full-time, Freelance</span>
              </div>
            </div>
            
            <div className="about-buttons">
              <a href="#contact" className="primary-btn">Hire Me</a>
              <a href="/resume.pdf" className="secondary-btn" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;