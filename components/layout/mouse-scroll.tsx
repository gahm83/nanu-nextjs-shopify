// ScrollAnimation.tsx
'use client';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const ScrollAnimation: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return; // Check if container is null

      const containerHeight = container.offsetHeight; // TypeScript should recognize this now
      const mousePosition = e.clientY - container.getBoundingClientRect().top;
      const distanceFromEdge = 100;
      const maxSpeed = 2;

      let strength = 0;
      if (mousePosition < distanceFromEdge) {
        strength = distanceFromEdge - mousePosition;
        controls.start({ y: -strength * (maxSpeed / distanceFromEdge) });
      } else if (mousePosition > containerHeight - distanceFromEdge) {
        strength = mousePosition - (containerHeight - distanceFromEdge);
        controls.start({ y: strength * (maxSpeed / distanceFromEdge) });
      } else {
        controls.start({ y: 0 });
      }
    };

    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [controls]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: 'hidden',
        height: '300px', // adjust as needed
        position: 'relative'
      }}
    >
      <motion.div
        animate={controls}
        transition={{ type: 'tween', duration: 0.2 }}
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute'
        }}
      >
        <div
          className="h-[150%]"
          style={{
            background: 'linear-gradient(to bottom, #fff, #000)'
          }}
        >
          {/* Your content here */}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
