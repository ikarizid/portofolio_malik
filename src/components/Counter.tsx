import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number; // duration in ms
}

export const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const startValue = 0;

    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic function
      const easeProgress = progress * (2 - progress);

      const currentValue = Math.floor(startValue + (end - startValue) * easeProgress);
      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
};
