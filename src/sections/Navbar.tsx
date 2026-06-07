import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener('scroll', handleScrollClose);
    return () => window.removeEventListener('scroll', handleScrollClose);
  }, [mobileOpen]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-lg transition-all duration-500 ${
        isScrolled
          ? 'scale-100'
          : 'scale-102'
      }`}
    >
      <div className="glass px-3 py-2 rounded-full flex items-center justify-between border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        {/* Brand name */}
        <div className="pl-4 font-display font-extrabold text-sm tracking-widest text-white hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => handleScrollTo('home')}>
          MALIK<span className="text-cyan-400">.DEV</span>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredTab(item.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative z-10 px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-colors duration-300 font-sans cursor-pointer ${
                    isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>

                {/* Sliding/Fading Hover Ring / Glow Backing */}
                {hoveredTab === item.id && (
                  <span
                    className="absolute inset-0 bg-white/10 rounded-full scale-105 border border-white/5 animate-pulse-slow -z-10 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 12px rgba(255, 255, 255, 0.05)',
                    }}
                  />
                )}

                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee] pointer-events-none" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass mt-3 rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden md:hidden"
          >
            <ul className="flex flex-col py-2">
              {menuItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleScrollTo(item.id)}
                      className={`w-full text-left px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-200 font-sans cursor-pointer flex items-center gap-3 ${
                        isActive
                          ? 'text-white bg-white/5'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                      )}
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
