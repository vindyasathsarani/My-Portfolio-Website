import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Hero.css';

// Use a placeholder image for now
const placeholderImage = 'https://via.placeholder.com/350';

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <h3>Hello, I'm</h3>
        <h1>Vindya Sathsarani</h1>
        <h2>Web Developer</h2>
        <p>
          I specialize in creating beautiful, functional websites and applications
          using modern technologies like React, Node.js, and MongoDB.
        </p>
        <div className="button-group">
          <button className="primary-button">Get in Touch</button>
          <button className="secondary-button">Download Resume</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-frame">
          <img src={placeholderImage} alt="Vindya Sathsarani" />
        </div>
      </div>
    </section>
  );
};

export default Hero;