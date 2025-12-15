import React from 'react';
import { Box, Container } from '@mui/material';

// Component Imports
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import RAGChat from "./components/RAGChat";

// New Background Component Import
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    // Use a React Fragment <> to have two top-level elements
    <>
      {/* This Box contains all of your page content */}
      <Box>
        <ParticleBackground />
        <Header />
        <Container>
          <Box id="home" pt={{ xs: 8, md: 10 }}>
            <Home />
          </Box>
          <Box id="about" pt={10}>
            <AnimatedSection>
              <About />
            </AnimatedSection>
          </Box>
          <Box id="experience" pt={10}>
            <AnimatedSection>
              <Experience />
            </AnimatedSection>
          </Box>
          <Box id="skills" pt={10}>
            <AnimatedSection>
              <Skills />
            </AnimatedSection>
          </Box>
          <Box id="projects" pt={10}>
            <AnimatedSection>
              <Projects />
            </AnimatedSection>
          </Box>
          <Box id="education" pt={10}>
            <AnimatedSection>
              <Education />
            </AnimatedSection>
          </Box>
          <Box id="contact" pt={10}>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
          </Box>
        </Container>
        <Footer />
      </Box>
      <RAGChat />
    </>
  );
}

export default App;