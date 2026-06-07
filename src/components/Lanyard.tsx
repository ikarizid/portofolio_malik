import React, { useState, useRef, useEffect } from 'react';

export const Lanyard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0, swayX: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // continuous passive sway when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.04;
      // gentle pendulum oscillation
      setRotate((prev) => ({
        ...prev,
        swayX: Math.sin(angle) * 3, // sways by 3 degrees
      }));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Get mouse position relative to center of container
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    
    setRotate({
      x: -y * 25, // rotate X up to 25 deg
      y: x * 25,  // rotate Y up to 25 deg
      swayX: x * 15, // tilt pendulum with mouse position
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0, swayX: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-start h-[450px] w-[300px] cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {/* Lanyard Strap / Rope */}
      <div 
        className="w-1.5 h-24 bg-neutral-800 border-x border-neutral-700/50 flex flex-col items-center relative origin-top transition-transform duration-300 ease-out"
        style={{
          transform: `rotate(${rotate.swayX * 0.5}deg)`,
        }}
      >
        {/* Metal Clip Ring */}
        <div className="absolute bottom-0 w-3 h-3 border-2 border-neutral-600 rounded-full bg-neutral-900 transform translate-y-1.5 z-10" />
      </div>

      {/* Swaying Card Container */}
      <div
        className="lanyard-physics w-[220px] bg-neutral-900 border border-neutral-800 rounded-2xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.8)] flex flex-col items-center relative overflow-hidden origin-top mt-1"
        style={{
          transform: `rotate(${rotate.swayX}deg) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformOrigin: 'top center',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}
      >
        {/* Hologram metallic badge */}
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-400 to-yellow-300 opacity-60 mix-blend-overlay animate-[spin_8s_linear_infinite]" />

        {/* Metal clip attachment slot */}
        <div className="w-10 h-3 rounded-full bg-neutral-950 border border-neutral-800 mb-4 flex items-center justify-center">
          <div className="w-6 h-1 rounded-full bg-neutral-900" />
        </div>

        {/* Grayscale Profile Image */}
        <div className="w-28 h-28 rounded-xl overflow-hidden border-2 border-neutral-800/80 bg-neutral-950 relative mb-4">
          <img
            src="/profile.png"
            alt="Malik Muhammad Al Azis"
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Card Content details */}
        <div className="w-full text-center space-y-1.5">
          <h2 className="text-lg font-bold font-display text-white tracking-wide">
            Malik Al Azis
          </h2>
          <div className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold bg-cyan-950/40 border border-cyan-800/30 rounded px-2 py-0.5 inline-block">
            Frontend Dev
          </div>
          
          <div className="border-t border-neutral-800/80 my-3 w-full" />
          
          <div className="flex justify-between items-center text-[8px] font-mono text-neutral-500 text-left px-1">
            <div>
              <p>ID NUMBER</p>
              <p className="text-neutral-300 font-semibold mt-0.5">MAA-190206</p>
            </div>
            <div className="text-right">
              <p>ROLE</p>
              <p className="text-neutral-300 font-semibold mt-0.5">JUNIOR PRO</p>
            </div>
          </div>
        </div>

        {/* Barcode representation */}
        <div className="mt-5 w-full flex flex-col items-center">
          <div className="h-6 flex items-center gap-[1.5px] opacity-70">
            {[1, 3, 1, 2, 1, 4, 2, 1, 3, 1, 2, 1, 2, 4, 1, 2, 1, 3, 2, 1].map((w, idx) => (
              <div
                key={idx}
                className="bg-white h-full"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
          <span className="text-[7px] font-mono text-neutral-600 mt-1 tracking-[4px]">
            *MALIK.DEV*
          </span>
        </div>
      </div>
    </div>
  );
};
