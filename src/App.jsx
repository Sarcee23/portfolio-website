import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import './App.css'

function App() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>
      <div id='achievements'>
        <Achievements/>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;