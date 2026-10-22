
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const skills = [
  {
    title: 'SCREENWRITING',
    badge: 'STORY DEVELOPMENT',
    items: ['Scriptwriting', 'Dialogue Writing', 'Story Structure'],
    description:
      'Developing stories from initial ideas into screen-ready scripts, with attention to dialogue, narrative flow, and the emotional core of a scene.',
    stat: 'WRITING',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'DIRECTION',
    badge: 'CREATIVE VISION',
    items: ['Scene Direction', 'Visual Storytelling', 'Actor Collaboration'],
    description:
      'Translating a story into performances and images while working towards a clear creative vision for the screen.',
    stat: 'CREATIVE',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'ON-SET WORKFLOW',
    badge: 'PRODUCTION',
    items: ['Continuity', 'On-Set Coordination', 'Production Assistance'],
    description:
      'Supporting the production process through coordination, continuity awareness, and collaboration with the filmmaking team.',
    stat: 'ON SET',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'PERFORMANCE & POST',
    badge: 'FILM CRAFT',
    items: ['Actor Auditions', 'Acting', 'Dubbing', 'Teamwork'],
    description:
      'Working across performance-related and production tasks, understanding how actors, dialogue, and collaborative effort shape a finished scene.',
    stat: 'COLLABORATION',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[#C9A875]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#C9A875]">
            FILMMAKING / THE CRAFT
          </span>
          <div className="h-px w-20 bg-[#C9A875]/50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10"
        >
          <h2 className="font-['Bebas_Neue',sans-serif] text-5xl uppercase leading-[0.88] sm:text-6xl md:text-7xl lg:text-8xl">
            THE CRAFT
            <br />
            <span className="text-[#C9A875]">BEHIND THE FRAME.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#A8988B]">
            The skills, collaboration, and creative decisions that help
            transform a written idea into a story on screen.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-12"
        >
          {skills.map((skill, index) => (
            <motion.article
              key={skill.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${skill.colSpan} group relative overflow-hidden rounded-sm border border-[#8C6D4F]/35 bg-[#100D0B]/85 p-7 transition-colors duration-500 hover:border-[#C9A875]/80 hover:shadow-[0_16px_45px_rgba(201,168,117,0.08)] sm:p-9`}
            >
              <div className="absolute right-5 top-4 font-['Bebas_Neue',sans-serif] text-6xl text-white/[0.04]">
                0{index + 1}
              </div>

              <div className="mb-5">
                <span className="text-[9px] tracking-[0.25em] text-[#C9A875]">
                  {skill.badge}
                </span>
              </div>

              <h3 className="mb-4 font-['Bebas_Neue',sans-serif] text-3xl uppercase text-white transition-colors group-hover:text-[#E7C995] sm:text-4xl">
                {skill.title}
              </h3>

              <p className="mb-7 max-w-xl text-xs leading-7 text-[#A8988B] transition-colors group-hover:text-[#D5CBC0] sm:text-sm">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2 border-t border-[#8C6D4F]/20 pt-5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="border border-[#8C6D4F]/35 bg-[#171310] px-3 py-2 text-[9px] tracking-[0.12em] text-[#E8D7C5] transition-colors group-hover:border-[#C9A875]/50 sm:text-[10px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-[9px] tracking-[0.2em] text-[#9A713B]">
                {skill.stat}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
