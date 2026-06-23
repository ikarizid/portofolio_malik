import React from 'react';
import { motion } from 'framer-motion';
import { Download, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const handleScrollToProjects = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Generate simple text file as mock CV
    const cvText = `CV - Malik Al Azis\n Business & Strategy & Designer Grafis\nLahir: 19 Februari 2006\nEmail: [EMAIL_ADDRESS]\nGithub: github.com/malik-dev`;
    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_Malik_Al_Azis.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-20 bg-transparent border-t border-violet-900/30"
    >

      <div className="relative z-10 w-full max-w-5xl space-y-12">
        {/* Section header */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white mt-2"
          >
            Malik Al Azis
          </motion.h2>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left/Main Column: Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col space-y-6 text-left order-2 md:order-1"
          >
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-sans font-light">
              Saya adalah seorang Mahasiswa Pendidikan Agama Islam Semester 6 Di UNIVERSITAS ISLAM RADEN RAHMA MALANG yang mendedikasikan diri di
              dunia pendidikan dan aktif bergerak di industri IT/Kreatif. Lahir pada 19 Februari
              2006, Saya Seoarang Entreprenuer muda di bidang jasa akademik dan digital
            </p>

            <blockquote className="border-l-2 border-cyan-400 pl-4 py-1 italic font-sans text-neutral-400 text-sm md:text-base">
              Motto:
              "Hal Baru Bukan Untuk Di Takuti Tapi Untuk Di Kuasai"
            </blockquote>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white text-white hover:bg-white hover:text-black font-mono text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
              
              <button
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black hover:bg-neutral-200 border border-transparent font-mono text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(255,255,255,0.1)]"
              >
                <Compass className="w-4 h-4 animate-spin-slow" />
                View Projects ↗
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Glowing Round Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex justify-center order-1 md:order-2"
          >
            <div className="relative group">
              {/* Outer pulsing neon border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 rounded-full blur-[10px] opacity-40 group-hover:opacity-75 group-hover:blur-[15px] transition-all duration-500 animate-pulse-slow" />
              
              {/* Image Frame */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-indigo-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border-2 border-neutral-950">
                  <img
                    src="/profile.png"
                    alt="Malik Al Azis Profile"
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
