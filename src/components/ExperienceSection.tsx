
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface JourneyStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: JourneyStop[] = [
  {
    id: '01',
    year: '2020–2024',
    title: 'B.E. COMPUTER SCIENCE',
    organization: 'NEHRU INSTITUTE OF TECHNOLOGY · COIMBATORE',
    description:
      'Built a foundation in computer science engineering while developing an interest in visual storytelling, screenwriting, and filmmaking.',
  },
  {
    id: '02',
    year: 'SHORT FILM',
    title: 'KAAGANGAL',
    organization: 'WRITER & DIRECTOR',
    description:
      'Worked on the creative process of a short film, taking responsibility for writing and directing the story.',
  },
  {
    id: '03',
    year: 'FEATURE FILM',
    title: 'RING',
    organization: 'MALAYALAM FEATURE FILM · ASSISTANT DIRECTOR',
    description:
      'Gained experience in feature-film production and the collaborative work involved in bringing a director’s vision to the screen.',
  },
  {
    id: '04',
    year: 'WEB SERIES',
    title: 'ANJATHE',
    organization: 'TAMIL VERTICAL WEB SERIES',
    description:
      'Contributed to a vertical-series production, exploring storytelling designed for a mobile-first viewing format.',
  },
  {
    id: '05',
    year: 'WEB SERIES',
    title: 'TOM & SAKTHI',
    organization: 'TAMIL VERTICAL WEB SERIES',
    description:
      'Continued developing practical experience in screen production, collaboration, and visual storytelling.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative overflow-hidden bg-[#080706] px-6 py-24 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A875]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C9A875]">
            04 / THE JOURNEY
          </span>
          <div className="h-px w-20 bg-[#C9A875]/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <h2 className="font-['Bebas_Neue',sans-serif] text-6xl uppercase leading-[0.85] sm:text-7xl md:text-8xl">
            EVERY STORY
            <br />
            <span className="text-[#C9A875]">HAS A BEGINNING.</span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#A8988B]">
            From an engineering classroom to film sets, each experience has
            shaped the way I approach stories, people, and the filmmaking process.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-5 left-[5px] top-2 w-px bg-white/10 sm:left-[120px]" />

          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[5px] top-2 w-[2px] origin-top bg-gradient-to-b from-[#C9A875] via-[#9A713B] to-transparent shadow-[0_0_10px_rgba(201,168,117,0.4)] sm:left-[120px]"
          />

          <div className="space-y-12 sm:space-y-14">
            {journey.map((stop, index) => (
              <motion.article
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative grid grid-cols-[24px_1fr] gap-5 sm:grid-cols-[120px_1fr] sm:gap-8"
              >
                <div className="hidden pt-1 text-right sm:block">
                  <span className="text-[9px] tracking-[0.16em] text-[#9A713B] transition group-hover:text-[#C9A875]">
                    {stop.year}
                  </span>
                </div>

                <div className="absolute left-[5px] top-1.5 flex -translate-x-1/2 items-center justify-center sm:left-[120px]">
                  <span className="h-3 w-3 rounded-full border border-[#C9A875]/70 bg-[#100E0C] transition group-hover:bg-[#C9A875] group-hover:shadow-[0_0_12px_#C9A875]" />
                </div>

                <div className="pl-1">
                  <span className="mb-2 block text-[9px] tracking-[0.2em] text-[#C9A875] sm:hidden">
                    {stop.year}
                  </span>

                  <h3 className="mb-2 font-['Bebas_Neue',sans-serif] text-3xl uppercase leading-none text-white transition group-hover:text-[#E7C995] sm:text-4xl">
                    {stop.title}
                  </h3>

                  <p className="mb-3 text-[9px] leading-5 tracking-[0.12em] text-[#9A713B] sm:text-[10px]">
                    {stop.organization}
                  </p>

                  <p className="max-w-2xl text-xs leading-7 text-[#A8988B] transition group-hover:text-[#D0C4B8] sm:text-sm">
                    {stop.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
