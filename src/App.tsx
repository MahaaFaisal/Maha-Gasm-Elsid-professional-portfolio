import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Reflections from './components/Reflections';
import Footer from './components/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe scrollY={scrollY} />
        <Qualifications scrollY={scrollY} />
        <Skills scrollY={scrollY} />
        <WorkExperience scrollY={scrollY} />
        <Projects scrollY={scrollY} />
        <Achievements scrollY={scrollY} />
        <Reflections scrollY={scrollY} />
      </main>
      <Footer />
    </div>
  );
}

export default App;