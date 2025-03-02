import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Skills.css';

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Express', level: 80 },
    { name: 'SQL', level: 70 },
    { name: 'Git', level: 85 }
  ];

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;