
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'INTRO', href: '#intro' },
  { name: 'CARD', href: '#card' },
  { name: 'WORK', href: '#work' },
  { name: 'STORY', href: '#story' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="intro"
      className="relative min-h-screen overflow-hidden bg-black text-[#E8DFD8]"
    >
      {/* Cinematic background video: place hero.mp4 in public/videos */}
      {/* Full-screen cinematic poster background */}
<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
  <img
    src="/images/hero-poster.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
</div>

      {/* Custom cursor on desktop */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block rounded-full border border-[#C9A875]/70"
          animate={{
            x: cursorPos.x - (isHovered ? 22 : 4),
            y: cursorPos.y - (isHovered ? 22 : 4),
            width: isHovered ? 44 : 8,
            height: isHovered ? 44 : 8,
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        />
      )}

      <div className="relative z-10 flex min-h-screen flex-col px-6 py-6 sm:px-12 lg:px-16">
        {/* Navigation */}
        <header className="flex items-center justify-between gap-5">
          <a
            href="#intro"
            className="text-sm font-semibold tracking-[0.3em] text-[#EAD8C7]"
          >
            BALAJI<span className="text-[#C9A875]">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-[10px] tracking-[0.22em] text-[#C4B5A5] transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="border border-[#C9A875]/50 px-4 py-3 text-[10px] tracking-[0.2em] text-[#EAD8C7] transition hover:border-[#C9A875]"
          >
            LET'S TALK ↗
          </a>
        </header>

        {/* Main introduction */}
        <div className="flex flex-1 items-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-6 text-[10px] tracking-[0.35em] text-[#C9A875] sm:text-xs">
              FILMMAKER · WRITER · DIRECTOR
            </p>

            <h1 className="font-['Bebas_Neue',sans-serif] text-7xl uppercase leading-[0.83] tracking-tight sm:text-8xl md:text-[9rem] lg:text-[11rem]">
              BALAJI
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#C9A875]">
                L.
              </span>
            </h1>

            <div className="my-8 h-px w-24 bg-[#C9A875]" />

            <p className="max-w-xl text-sm leading-7 text-[#D0C4B8] sm:text-base">
              I tell stories through images, performances, and moments.
              From the first line of a screenplay to the final frame,
              I believe every story deserves its own cinematic language.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-[#C9A875] px-6 py-4 text-[10px] font-semibold tracking-[0.2em] text-black transition hover:bg-[#E6D1AA]"
              >
                EXPLORE MY WORK ↗
              </a>

              <a
                href="#story"
                className="border border-white/30 px-6 py-4 text-[10px] tracking-[0.2em] text-white transition hover:border-[#C9A875]"
              >
                MY STORY
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer details */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-5">
          <p className="text-[9px] tracking-[0.2em] text-[#A8988B]">
            COIMBATORE, INDIA
          </p>
          <p className="text-[9px] tracking-[0.2em] text-[#A8988B]">
            STORIES THAT STAY WITH YOU.
          </p>
          <a
            href="https://youtu.be/QzVDUKczDpk"
            target="_blank"
            rel="noreferrer"
            className="text-[9px] tracking-[0.2em] text-[#C9A875] hover:text-white"
          >
            WATCH FILM ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
