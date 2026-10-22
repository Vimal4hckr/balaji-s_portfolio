
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:directorlbalaji@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-[#050505] px-6 py-20 text-[#E8DFD8] sm:px-12 lg:px-20 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[#C9A875]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contact introduction */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="text-[10px] tracking-[0.35em] text-[#C9A875]">
                05 / CONTACT
              </span>
              <div className="h-px w-16 bg-[#C9A875]/50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Bebas_Neue',sans-serif] text-6xl uppercase leading-[0.85] sm:text-7xl md:text-8xl">
                LET&apos;S
                <br />
                MAKE
                <br />
                <span className="text-[#C9A875]">A STORY.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-8 text-[#A8988B]">
                Have a story to tell, a film to make, or a creative
                collaboration in mind? I’d love to hear about it.
                Let’s bring the next idea to the screen.
              </p>
            </motion.div>

            <div className="mt-10">
              <p className="mb-3 text-[9px] tracking-[0.25em] text-[#9A713B]">
                DIRECT ENQUIRIES
              </p>
              <a
                href="mailto:directorlbalaji@gmail.com"
                className="break-all text-sm text-[#E8DFD8] transition hover:text-[#C9A875] sm:text-base"
              >
                directorlbalaji@gmail.com ↗
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="https://youtu.be/QzVDUKczDpk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] text-[#C9A875] transition hover:text-white"
              >
                YOUTUBE ↗
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] text-[#C9A875] transition hover:text-white"
              >
                INSTAGRAM ↗
              </a>
            </div>
          </div>

          {/* Enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-[#8C6D4F]/40 bg-[#0A0806] p-6 sm:p-10 lg:col-span-7"
          >
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C9A875]/70 to-transparent" />

            <p className="mb-8 text-[10px] tracking-[0.25em] text-[#C9A875]">
              START A CONVERSATION
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[9px] tracking-[0.2em] text-[#9A713B]"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your name"
                    className="w-full border border-[#8C6D4F]/30 bg-[#120F0C] px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A875]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[9px] tracking-[0.2em] text-[#9A713B]"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full border border-[#8C6D4F]/30 bg-[#120F0C] px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A875]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-[9px] tracking-[0.2em] text-[#9A713B]"
                >
                  TELL ME ABOUT YOUR PROJECT
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="A film idea, a collaboration, or simply say hello..."
                  className="w-full resize-y border border-[#8C6D4F]/30 bg-[#120F0C] p-4 text-sm text-white outline-none transition focus:border-[#C9A875]"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-[#C9A875]/60 bg-[#17120C] px-6 py-4 text-[10px] tracking-[0.22em] text-[#E8DFD8] transition hover:border-[#C9A875] hover:bg-[#C9A875] hover:text-black"
              >
                SEND AN ENQUIRY ↗
              </button>

              <p className="text-[10px] leading-5 text-[#80756C]">
                Your default email app will open with your enquiry ready to
                review and send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <a
            href="#intro"
            className="text-xs tracking-[0.25em] text-[#C9A875]"
          >
            BALAJI L.
          </a>

          <span className="text-[9px] tracking-[0.15em] text-[#80756C]">
            WRITER · DIRECTOR · FILMMAKER
          </span>

          <span className="text-[9px] text-[#80756C]">
            © {new Date().getFullYear()} BALAJI L.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
