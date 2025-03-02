import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* REPLACE WITH YOUR NAME */}
            <h3>Vindya Sathsarani</h3>
            <p>Full Stack Web Developer (MERN Stack)</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>MERN Stack Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>API Development</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Me</h4>
            {/* REPLACE WITH YOUR ACTUAL CONTACT INFO */}
            <p><i className="fas fa-envelope"></i> vindya.sathsarani@example.com</p>
            <p><i className="fas fa-phone"></i> +1 (123) 456-7890</p>
            <div className="footer-social">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vindya Sathsarani. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;