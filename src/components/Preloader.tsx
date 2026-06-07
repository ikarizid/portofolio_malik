import React, { useEffect, useState } from 'react';
import { Code2, Globe, Settings } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'loading' | 'welcome' | 'exit'>('loading');

  useEffect(() => {
    // Show spinner for 800ms, then switch to "Welcome" text
    const welcomeTimer = setTimeout(() => {
      setStage('welcome');
    }, 800);

    // After 2000ms total, initiate exit animation
    const exitTimer = setTimeout(() => {
      setStage('exit');
    }, 2000);

    // Complete loader after exit animation finishes (total 2500ms)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-50 transition-all duration-700 ease-in-out ${
        stage === 'exit' ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated Icons Ring */}
        <div
          className={`flex items-center gap-4 transition-all duration-500 ease-in-out ${
            stage === 'welcome' ? 'opacity-0 scale-75 blur-sm' : 'opacity-100'
          }`}
        >
          <Code2 className="w-8 h-8 text-cyan-400 animate-[spin_3s_linear_infinite]" />
          <Globe className="w-8 h-8 text-indigo-400 animate-[spin_5s_linear_infinite]" />
          <Settings className="w-8 h-8 text-fuchsia-400 animate-[spin_4s_linear_infinite]" />
        </div>

        {/* Welcome Text */}
        <div
          className={`absolute flex flex-col items-center justify-center transition-all duration-700 ease-out ${
            stage === 'welcome'
              ? 'opacity-100 scale-100 blur-none'
              : 'opacity-0 scale-75 blur-md'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">
            WELCOME
          </h1>
          <p className="text-neutral-500 text-sm mt-2 tracking-widest uppercase font-mono">
            malik.dev is loading
          </p>
        </div>
      </div>
    </div>
  );
};
