import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { CalloutBanner } from './components/CalloutBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types/portfolio';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'dark';
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Top Fixed Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Infinite Tech Marquee */}
        <TechMarquee />

        {/* About Me Section */}
        <About onHireMeClick={() => {
          const contactEl = document.getElementById('contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }} />

        {/* My Experience & Education Section */}
        <Experience />

        {/* Languages I Speak Section */}
        <Languages />

        {/* My Recent Work Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* What Clients Say Section */}
        <Testimonials />

        {/* Open Source Callout Banner */}
        <CalloutBanner />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Details Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
