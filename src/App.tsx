
import React from 'react';

import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <main className="min-h-screen w-full bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">

      {/* 01 — INTRO */}
      <HeroSection />

      {/* 02 — CARD / PROFILE */}
      <AboutSection />

      {/* 03 — WORK / FILMOGRAPHY */}
      <ProjectsSection />

      {/* 04 — STORY / SKILLS + CAREER JOURNEY */}
      <section id="story">
        <SkillsSection />
        <ExperienceSection />
      </section>

      {/* 05 — CONTACT */}
      <ContactSection />

    </main>
  );
}

export default App;
