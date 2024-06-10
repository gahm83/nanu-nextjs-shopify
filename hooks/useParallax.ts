import { MotionValue, useScroll, useTransform } from 'framer-motion';

type ParallaxEffect = {
  y: MotionValue<number>;
  yPercent: MotionValue<number>;
};

export const useParallax = (offset: number): ParallaxEffect => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, offset]);
  const yPercent = useTransform(scrollY, [0, 1000], [0, offset / 10]);

  return { y, yPercent };
};
