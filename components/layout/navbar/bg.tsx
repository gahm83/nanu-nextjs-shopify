'use client';
// import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Bg = () => {
  const { scrollY } = useScroll();
  const pathName = usePathname();
  const controls = useAnimation();
  const shopPathPattern = /^\/shop(\/(sauces|tortillas))?$/;
  const animateBg = pathName === '/' || shopPathPattern.test(pathName);
  const threshold = 90;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest > threshold ? controls.start('visible') : controls.start('hidden');
  });

  const bgAnimation = {
    hidden: {
      backgroundColor: 'rgba(83,40,38,0)'
    },
    visible: {
      backgroundColor: 'rgba(83,40,38,1)'
    }
  };

  return (
    <motion.div
      className="absolute h-full w-full bg-[#532826]/0"
      initial={animateBg ? 'hidden' : 'visible'}
      animate={animateBg ? controls : false}
      variants={bgAnimation}
    ></motion.div>
  );
};

export default Bg;
