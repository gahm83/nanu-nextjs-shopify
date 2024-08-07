'use client';
import { ReactNode, useState } from 'react';
// import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = ({ children }: { children: ReactNode }) => {
  const [positionClassname, setPositionClassname] = useState('absolute');
  const { scrollY } = useScroll();
  const pathName = usePathname();
  const controls = useAnimation();
  const pathNames = ['/', '/about-us', '/faqs', '/contact-us'];
  const shopPathPattern = /^\/shop(\/(sauces|tortillas))?$/;
  const animateBg = pathName.indexOf(pathName) > -1 || shopPathPattern.test(pathName);
  const threshold = 150;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest > 150 ? controls.start('visible') : controls.start('hidden');
    setPositionClassname(latest > 60 ? 'fixed top-0' : 'absolute top-[60px]');
  });

  const bgAnimation = {
    hidden: { backgroundColor: 'rgba(83,40,38,0)' },
    visible: { backgroundColor: 'rgba(83,40,38,1)' }
  };

  return (
    <header className={`${positionClassname} inset-x-0 z-50 w-screen overflow-hidden`}>
      <motion.div
        className="h-full w-full"
        initial={animateBg ? 'hidden' : 'visible'}
        animate={animateBg ? controls : false}
        variants={bgAnimation}
      >
        {children}
      </motion.div>
    </header>
  );
};

export default Header;
