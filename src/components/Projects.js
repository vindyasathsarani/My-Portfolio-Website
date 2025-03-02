import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Projects.css';

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  // Use placeholder images for now
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'Firebase', 'Material UI'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with dark/light mode.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link">Live Demo</a>
                  <a href={project.githubLink} className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;