import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Services.css';

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  // This is dummy data - replace with your actual services
  // REPLACE_WITH_YOUR_ACTUAL_SERVICES
  const services = [
    {
      title: 'MERN Stack Development',
      description: 'Complete web applications using MongoDB, Express.js, React, and Node.js with seamless integration between frontend and backend.',
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Frontend Development',
      description: 'Responsive and interactive user interfaces using React.js with modern practices like hooks, context API, and state management.',
      icon: 'fas fa-desktop'
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side applications with Node.js and Express, including RESTful APIs, authentication, and database integration.',
      icon: 'fas fa-server'
    },
    {
      title: 'MongoDB Database Design',
      description: 'Efficient NoSQL database design, schema modeling, and integration with Node.js applications for optimal performance.',
      icon: 'fas fa-database'
    },
    {
      title: 'API Development',
      description: 'Creating secure and scalable RESTful APIs with proper documentation, authentication, and error handling.',
      icon: 'fas fa-code'
    },
    {
      title: 'Full Stack Consultation',
      description: 'Technical consultation for MERN stack projects, architecture planning, and best practices implementation.',
      icon: 'fas fa-comments'
    }
  ];

  return (
    <section id="services" className={`services-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>My Services</h2>
        <p className="section-description">
          Specialized in MERN stack development, I offer the following services to help bring your web application ideas to life.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;