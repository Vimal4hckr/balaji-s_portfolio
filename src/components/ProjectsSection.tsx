
import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface FilmProject {
  number: string;
  title: string;
  category: string;
  role: string;
  description: string;
  credits: string[];
  image: string;
  link: string;
  linkLabel: string;
}

const YOUTUBE_LINK = 'https://youtu.be/QzVDUKczDpk';

const projects: FilmProject[] = [
  {
    number: '01',
    title: 'Kaagangal',
    category: 'SHORT FILM',
    role: 'WRITER & DIRECTOR',
    description:
      'A short-film project bringing together writing, direction, and visual storytelling.',
    credits: ['Screenwriting', 'Direction', 'Visual storytelling'],
    image: '/images/kaagangal-cover.png',
    link: YOUTUBE_LINK,
    linkLabel: 'WATCH ON YOUTUBE',
  },
  {
    number: '02',
    title: 'RING',
    category: 'MALAYALAM FEATURE FILM',
    role: 'ASSISTANT DIRECTOR',
    description:
      'Feature-film production experience, supporting the filmmaking process and the team on set.',
    credits: ['Assistant direction', 'On-set coordination', 'Production'],
    image: '/images/7star-awards-cover.png',
    link: 'https://www.instagram.com/reel/DS983Jhko3K/?obrf=MWozZ3BzczJnMTdocA==',
    linkLabel: 'WATCH ON INSTAGRAM',
  },
  {
    number: '03',
    title: 'Anjathe',
    category: 'TAMIL VERTICAL WEB SERIES',
    role: 'ASSISTANT DIRECTOR',
    description:
      'A vertical-series project shaped by collaborative production and mobile-first screen storytelling.',
    credits: ['Vertical storytelling', 'Team collaboration', 'Production'],
    image: '/images/anjathe-cover.png',
    link: 'https://www.instagram.com/reel/DQ11EjKk6x1/?psln=MTM3ZDhuOXhyZnk2eQ==',
    linkLabel: 'WATCH ON INSTAGRAM',
  },
  {
    number: '04',
    title: 'Tom & Sakthi',
    category: 'TAMIL VERTICAL WEB SERIES',
    role: 'ASSISTANT DIRECTOR',
    description:
      'A vertical web-series production contributing to the collaborative process of screen storytelling.',
    credits: ['Production workflow', 'Continuity', 'On-set teamwork'],
    image: '/images/tom-sakthi-cover.png',
    link: 'https://www.instagram.com/reel/DUukxvVk7NC/?obrf=MTI5bGlhdnAyMjF6Mg==',
    linkLabel: 'WATCH ON INSTAGRAM',
  },
  {
    number: '05',
    title: '7Screen Adfilmz',
    category: 'AD FILMS & CREATIVE CONTENT',
    role: 'ASSISTANT DIRECTOR',
    description:
      'Explore the creative video content and advertising work featured on the 7Screen Adfilmz Instagram profile.',
    credits: ['Ad films', 'Visual storytelling', 'Creative content'],
    image: '/images/7screen-adfilmz-cover.png',
    link: 'https://www.instagram.com/reel/DUqcC95kwoR/?exln=MXdlZWZseGpoMGhqOA==',
    linkLabel: 'WATCH ON INSTAGRAM',
  },
  {
    number: '06',
    title: '7Screen Adfilmz - 6th',
    category: 'INSTAGRAM REEL',
    role: 'ASSISTANT DIRECTOR',
    description:
      'Watch this Instagram Reel and explore another piece of short-form visual content.',
    credits: ['Visual storytelling', 'Short-form content', 'Video'],
    image: '/images/viswak-adfilm-cover.png',
    link: 'https://www.instagram.com/reel/DRM0lehk3yG/?xtok=d3F4ZXRtbXMwcWNw',
    linkLabel: 'WATCH ON INSTAGRAM',
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[30rem] w-[30rem] rounded-full bg-[#C9A875]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C9A875]">
            03 / SELECTED FILMOGRAPHY
          </span>
          <div className="h-px w-20 bg-[#C9A875]/50" />
        </motion.div>

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-['Bebas_Neue',sans-serif] text-6xl uppercase leading-[0.85] sm:text-7xl md:text-8xl">
            STORIES
            <br />
            <span className="text-[#C9A875]">ON SCREEN.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-[#A8988B]">
            Every frame tells a story. Explore my journey across short films,
            feature films, vertical web series, and creative content.
          </p>
        </div>

        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.number}>
              <article className="group relative overflow-hidden rounded-sm border border-[#C9A875]/30 bg-[#100E0C] p-5 shadow-2xl transition-colors duration-500 hover:border-[#C9A875]/80 sm:p-8 lg:p-10">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A875] to-transparent" />

                <span className="pointer-events-none absolute -bottom-8 -right-1 font-['Bebas_Neue',sans-serif] text-[10rem] leading-none text-white/[0.035] sm:text-[13rem]">
                  {project.number}
                </span>

                <div className="relative z-10 grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <p className="mb-4 text-[10px] tracking-[0.25em] text-[#C9A875]">
                      {project.number} / {project.category}
                    </p>

                    <h3 className="mb-3 font-['Bebas_Neue',sans-serif] text-5xl uppercase leading-none sm:text-7xl">
                      {project.title}
                    </h3>

                    <p className="mb-5 text-xs tracking-[0.2em] text-[#D6C2A4]">
                      {project.role}
                    </p>

                    <p className="max-w-2xl text-sm leading-8 text-[#B7AAA0]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6 border-t border-white/10 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    {/* Clickable cinematic thumbnail */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.linkLabel}: ${project.title}`}
                      className="group/image relative block w-full max-w-[220px] overflow-hidden border border-[#C9A875]/30 bg-black"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} thumbnail`}
                          loading="lazy"
                          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover/image:scale-110 group-hover/image:opacity-100"
                        />
                      </div>

                      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover/image:bg-black/30">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-black/50 text-sm text-white transition group-hover/image:scale-110">
                          ▶
                        </span>
                      </div>

                      <span className="block px-3 py-2 text-[9px] tracking-[0.18em] text-[#C9A875]">
                        {project.linkLabel}
                      </span>
                    </a>

                    <div>
                      <p className="mb-4 text-[9px] tracking-[0.25em] text-[#C9A875]">
                        CONTRIBUTIONS
                      </p>

                      <ul className="space-y-3">
                        {project.credits.map((credit) => (
                          <li
                            key={credit}
                            className="flex items-center gap-3 text-xs text-[#B7AAA0]"
                          >
                            <span className="text-[#C9A875]">✳</span>
                            {credit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#C9A875] transition hover:text-white"
                    >
                      {project.linkLabel} ↗
                    </a>
                  </div>
                </div>
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <p className="mt-8 text-center text-[9px] tracking-[0.25em] text-[#80756C]">
          EVERY PROJECT LEAVES A FRAME BEHIND.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
