import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

// Import images directly
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const ref = useRef(null);
  // Remove the unused inView variable or add eslint-disable comment
  // eslint-disable-next-line no-unused-vars
  const inView = useInView(ref, { once: true, amount: 0.1 });
  
  // Force visibility on mobile devices
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        // Force the section to be visible on mobile
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.style.opacity = '1';
          projectsSection.style.visibility = 'visible';
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const projects = [
    {
      title: 'Machine Learning Models for Rice Price Prediction in Sri Lanka',
      description: 'Currently working on developing a machine learning model to predict rice prices in Sri Lanka using weather data, exchange rates, and yield trends.',
      image: image5,
      technologies: ['Machine Learning'],
    },
    {
      title: 'Food Delivery System',
      description: 'The food delivery platform ensures a secure and seamless experience with user authentication and real-time updates. It displays food items with prices and quantities, manages customer credentials, and automatically updates availability for a smooth ordering process ande delivery process',
      image: image3,
      technologies: ['MERN Stack'],
    },
    {
      title: 'Academic Project Management System',
      description: 'Developed a platform to streamline mentor assignments, track project progress, manage submissions, and automate grade calculations. This system aims to streamline this process, benefiting all primary actors including the Registrar, Examiners, Project Coordinators, Students, and Staff. ',
      image: image4,
      technologies: ['MERN Stack'],
    },
    {
      title: 'Hotel Management System',
      description: 'The Hotel Management System streamlines operations for clients and admins. Clients can log in, search rooms, book accommodations, and submit feedback. Rooms are categorized into Standard, Deluxe, and Luxury with unique pricing. Admins can manage bookings, block spam accounts, disable rooms for maintenance, and handle a gallery page for events. The system also includes a ticketing service for inquiries, ensuring a seamless and secure booking experience.',
      image: image6,
      technologies: ['MERN Stack'],
    },
    {
      title: 'Agriculture Transaction Management System',
      description: 'This full-stack Agriculture Transactions Management System provides comprehensive tracking and management of farm operations including watermelon sales, investor relations, financial transactions, equipment, seeds, labor, land, and irrigation contracts. ',
      image: image7,
      technologies: ['MERN Stack'],
    },
    {
      title: 'My Portfolio',
      description: 'A portfolio website is an online platform that highlights my skills and accomplishments. I showcase my projects, share my resume, and provide insights into my academic journey. Through this portfolio, visitors can explore my expertise in full-stack web development.',
      image: image8,
      technologies: ['React'],
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced for faster appearance
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y offset
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects I've built so far
        </motion.p>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                 
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                {/* Removed project links section */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;