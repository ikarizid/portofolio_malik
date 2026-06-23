import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { Counter } from '../components/Counter';
import {
  BookOpen,
  Share2,
  Users,
  Palette,
  Code,
  Briefcase,
} from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
};

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'founder' | 'work' | 'org'>('founder');

  const tabs = [
    { id: 'founder', label: 'Ikariz.id Group (Founder)', icon: Share2 },
    { id: 'work', label: 'Pengalaman Kerja', icon: Briefcase },
    { id: 'org', label: 'Pengalaman Organisasi', icon: Users },
  ];

  const workExperiences = [
    {
      role: "Guru Informatika",
      location: "MA Al Islam Bantur",
      period: "Aktif",
      active: true,
      desc: "Mengajar materi informatika kepada siswa MA Al Islam Bantur serta membimbing pemahaman teknologi informasi."
    },
    {
      role: "Guru Desain Grafis",
      location: "MA Al Islam Bantur",
      period: "Aktif",
      active: true,
      desc: "Mengajar desain grafis kreatif, tools multimedia, dan membimbing pembuatan portofolio visual siswa."
    },
    {
      role: "Guru Informatika",
      location: "MTs Al Islam Bantur",
      period: "Aktif",
      active: true,
      desc: "Mengajar konsep dasar teknologi informasi dan komputer untuk siswa tingkat menengah pertama."
    },
    {
      role: "Operator Data",
      location: "MTs Al Islam Bantur",
      period: "Aktif",
      active: true,
      desc: "Mengelola sinkronisasi data sekolah, data administrasi siswa, dan sistem pelaporan berkala."
    },
    {
      role: "Divisi Data PPS",
      location: "Desa Wonokerto (Masa Pilkada 2024)",
      period: "2024",
      active: false,
      desc: "Mengurus validasi, pemutakhiran, dan pengolahan data pemilih untuk kelancaran Pilkada 2024."
    }
  ];

  const orgExperiences = [
    {
      role: "Sekretaris Divisi 2",
      organization: "HMP PAI UNIRA Malang",
      period: "2025",
      desc: "Mengelola administrasi divisi, menyusun program kerja, serta berkontribusi aktif dalam kegiatan Himpunan Mahasiswa Program Studi PAI."
    },
    {
      role: "Anggota",
      organization: "HMP-PAI UNIRA Malang",
      period: "2024",
      desc: "Terlibat dalam berbagai kegiatan sosial, keagamaan, dan akademis yang diselenggarakan oleh organisasi mahasiswa."
    },
    {
      role: "Ketua Divisi Jarkominfo",
      organization: "IPNU IPPNU PAC Bantur",
      period: "2022",
      desc: "Memimpin divisi jaringan komunikasi dan informasi, mengelola media sosial organisasi, serta mempublikasikan berita internal."
    },
    {
      role: "Ketua OSIS",
      organization: "MA Al Islam Bantur",
      period: "2022",
      desc: "Memimpin seluruh kepengurusan OSIS, mengoordinasikan kegiatan sekolah, dan menjadi jembatan antara siswa dan guru."
    },
    {
      role: "Anggota OSIS",
      organization: "MA Al Islam Bantur",
      period: "2020",
      desc: "Aktif berpartisipasi dalam perencanaan dan pelaksanaan program kerja OSIS di lingkungan madrasah."
    },
    {
      role: "Anggota",
      organization: "LPMD (Lembaga Pemberdayaan Masyarakat Desa)",
      period: "Aktif",
      desc: "Berkontribusi dalam perencanaan pembangunan desa serta pemberdayaan masyarakat di lingkungan setempat."
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-20 bg-transparent border-t border-violet-900/30"
    >
      <div className="relative z-10 w-full max-w-5xl space-y-12">
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

        {/* Custom Tab Selector */}
        <div className="flex justify-center md:justify-start">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-neutral-800/80">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-4 py-2.5 rounded-xl font-mono text-[10px] sm:text-xs tracking-wider flex items-center gap-2 cursor-pointer z-10 transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-violet-600/35 border border-violet-500/30 rounded-xl -z-10 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`flex items-center ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  {isActive ? (
                    <span>{tab.label}</span>
                  ) : (
                    <motion.span
                      animate={{
                        backgroundPosition: ["200% 0", "-200% 0"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: "linear-gradient(90deg, #a3a3a3 30%, #ffffff 50%, #a3a3a3 70%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block"
                      }}
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'founder' && (
              <motion.div
                key="founder-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-display">Ikariz.id Group</h3>
                  <p className="text-sm text-cyan-400 font-mono tracking-wide">Academic, Design & Digital Solutions Partner</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1: Teman Tugas */}
                  <SpotlightCard className="p-6 border border-neutral-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between min-h-[320px]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 h-10 w-10 rounded-lg bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400">
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-white font-display">Teman Tugas</h4>
                          <p className="text-[10px] text-neutral-500 font-mono">ikariz.id</p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans text-left">
                        Jasa bantuan penulisan akademik dan penyusunan tugas kuliah/sekolah secara profesional.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800/60 space-y-3">
                      <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">Jurnal Sinta 5-3</span>
                        <span className="text-lg font-bold text-cyan-400 font-display">
                          <Counter end={50} suffix="++" />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">Skripsi Selesai</span>
                        <span className="text-lg font-bold text-indigo-400 font-display">
                          <Counter end={7} suffix="" />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-left">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">Tugas Ringan</span>
                        <span className="text-lg font-bold text-fuchsia-400 font-display">
                          <Counter end={200} suffix="" />
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>

                  {/* Card 2: The Designer */}
                  <SpotlightCard className="p-6 border border-neutral-800/80 hover:border-fuchsia-500/30 transition-all flex flex-col justify-between min-h-[320px]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 h-10 w-10 rounded-lg bg-fuchsia-950/40 border border-fuchsia-800/30 flex items-center justify-center text-fuchsia-400">
                          <Palette className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-white font-display">The Designer</h4>
                          <p className="text-[10px] text-neutral-500 font-mono">ikariz.id</p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans text-left">
                        Jasa desain grafis kreatif, branding, publikasi sosial media, dan layout materi promosi.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800/60 flex justify-between items-center text-left">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 text-left">Desain Terbuat</span>
                      <span className="text-2xl font-bold text-fuchsia-400 font-display">
                        <Counter end={100} suffix="++" />
                      </span>
                    </div>
                  </SpotlightCard>

                  {/* Card 3: likDeveloper */}
                  <SpotlightCard className="p-6 border border-neutral-800/80 hover:border-emerald-500/30 transition-all flex flex-col justify-between min-h-[320px]">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 h-10 w-10 rounded-lg bg-emerald-950/40 border border-emerald-800/30 flex items-center justify-center text-emerald-400">
                          <Code className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-white font-display">likDeveloper</h4>
                          <p className="text-[10px] text-neutral-500 font-mono">ikariz.id</p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans text-left">
                        Jasa pembuatan website custom, web portofolio, sistem administrasi, dan solusi pemrograman.
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800/60 flex justify-between items-center text-left">
                      <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 text-left">Projek Selesai</span>
                      <span className="text-2xl font-bold text-emerald-400 font-display">
                        <Counter end={20} suffix="++" />
                      </span>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            )}

            {activeTab === 'work' && (
              <motion.div
                key="work-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-display">Pengalaman Kerja</h3>
                  <p className="text-sm text-cyan-400 font-mono tracking-wide">Perjalanan Profesional & Kontribusi</p>
                </div>

                <div className="relative border-l border-neutral-800 ml-4 md:ml-6 pl-6 space-y-8 text-left">
                  {workExperiences.map((job, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: idx * 0.05 }}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-neutral-950 border border-neutral-800">
                        <span className={`h-2.5 w-2.5 rounded-full ${job.active ? 'bg-cyan-400 animate-pulse-slow' : 'bg-neutral-600'}`} />
                      </span>

                      <SpotlightCard className="p-5 border border-neutral-800/80 hover:border-violet-500/20 transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="space-y-1">
                            <h4 className="text-base font-bold text-white font-sans">{job.role}</h4>
                            <p className="text-xs text-neutral-400 font-sans font-medium">{job.location}</p>
                          </div>
                          <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
                            job.active 
                              ? 'text-emerald-400 bg-emerald-950/20 border-emerald-800/20' 
                              : 'text-neutral-500 bg-neutral-900 border-neutral-800'
                          }`}>
                            {job.period}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-3 font-sans leading-relaxed">
                          {job.desc}
                        </p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'org' && (
              <motion.div
                key="org-content"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center md:text-left space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-display">Pengalaman Organisasi</h3>
                  <p className="text-sm text-cyan-400 font-mono tracking-wide">Aktif Berorganisasi & Mengembangkan Kepemimpinan</p>
                </div>

                <div className="relative border-l border-neutral-800 ml-4 md:ml-6 pl-6 space-y-8 text-left">
                  {orgExperiences.map((org, idx) => (
                    <motion.div
                      key={idx}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: idx * 0.05 }}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <span className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-neutral-950 border border-neutral-800">
                        <span className={`h-2.5 w-2.5 rounded-full ${org.period === 'Aktif' ? 'bg-fuchsia-400 animate-pulse-slow' : 'bg-neutral-600'}`} />
                      </span>

                      <SpotlightCard className="p-5 border border-neutral-800/80 hover:border-violet-500/20 transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="space-y-1">
                            <h4 className="text-base font-bold text-white font-sans">{org.role}</h4>
                            <p className="text-xs text-neutral-400 font-sans font-medium">{org.organization}</p>
                          </div>
                          <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border ${
                            org.period === 'Aktif' 
                              ? 'text-fuchsia-400 bg-fuchsia-950/20 border-fuchsia-800/20' 
                              : 'text-neutral-500 bg-neutral-900 border-neutral-800'
                          }`}>
                            {org.period}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-3 font-sans leading-relaxed">
                          {org.desc}
                        </p>
                      </SpotlightCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
