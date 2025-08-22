import React from 'react';
import { Navigation } from '../components/sections/Navigation';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-thin">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
