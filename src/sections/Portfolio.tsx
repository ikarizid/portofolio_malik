import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { ArrowLeft, ExternalLink, Image as ImageIcon, Sparkles, Layers, Terminal, Palette, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'coding' | 'design';
  techCount: number;
  featuresCount: number;
  description: string;
  keyFeatures: string;
  technologies: string[];
  previewImage?: string;
  accent: string;
}

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates' | 'techStack'>('projects');
  const [projectFilter, setProjectFilter] = useState<'all' | 'coding' | 'design'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [certificateLightbox, setCertificateLightbox] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'web-portfolio',
      title: 'Web Portofolio Interaktif',
      category: 'coding',
      techCount: 3,
      featuresCount: 5,
      description: 'Website portofolio interaktif premium dengan animasi Aurora, framer-motion, dan dark violet theme. Dirancang untuk memamerkan keahlian koding dan riwayat profesional.',
      keyFeatures: 'Aurora Animated BG, Framer Motion, Dark Violet Theme, Responsive.',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      previewImage: '/project-web-portfolio.png',
      accent: 'from-violet-500 to-indigo-500',
    },
    {
      id: 'web-turnitin',
      title: 'Web Turnitin Integration',
      category: 'coding',
      techCount: 4,
      featuresCount: 3,
      description: 'Platform otomasi pengecekan plagiarisme yang terintegrasi dengan API Turnitin untuk membantu akademisi mendeteksi kemiripan naskah ilmiah secara instan.',
      keyFeatures: 'Proses Cepat, UI Sederhana, Laporan PDF Otomatis.',
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express'],
      previewImage: '/project-dummy.png',
      accent: 'from-cyan-500 to-violet-500',
    },
    {
      id: 'business-dashboard',
      title: 'Dashboard Rekap Bisnis',
      category: 'coding',
      techCount: 4,
      featuresCount: 4,
      description: 'Aplikasi internal Ikariz.id Group untuk mengelola statistik pesanan, publikasi jurnal, omzet keuangan, dan manajemen file klien secara real-time.',
      keyFeatures: 'Visualisasi Grafik, Proteksi Keamanan, Export Excel/PDF.',
      technologies: ['React.js', 'Tailwind CSS', 'Laravel', 'MySQL'],
      previewImage: '/project-design-dashboard.png',
      accent: 'from-fuchsia-500 to-violet-500',
    },
    {
      id: 'trading-bot',
      title: 'Bot Trading (MQL5 & Python)',
      category: 'coding',
      techCount: 3,
      featuresCount: 3,
      description: 'Robot trading otomatis yang mengeksekusi sinyal market keuangan berdasarkan indikator teknikal lanjutan dengan latensi eksekusi rendah.',
      keyFeatures: 'Algoritma Presisi Tinggi, Risk Management, Backtest Otomatis.',
      technologies: ['Python', 'MQL5', 'C++'],
      previewImage: '/project-dummy.png',
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'desain-sosmed',
      title: 'Desain Konten Sosial Media',
      category: 'design',
      techCount: 3,
      featuresCount: 4,
      description: 'Pembuatan konten visual berkualitas tinggi untuk Instagram, TikTok, dan platform lainnya. Termasuk feed aesthetic, story, dan thumbnail video dengan nuansa brand modern.',
      keyFeatures: 'Feed Aesthetic, Brand Consistent, Eye-catching, Premium Quality.',
      technologies: ['Canva', 'Photoshop', 'Illustrator'],
      previewImage: '/project-design-social.png',
      accent: 'from-pink-500 to-fuchsia-600',
    },
    {
      id: 'desain-poster',
      title: 'Poster & Banner Digital',
      category: 'design',
      techCount: 3,
      featuresCount: 3,
      description: 'Desain poster, banner, dan materi promosi digital untuk event, seminar, dan kampanye organisasi. Mengutamakan tipografi tegas dan komposisi visual yang menarik.',
      keyFeatures: 'Tipografi Kuat, Layout Dinamis, Print-Ready Quality.',
      technologies: ['CorelDraw', 'Canva', 'Affinity'],
      previewImage: '/project-design-dashboard.png',
      accent: 'from-violet-500 to-fuchsia-500',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => projectFilter === 'all' || p.category === projectFilter
  );

  const techStacks = {
    coding: [
      { name: 'HTML5', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-5 h-5 object-contain" /> },
      { name: 'CSS3', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" className="w-5 h-5 object-contain" /> },
      { name: 'Tailwind CSS', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind" className="w-5 h-5 object-contain" /> },
      { name: 'JavaScript', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JS" className="w-5 h-5 object-contain" /> },
      { name: 'React.js', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-5 h-5 object-contain" /> },
      { name: 'TypeScript', level: 'Advanced', icon: <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TS" className="w-5 h-5 object-contain" /> },
      { name: 'Laravel (PHP)', level: 'Intermediate', icon: <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-5 h-5 object-contain" /> },
      { name: 'Python', level: 'Intermediate', icon: <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-5 h-5 object-contain" /> },
      { name: 'MQL5', level: 'Intermediate', icon: <Terminal className="w-5 h-5 text-emerald-400" /> },
    ],
    design: [
      { name: 'Canva', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/canva/00C4CC" alt="Canva" className="w-5 h-5 object-contain" /> },
      { name: 'Photoshop', level: 'Advanced', icon: <img src="https://cdn.simpleicons.org/adobephotoshop/31A8FF" alt="Photoshop" className="w-5 h-5 object-contain" /> },
      { name: 'CorelDraw', level: 'Advanced', icon: <Palette className="w-5 h-5 text-green-400" /> },
      { name: 'Illustrator', level: 'Advanced', icon: <img src="https://cdn.simpleicons.org/adobeillustrator/FF9A00" alt="Illustrator" className="w-5 h-5 object-contain" /> },
      { name: 'Affinity', level: 'Intermediate', icon: <img src="https://cdn.simpleicons.org/affinity/FFFFFF" alt="Affinity" className="w-5 h-5 object-contain" /> },
    ],
    office: [
      { name: 'Word', level: 'Advanced', icon: <img src="https://cdn.simpleicons.org/microsoftword/2B579A" alt="Word" className="w-5 h-5 object-contain" /> },
      { name: 'PowerPoint', level: 'Advanced', icon: <img src="https://cdn.simpleicons.org/microsoftpowerpoint/B7472A" alt="PowerPoint" className="w-5 h-5 object-contain" /> },
      { name: 'Advanced Excel', level: 'Expert', icon: <img src="https://cdn.simpleicons.org/microsoftexcel/217346" alt="Excel" className="w-5 h-5 object-contain" /> },
    ],
  };

  const tabVariants = {
    initial: { opacity: 0, y: 20, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, y: -15, scale: 0.98, transition: { duration: 0.25 } },
  };

  const cardContainerVariants = {
    animate: { transition: { staggerChildren: 0.07 } },
  };

  const cardItemVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-20 bg-transparent border-t border-violet-900/30"
    >
      <div className="relative z-10 w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400"
          >
            SHOWCASE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white mt-2"
          >
            Portfolio{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
              Showcase
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-xs sm:text-sm text-neutral-400 font-sans mt-3 max-w-lg mx-auto"
          >
            Eksplorasi karya coding & desain — dari web apps hingga konten visual kreatif.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center">
          <div className="glass p-1.5 rounded-xl border border-violet-500/10 flex gap-1">
            {(['projects', 'certificates', 'techStack'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedProject(null);
                }}
                className={`px-5 py-2 rounded-lg font-mono text-xs font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold shadow-[0_4px_20px_rgba(139,92,246,0.4)]'
                    : 'text-neutral-400 hover:text-violet-300 hover:bg-violet-500/10'
                }`}
              >
                {tab === 'techStack' ? 'Tech Stack' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* ===== TAB 1: PROJECTS ===== */}
            {activeTab === 'projects' && (
              <motion.div key="projects" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                <AnimatePresence mode="wait">
                  {!selectedProject ? (
                    <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                      {/* Project category filter */}
                      <div className="flex justify-center mb-8">
                        <div className="flex gap-2">
                          {(['all', 'coding', 'design'] as const).map((f) => (
                            <button
                              key={f}
                              onClick={() => setProjectFilter(f)}
                              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                                projectFilter === f
                                  ? 'bg-violet-600/30 border border-violet-500/50 text-violet-300'
                                  : 'border border-neutral-800 text-neutral-500 hover:border-violet-500/30 hover:text-violet-400'
                              }`}
                            >
                              {f === 'coding' && <Code2 className="w-3 h-3" />}
                              {f === 'design' && <Palette className="w-3 h-3" />}
                              {f === 'all' && <Sparkles className="w-3 h-3" />}
                              {f === 'all' ? 'All Works' : f}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project Cards Grid */}
                      <motion.div
                        variants={cardContainerVariants}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      >
                        <AnimatePresence mode="popLayout">
                          {filteredProjects.map((project) => (
                            <motion.div
                              key={project.id}
                              layout
                              variants={cardItemVariants}
                              initial="initial"
                              animate="animate"
                              exit={{ opacity: 0, scale: 0.95 }}
                            >
                              <SpotlightCard
                                onClick={() => setSelectedProject(project)}
                                className="cursor-pointer group hover:border-violet-500/30 flex flex-col overflow-hidden"
                              >
                                {/* Image Preview */}
                                {project.previewImage && (
                                  <div className="relative aspect-video overflow-hidden bg-neutral-950">
                                    <img
                                      src={project.previewImage}
                                      alt={project.title}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                                    {/* Category badge */}
                                    <div className="absolute top-3 left-3">
                                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider glass border border-white/10 ${
                                        project.category === 'coding'
                                          ? 'text-cyan-400'
                                          : 'text-fuchsia-400'
                                      }`}>
                                        {project.category === 'coding'
                                          ? <><Code2 className="w-2.5 h-2.5" /> Coding</>
                                          : <><Palette className="w-2.5 h-2.5" /> Design</>}
                                      </span>
                                    </div>
                                    {/* View detail hint */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <div className="glass border border-violet-400/30 text-violet-300 px-4 py-2 rounded-full text-xs font-mono flex items-center gap-2">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Lihat Detail
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Card Body */}
                                <div className="p-5 space-y-3 text-left flex-1">
                                  <h3 className="text-sm font-bold font-display text-white group-hover:text-violet-300 transition-colors leading-snug">
                                    {project.title}
                                  </h3>
                                  <p className="text-xs text-neutral-400 font-sans line-clamp-2 leading-relaxed">
                                    {project.description}
                                  </p>
                                  <div className="flex flex-wrap gap-1.5 pt-1">
                                    {project.technologies.slice(0, 3).map((t) => (
                                      <span
                                        key={t}
                                        className="bg-violet-950/40 border border-violet-800/30 text-[9px] font-mono text-violet-400 px-2 py-0.5 rounded"
                                      >
                                        {t}
                                      </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                      <span className="text-[9px] font-mono text-neutral-600">
                                        +{project.technologies.length - 3} more
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </SpotlightCard>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  ) : (
                    /* ===== PROJECT DETAIL VIEW ===== */
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-violet p-6 md:p-8 rounded-2xl border border-violet-500/20 text-left space-y-6"
                    >
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-violet-400 transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        [ ← Kembali ke Galeri ]
                      </button>

                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left: Info */}
                        <div className="flex-1 space-y-5">
                          <div>
                            <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                              selectedProject.category === 'coding'
                                ? 'text-cyan-400 border-cyan-800/40 bg-cyan-950/30'
                                : 'text-fuchsia-400 border-fuchsia-800/40 bg-fuchsia-950/30'
                            }`}>
                              {selectedProject.category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-extrabold font-display text-white mt-3">
                              {selectedProject.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <span className="bg-violet-950/40 border border-violet-900/50 text-violet-400 text-[10px] font-mono px-2.5 py-1 rounded">
                                [ {selectedProject.techCount} ] Technologies
                              </span>
                              <span className="bg-indigo-950/40 border border-indigo-900/50 text-indigo-400 text-[10px] font-mono px-2.5 py-1 rounded">
                                [ {selectedProject.featuresCount} ] Key Features
                              </span>
                            </div>
                          </div>

                          <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                            {selectedProject.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map((t) => (
                              <span
                                key={t}
                                className="bg-neutral-900 border border-violet-800/20 text-xs font-mono text-violet-300 px-3 py-1 rounded-lg"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right: Preview + Highlights */}
                        <div className="w-full lg:w-80 space-y-4">
                          {selectedProject.previewImage && (
                            <div className="rounded-xl overflow-hidden border border-violet-500/20 aspect-video">
                              <img
                                src={selectedProject.previewImage}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="bg-neutral-950/80 border border-violet-900/30 rounded-xl p-5 space-y-3">
                            <h4 className="text-[10px] font-mono text-violet-400 uppercase tracking-widest border-b border-violet-900/30 pb-2">
                              Key Highlights
                            </h4>
                            <p className="text-xs font-sans text-neutral-400 leading-relaxed">
                              {selectedProject.keyFeatures}
                            </p>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-violet-400 bg-violet-950/30 border border-violet-800/30 rounded p-2">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Premium Quality Work</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* ===== TAB 2: CERTIFICATES ===== */}
            {activeTab === 'certificates' && (
              <motion.div key="certificates" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                <motion.div
                  variants={cardContainerVariants}
                  initial="initial"
                  animate="animate"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <motion.div variants={cardItemVariants}>
                    <SpotlightCard className="p-4 flex flex-col justify-between hover:border-violet-500/30 group">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
                        <img
                          src="/certificate.png"
                          alt="Sertifikat PKL PT. Cakrawala Global Yaksa"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-zoom-in"
                          onClick={() => setCertificateLightbox('/certificate.png')}
                        >
                          <div className="glass border border-white/10 p-3 rounded-full text-white">
                            <ImageIcon className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="text-left mt-4 space-y-1">
                        <span className="text-[9px] font-mono text-violet-400 bg-violet-950/40 border border-violet-800/30 px-2 py-0.5 rounded uppercase font-semibold">
                          Internship PKL
                        </span>
                        <h3 className="text-sm font-semibold text-white font-sans mt-1.5">
                          Sertifikat Kerja Praktek Lapang (PKL)
                        </h3>
                        <p className="text-xs text-neutral-400 font-sans">
                          PT. Cakrawala Global Yaksa — Malik Al Azis
                        </p>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* ===== TAB 3: TECH STACK ===== */}
            {activeTab === 'techStack' && (
              <motion.div key="techStack" variants={tabVariants} initial="initial" animate="animate" exit="exit" className="space-y-8 text-left">
                {/* Coding */}
                <motion.div variants={cardContainerVariants} initial="initial" animate="animate" className="space-y-4">
                  <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-violet-400" />
                    Programming & Coding
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {techStacks.coding.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        variants={cardItemVariants}
                        className={`glass-violet p-3.5 rounded-xl border border-violet-500/10 flex flex-col justify-between h-[88px] hover:border-violet-400/30 transition-colors ${
                          idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                        }`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {tech.icon}
                          <span className="text-xs font-semibold text-white font-display truncate">{tech.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-violet-400 tracking-wider uppercase">{tech.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Design */}
                <motion.div variants={cardContainerVariants} initial="initial" animate="animate" className="space-y-4 pt-4">
                  <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                    <Palette className="w-4 h-4 text-fuchsia-400" />
                    Creative & Design
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {techStacks.design.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        variants={cardItemVariants}
                        className={`glass-violet p-3.5 rounded-xl border border-fuchsia-500/10 flex flex-col justify-between h-[88px] hover:border-fuchsia-400/30 transition-colors ${
                          idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                        }`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {tech.icon}
                          <span className="text-xs font-semibold text-white font-display truncate">{tech.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-fuchsia-400 tracking-wider uppercase">{tech.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Office */}
                <motion.div variants={cardContainerVariants} initial="initial" animate="animate" className="space-y-4 pt-4">
                  <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    Office Productivity
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {techStacks.office.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        variants={cardItemVariants}
                        className={`glass-violet p-3.5 rounded-xl border border-indigo-500/10 flex flex-col justify-between h-[88px] hover:border-indigo-400/30 transition-colors ${
                          idx % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                        }`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {tech.icon}
                          <span className="text-xs font-semibold text-white font-display truncate">{tech.name}</span>
                        </div>
                        <span className="text-[9px] font-mono text-indigo-400 tracking-wider uppercase">{tech.level}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {certificateLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertificateLightbox(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl w-full bg-neutral-900 border border-violet-500/20 rounded-2xl overflow-hidden p-2 shadow-2xl"
            >
              <img
                src={certificateLightbox}
                alt="Sertifikat"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-[10px] font-mono text-violet-300 border border-violet-500/20">
                Click anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
