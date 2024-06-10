import { useParallax } from '@/hooks/useParallax';
import { motion } from 'framer-motion';
import React from 'react';

// Define prop types
interface ParallaxComponentProps {
  children: React.ReactNode;
  offset: number; // Parallax offset for the effect
}

const ParallaxComponent: React.FC<ParallaxComponentProps> = ({ children, offset }) => {
  const { y, yPercent } = useParallax(offset);

  return <motion.div style={{ y, translateY: yPercent }}>{children}</motion.div>;
};

export default ParallaxComponent;
