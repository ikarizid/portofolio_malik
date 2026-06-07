import React, { useEffect, useRef } from 'react';

// ── Section Themes ─────────────────────────────────────────────────────────
// Each section has its own aurora atmosphere.
// Colors are [R, G, B] arrays so we can interpolate between them.
interface OrbState {
  bx: number;   // 0-1 relative to canvas width
  by: number;   // 0-1 relative to canvas height
  r: number;    // radius
  rgb: [number, number, number];
  alpha: number;
}

interface Theme {
  orbs: OrbState[];
  particleColor: [number, number, number]; // dominant particle hue
  gridColor: [number, number, number];
}

const THEMES: Theme[] = [
  // 0 ── HOME: deep violet + indigo
  {
    particleColor: [167, 139, 250],
    gridColor: [139, 92, 246],
    orbs: [
      { bx: 0.10, by: 0.15, r: 480, rgb: [91, 33, 182],  alpha: 0.55 },
      { bx: 0.85, by: 0.75, r: 360, rgb: [124, 58, 237], alpha: 0.45 },
      { bx: 0.55, by: 0.05, r: 280, rgb: [79, 70, 229],  alpha: 0.40 },
      { bx: 0.05, by: 0.80, r: 220, rgb: [196, 181, 253],alpha: 0.25 },
    ],
  },
  // 1 ── ABOUT: fuchsia + violet
  {
    particleColor: [240, 171, 252],
    gridColor: [217, 70, 239],
    orbs: [
      { bx: 0.85, by: 0.10, r: 440, rgb: [168, 85, 247], alpha: 0.55 },
      { bx: 0.10, by: 0.65, r: 380, rgb: [217, 70, 239], alpha: 0.50 },
      { bx: 0.50, by: 0.90, r: 260, rgb: [147, 51, 234], alpha: 0.35 },
      { bx: 0.75, by: 0.45, r: 200, rgb: [236, 72, 153], alpha: 0.25 },
    ],
  },
  // 2 ── EXPERIENCE: cyan + teal + violet
  {
    particleColor: [103, 232, 249],
    gridColor: [6, 182, 212],
    orbs: [
      { bx: 0.05, by: 0.30, r: 420, rgb: [14, 165, 233],  alpha: 0.45 },
      { bx: 0.80, by: 0.20, r: 320, rgb: [139, 92, 246],  alpha: 0.40 },
      { bx: 0.45, by: 0.80, r: 300, rgb: [6, 182, 212],   alpha: 0.45 },
      { bx: 0.75, by: 0.70, r: 200, rgb: [99, 102, 241],  alpha: 0.30 },
    ],
  },
  // 3 ── PORTFOLIO: indigo + blue + violet
  {
    particleColor: [129, 140, 248],
    gridColor: [99, 102, 241],
    orbs: [
      { bx: 0.80, by: 0.05, r: 460, rgb: [99, 102, 241],  alpha: 0.50 },
      { bx: 0.10, by: 0.85, r: 380, rgb: [139, 92, 246],  alpha: 0.45 },
      { bx: 0.55, by: 0.50, r: 260, rgb: [79, 70, 229],   alpha: 0.35 },
      { bx: 0.20, by: 0.20, r: 220, rgb: [167, 139, 250], alpha: 0.30 },
    ],
  },
  // 4 ── CONTACT: rose + fuchsia + violet
  {
    particleColor: [251, 191, 210],
    gridColor: [244, 63, 94],
    orbs: [
      { bx: 0.15, by: 0.10, r: 440, rgb: [219, 39, 119],  alpha: 0.45 },
      { bx: 0.80, by: 0.60, r: 360, rgb: [217, 70, 239],  alpha: 0.50 },
      { bx: 0.40, by: 0.85, r: 280, rgb: [168, 85, 247],  alpha: 0.40 },
      { bx: 0.70, by: 0.10, r: 200, rgb: [236, 72, 153],  alpha: 0.25 },
    ],
  },
];

const SECTION_IDS = ['home', 'about', 'experience', 'portfolio', 'contact'];

// ── Utilities ──────────────────────────────────────────────────────────────
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpOrb(a: OrbState, b: OrbState, t: number): OrbState {
  return {
    bx:    lerp(a.bx,    b.bx,    t),
    by:    lerp(a.by,    b.by,    t),
    r:     lerp(a.r,     b.r,     t),
    alpha: lerp(a.alpha, b.alpha, t),
    rgb:   [
      lerp(a.rgb[0], b.rgb[0], t),
      lerp(a.rgb[1], b.rgb[1], t),
      lerp(a.rgb[2], b.rgb[2], t),
    ] as [number, number, number],
  };
}

function lerpTheme(a: Theme, b: Theme, t: number): Theme {
  // Smooth-step easing
  const s = t * t * (3 - 2 * t);
  return {
    particleColor: [
      lerp(a.particleColor[0], b.particleColor[0], s),
      lerp(a.particleColor[1], b.particleColor[1], s),
      lerp(a.particleColor[2], b.particleColor[2], s),
    ] as [number, number, number],
    gridColor: [
      lerp(a.gridColor[0], b.gridColor[0], s),
      lerp(a.gridColor[1], b.gridColor[1], s),
      lerp(a.gridColor[2], b.gridColor[2], s),
    ] as [number, number, number],
    orbs: a.orbs.map((orbA, i) => lerpOrb(orbA, b.orbs[i] || orbA, s)),
  };
}

