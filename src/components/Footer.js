import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container footer-container">
        <p className="copyright">Designed and Developed by Vindya Sathsarani</p>
        <p className="copyright">Copyright © {currentYear} VS</p>
      </div>
    </footer>
  );
};

export default Footer;