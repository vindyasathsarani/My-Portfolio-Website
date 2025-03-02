import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import './App.css';

function MainContent() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>I'm a passionate web developer skilled in JavaScript, React, and backend technologies.</p>
        </section>
        <Skills />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;