import React from 'react';
import { motion } from 'framer-motion';
import { Lanyard } from '../components/Lanyard';
import { Sparkles, ArrowDownRight, Unlock } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 pt-24 md:pt-32 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Cyber Glow Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-fuchsia-600/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Retro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Grid Wrapper */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (Details) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col text-left space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2 self-start bg-violet-950/60 border border-violet-500/30 rounded-full px-4 py-1.5 text-xs font-mono font-medium text-violet-300 tracking-wider shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5" />
            OPEN FOR HIGH-LEVEL COLLABORATIONS`
          </motion.div>

          {/* Typography */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display tracking-tight leading-[1.05] text-white"
            >
              Digital Entrepneur <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
                & Solutionist
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg md:text-xl font-mono text-neutral-400 font-semibold tracking-wide"
            >
              Multi-Disciplinary Techpreneur, Educator & Founder
            </motion.p>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl font-sans font-light"
          >
            Saya Malik Al Azis, seorang Multi-Disciplinary Techpreneur dan pendidik yang bergerak dinamis di persimpangan dunia bisnis, kreativitas visual,Jasa , akademik dan teknologi digital.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-wrap gap-2.5 pt-2"
          >
            {['Business & Strategy', 'Creative Design', 'Penjoki Tugas/ Skripsi'].map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.9 + idx * 0.1 }}
                className="bg-violet-950/50 border border-violet-700/40 text-violet-300 text-xs font-mono px-3.5 py-1.5 rounded-lg hover:border-violet-500/50 hover:bg-violet-900/30 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-neutral-500"
          >
            <button
              onClick={handleScrollToPortfolio}
              className="group flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer text-left"
            >
              <ArrowDownRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              <span>👉 explore my work below</span>
            </button>
            <div className="flex items-center gap-2 select-none">
              <Unlock className="w-4 h-4 text-indigo-400" />
              <span>🔓 open to full-time & freelance opportunities</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Lanyard Badge) */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateY: 15 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <Lanyard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        onClick={handleScrollToPortfolio}
        className="absolute bottom-6 flex flex-col items-center justify-center cursor-pointer select-none text-[10px] tracking-[6px] font-mono text-neutral-600 hover:text-cyan-400 transition-colors group"
      >
        <span className="mb-2 italic">SCROLL</span>
        <span className="text-lg group-hover:translate-y-1.5 transition-transform">👇</span>
      </motion.div>
    </section>
  );
};