// ── Component ──────────────────────────────────────────────────────────────
export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000 });

  // Current interpolated theme (mutable, updated in rAF loop)
  const currentThemeRef = useRef<Theme>(THEMES[0]);
  // Orb floating offsets (animated separately)
  const orbAnglesRef = useRef<number[]>(THEMES[0].orbs.map(() => Math.random() * Math.PI * 2));
  const orbSpeedsRef = useRef<number[]>([0.0003, 0.0004, 0.0005, 0.0002]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    // ── Particles ──────────────────────────────────────────────────────────
    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number; baseR: number;
    }

    const PARTICLE_COUNT = 55;
    const CONNECT_DIST = 115;
    const MOUSE_DIST = 190;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const r = Math.random() * 1.4 + 0.5;
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r, baseR: r,
        };
      });
    };

    // ── Scroll → Theme interpolation ───────────────────────────────────────
    const getScrollTheme = (): Theme => {
      const sectionEls = SECTION_IDS.map((id) => document.getElementById(id));
      const scrollY  = window.scrollY;
      const viewH    = window.innerHeight;
      const midY     = scrollY + viewH / 2;

      let activeIdx   = 0;
      let progressInSection = 0;

      for (let i = 0; i < sectionEls.length; i++) {
        const el = sectionEls[i];
        if (!el) continue;
        const top    = el.offsetTop;
        const height = el.offsetHeight;
        if (midY >= top && midY < top + height) {
          activeIdx = i;
          progressInSection = (midY - top) / height;
          break;
        }
        if (i === sectionEls.length - 1 && midY >= top) {
          activeIdx = i;
          progressInSection = Math.min((midY - top) / height, 1);
        }
      }

      const nextIdx = Math.min(activeIdx + 1, THEMES.length - 1);
      // Use the last 40% of current section to blend into next
      const blendStart = 0.6;
      const blendT = progressInSection < blendStart
        ? 0
        : (progressInSection - blendStart) / (1 - blendStart);

      return lerpTheme(THEMES[activeIdx], THEMES[nextIdx], blendT);
    };

    // ── Mouse tracking ─────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -2000, y: -2000 };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    resize();

    // ── Render loop ────────────────────────────────────────────────────────
    const LERP_SPEED = 0.025; // how fast the current theme chases target

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const W = canvas.width;
      const H = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // -- Advance orb angles (floating motion)
      orbAnglesRef.current = orbAnglesRef.current.map(
        (a, i) => a + (orbSpeedsRef.current[i] || 0.0003)
      );

      // -- Target theme from scroll
      const target = getScrollTheme();

      // -- Lerp current theme → target
      const cur = currentThemeRef.current;
      currentThemeRef.current = lerpTheme(cur, target, LERP_SPEED);
      const theme = currentThemeRef.current;

      // ---- 1. Aurora orbs ------------------------------------------------
      theme.orbs.forEach((orb, i) => {
        const angle   = orbAnglesRef.current[i] || 0;
        const orbit   = 60 + i * 20;
        const cx = orb.bx * W + Math.cos(angle)            * orbit;
        const cy = orb.by * H + Math.sin(angle * 0.65)     * orbit * 0.7;

        const [r, g, b] = orb.rgb;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, orb.r);
        grad.addColorStop(0,   `rgba(${r},${g},${b},${orb.alpha})`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},${orb.alpha * 0.45})`);
        grad.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // ---- 2. Mouse cursor glow ------------------------------------------
      if (mx > -1000) {
        const [r, g, b] = theme.particleColor;
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 160);
        mg.addColorStop(0,   `rgba(${r},${g},${b},0.18)`);
        mg.addColorStop(0.5, `rgba(${r},${g},${b},0.06)`);
        mg.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(mx, my, 160, 0, Math.PI * 2);
        ctx.fillStyle = mg;
        ctx.fill();
      }

      // ---- 3. Particles + connections ------------------------------------
      const [pr, pg, pb] = theme.particleColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        const dMouse = Math.hypot(p.x - mx, p.y - my);
        p.r = dMouse < 80 ? p.baseR * 2.5 : p.baseR;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pr},${pg},${pb},0.55)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2   = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < CONNECT_DIST) {
            const a = ((CONNECT_DIST - dist) / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${pr},${pg},${pb},${a})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        if (dMouse < MOUSE_DIST) {
          const a = ((MOUSE_DIST - dMouse) / MOUSE_DIST) * 0.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(${pr},${pg},${pb},${a})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Canvas: particles + aurora orbs (scroll-morphed) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ mixBlendMode: 'screen', opacity: 0.9 }}
      />

      {/* Grid overlay — subtle dot / line grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)',
        }}
      />
    </>
  );
};
