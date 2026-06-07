import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { Counter } from '../components/Counter';
import { BookOpen, GraduationCap, Laptop, Share2, Award, Users } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-20 bg-transparent border-t border-violet-900/30"
    >

      <div className="relative z-10 w-full max-w-5xl space-y-16">
        {/* Section Header */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500"
          >
            JOURNEY & VENTURES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white mt-2"
          >
            Experience & Business
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Category 1: Academic Teaching */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-6 space-y-6 flex flex-col items-stretch"
          >
            <div className="flex items-center gap-3 pb-2 text-neutral-400 font-mono text-xs uppercase tracking-wider border-b border-neutral-900">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Academic Teaching</span>
            </div>

            <div className="space-y-4">
              {/* Teaching Card 1 */}
              <motion.div variants={cardVariants}>
                <SpotlightCard className="p-5 flex gap-4">
                  <div className="p-2.5 h-10 w-10 rounded-lg bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left space-y-1">
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase bg-emerald-950/30 border border-emerald-800/20 px-2 py-0.5 rounded inline-block">
                      Aktif
                    </div>
                    <h3 className="text-sm font-semibold text-white font-sans mt-1">
                      Guru Informatika & Desain Grafis
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans">
                      MA Al Islam Bantur
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>

              {/* Teaching Card 2 */}
              <motion.div variants={cardVariants}>
                <SpotlightCard className="p-5 flex gap-4">
                  <div className="p-2.5 h-10 w-10 rounded-lg bg-indigo-950/40 border border-indigo-800/30 flex items-center justify-center text-indigo-400">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left space-y-1">
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400 font-semibold uppercase bg-emerald-950/30 border border-emerald-800/20 px-2 py-0.5 rounded inline-block">
                      Aktif
                    </div>
                    <h3 className="text-sm font-semibold text-white font-sans mt-1">
                      Guru Informatika
                    </h3>
                    <p className="text-xs text-neutral-400 font-sans">
                      MTs Al Islam Bantur
                    </p>
                  </div>
                </SpotlightCard>
              </motion.div>
            </div>
          </motion.div>
    
          {/* Category 2: Business Founder */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3 pb-2 text-neutral-400 font-mono text-xs uppercase tracking-wider border-b border-neutral-900">
              <Share2 className="w-4 h-4 text-fuchsia-400" />
              <span>Business Founder</span>
            </div>

            <motion.div variants={cardVariants} className="space-y-6 text-left">
              <div>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  Ikariz.id Group
                </h3>
                <p className="text-xs font-mono text-neutral-500 tracking-wide mt-1">
                  Academic & Digital Solutions Partner
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Stats 1 */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="p-5 flex flex-col justify-between h-28">
                    <div className="text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                      <Counter end={50} suffix="+" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mt-2">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      Jurnal Terpublish (Sinta 4/5)
                    </span>
                  </SpotlightCard>
                </motion.div>

                {/* Stats 2 */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="p-5 flex flex-col justify-between h-28">
                    <div className="text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                      <Counter end={6} suffix="+" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mt-2">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      Skripsi Selesai
                    </span>
                  </SpotlightCard>
                </motion.div>

                {/* Stats 3 */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="p-5 flex flex-col justify-between h-28">
                    <div className="text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                      <Counter end={200} suffix="++" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mt-2">
                      <Users className="w-3.5 h-3.5 text-fuchsia-400" />
                      Tugas Terbantu
                    </span>
                  </SpotlightCard>
                </motion.div>

                {/* Stats 4 */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="p-5 flex flex-col justify-between h-28">
                    <div className="text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                      <Counter end={100} suffix="++" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mt-2">
                      <Share2 className="w-3.5 h-3.5 text-purple-400" />
                      Desain Grafis
                    </span>
                  </SpotlightCard>
                </motion.div>

                {/* Stats 5 - spanning 2 cols */}
                <motion.div variants={cardVariants} className="col-span-2">
                  <SpotlightCard className="p-5 flex flex-col justify-between h-28">
                    <div className="text-3xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                      <Counter end={20} suffix="++" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mt-2">
                      <Laptop className="w-3.5 h-3.5 text-emerald-400" />
                      Custom Web / Coding
                    </span>
                  </SpotlightCard>
                </motion.div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
