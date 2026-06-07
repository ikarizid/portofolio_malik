import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { InteractiveBackground } from './components/InteractiveBackground';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Portfolio } from './sections/Portfolio';
import { Contact } from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map 'experience' section to highlight 'about' or 'portfolio' in navbar
            // We highlight 'about' because experience/teaching is a continuation of personal details
            if (section === 'experience') {
              setActiveSection('about');
            } else {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute on mount to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  if (loading) {
    return <Preloader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#07030f] text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* Interactive Background */}
      <InteractiveBackground />

      {/* Navigation Menu */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Experience & Business */}
        <Experience />

        {/* Section 4: Portfolio Showcase */}
        <Portfolio />

        {/* Section 5: Contact & Guestbook */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#07030f] border-t border-violet-900/20 text-center text-violet-900 text-xs font-mono select-none">
        <p className="text-neutral-600">© {new Date().getFullYear()} MALIK MUHAMMAD AL AZIS. ALL RIGHTS RESERVED.</p>
        <p className="mt-1.5 text-[10px] text-violet-800">DESIGNED &amp; CODED WITH PASSION ✦ POWERED BY VIOLET</p>
      </footer>
    </div>
  );
}

export default App;
