import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Languages } from './components/Languages';
import { Projects } from './components/Projects';
import { CalloutBanner } from './components/CalloutBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types/portfolio';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  const isProjectsPage = window.location.pathname.replace(/\/+$/, '') === '/projects';
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light') return false;
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.style.colorScheme = darkMode ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 selection:bg-sky-500 selection:text-white">
      
      {/* Top Fixed Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="w-full">
        {isProjectsPage ? (
          <Projects onSelectProject={(project) => setSelectedProject(project)} />
        ) : (
          <>
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <TechMarquee />
            <About onHireMeClick={() => {
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }} />
            <Experience />
            <Languages />
            <CalloutBanner />
            <Contact />
          </>
        )}
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
    </LanguageProvider>
  );
}
