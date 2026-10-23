
import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '/images/balaji-portrait.png';

const AboutSection: React.FC = () => {
  return (
    <section
      id="card"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080706] px-6 py-24 text-[#E8DFD8] sm:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#9A713B]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="text-[11px] tracking-[0.35em] text-[#C9A875]">
            02 / THE FILMMAKER
          </span>
          <div className="h-px w-20 bg-[#C9A875]/50" />
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{
              rotateY: -3,
              rotateX: 2,
              scale: 1.015,
              transition: { duration: 0.3 },
            }}
            style={{ transformPerspective: 1200 }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative border border-[#C9A875]/40 bg-[#14110E] p-3 transition-colors duration-500 hover:border-[#C9A875]/80">
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={aboutImg}
                  alt="Balaji L filmmaker portrait"
                  className="h-full w-full object-cover object-top grayscale-[15%] transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="mb-2 text-[9px] tracking-[0.3em] text-[#C9A875]">
                    WRITER · DIRECTOR
                  </p>
                  <h2 className="font-['Bebas_Neue',sans-serif] text-5xl tracking-wide">
                    BALAJI L.
                  </h2>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-4">
                <span className="text-[9px] tracking-[0.2em] text-[#A8988B]">
                  FILMMAKER PROFILE
                </span>
                <span className="text-xs text-[#C9A875]">
                  BL. / 001
                </span>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-5 text-xs tracking-[0.25em] text-[#C9A875]">
              EVERY FRAME HAS A PURPOSE.
            </p>

            <h3 className="mb-8 font-['Bebas_Neue',sans-serif] text-5xl uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
              STORIES FIRST.
              <br />
              <span className="text-[#C9A875]">CINEMA ALWAYS.</span>
            </h3>

            <p className="mb-5 text-sm leading-8 text-[#B7AAA0]">
              I’m Balaji L, a filmmaker, writer, and director with a background
              in Computer Science Engineering. I’m interested in the craft of
              storytelling—from shaping a screenplay to working with actors
              and bringing a director’s vision to the screen.
            </p>

            <p className="mb-10 text-sm leading-8 text-[#B7AAA0]">
              My experience spans short films, feature-film production, and
              vertical web series. Every project is an opportunity to learn,
              collaborate, and find a more compelling way to tell a story.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="mb-2 text-3xl text-[#E8DFD8]">2020–24</p>
                <p className="text-[10px] tracking-[0.15em] text-[#A8988B]">
                  ENGINEERING EDUCATION
                </p>
              </div>
              <div>
                <p className="mb-2 text-3xl text-[#E8DFD8]">FILM</p>
                <p className="text-[10px] tracking-[0.15em] text-[#A8988B]">
                  WRITING & DIRECTION
                </p>
              </div>
            </div>

            <a
              href="#story"
              className="mt-9 inline-flex items-center gap-3 text-[10px] tracking-[0.2em] text-[#C9A875] transition hover:text-white"
            >
              DISCOVER MY STORY <span>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutSection };
export default AboutSection;
