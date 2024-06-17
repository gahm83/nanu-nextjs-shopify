'use client';
import Link from 'next/link';
// import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Logo = () => {
  const { scrollY } = useScroll();
  const pathName = usePathname();
  const controlsTop = useAnimation();
  const controlsX = useAnimation();

  const shopPathPattern = /^\/shop(\/(sauces|tortillas))?$/;

  const animateLogo =
    pathName === '/' ||
    pathName === '/about-us' ||
    pathName === '/faqs' ||
    shopPathPattern.test(pathName);

  const thresholdTop =
    pathName === '/about-us' || pathName === '/faqs' || pathName === '/contact-us' ? 800 : 90;
  const thresholdX = pathName === '/about-us' ? 920 : 120;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    console.log(latest);
    latest > thresholdTop ? controlsTop.start('hidden') : controlsTop.start('visible');
    latest > thresholdX ? controlsX.start('hidden') : controlsX.start('visible');
  });

  const logoAnimation = {
    hidden: {
      height: 0,
      marginBottom: 0,
      opacity: 0
    },
    visible: {
      height: 60,
      marginBottom: 12,
      opacity: 1
    }
  };

  const leftItemAnimation = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const rightItemAnimation = {
    hidden: {
      x: 50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <Link
      href="/"
      className="relative z-10 mx-auto flex w-[180px] flex-col items-center justify-between"
    >
      {animateLogo && (
        <>
          <motion.svg
            viewBox="0 0 72.78 81.7"
            className="w-[28.43%] origin-center"
            initial={animateLogo ? 'hidden' : 'visible'}
            animate={animateLogo ? controlsTop : false}
            variants={logoAnimation}
          >
            <path
              d="M40.87.28A39.26 39.26 0 0 0 36.4 0a38.38 38.38 0 0 0-4.49.28c-1.31.16-2.38.35-3.56.57a34.27 34.27 0 0 0-8 2.59C19.2 4 17 5.16 16.15 5.71A39.4 39.4 0 0 0 12 8.81l-.32.27a23.07 23.07 0 0 0-2.83 2.86 47.61 47.61 0 0 0-3 4.05 37.14 37.14 0 0 0-2.5 4.51 28.42 28.42 0 0 0-2 5.42c-.35 1.31-.58 2.2-.8 3.42a44.53 44.53 0 0 0-.55 7.1h2.28a26 26 0 0 1 1-6.57c.27-.7.4-.87.65-.82 0 0-.14.62-.21 1.18a61.32 61.32 0 0 0-.3 8.9H5.6a48.73 48.73 0 0 1 .63-8.43c.21-1.16.53-1.55.81-1.47 0 0-.08.45-.14 1.06A66.07 66.07 0 0 0 6.73 40H9s-.09-1.94 0-4.77c.11-1.88.33-3.67.44-4.3.2-1.17.5-1.44.74-1.39 0 0-.06.39-.08.77a56.21 56.21 0 0 0 .07 8.12h2.2v-4.09a22.55 22.55 0 0 1 .32-4.34c.33-1.9.84-2.73 1.33-2.63a5.71 5.71 0 0 0-.53 2.82 13.12 13.12 0 0 0 .61 3.12l2.31-.37a16.52 16.52 0 0 1-.57-5.64 15.41 15.41 0 0 1 1.28-5 11.29 11.29 0 0 1 3.81-4.87A26.07 26.07 0 0 1 31 13h.05a25.78 25.78 0 0 1 10.64 0 26 26 0 0 1 10.09 4.4 11.28 11.28 0 0 1 3.81 4.87 15.16 15.16 0 0 1 1.28 5 16.52 16.52 0 0 1-.57 5.64l2.31.37a12.46 12.46 0 0 0 .61-3.12 5.72 5.72 0 0 0-.53-2.82c.5-.1 1 .73 1.33 2.63a22.55 22.55 0 0 1 .31 4.39v4.1h2.21a57.48 57.48 0 0 0 .06-8.12c0-.38-.08-.77-.08-.77.24-.05.54.22.74 1.39.12.64.33 2.43.44 4.3.09 2.83 0 4.77 0 4.77h2.29a2.72 2.72 0 0 1 0-.38 68.9 68.9 0 0 0-.19-9.34c-.07-.61-.14-1.06-.14-1.06.29-.08.6.31.81 1.47a48.73 48.73 0 0 1 .63 8.43h2.18a60.5 60.5 0 0 0-.31-8.9 10.76 10.76 0 0 0-.21-1.18c.25-.05.38.12.65.82a25.93 25.93 0 0 1 1 6.57h2.28a45.24 45.24 0 0 0-.54-7.1c-.23-1.22-.41-2.11-.76-3.42a28.17 28.17 0 0 0-2-5.42A37.14 37.14 0 0 0 66.94 16a49.75 49.75 0 0 0-3-4.05 23.9 23.9 0 0 0-2.84-2.86l-.32-.27a39.4 39.4 0 0 0-4.16-3.1c-.84-.55-3.05-1.71-4.17-2.27a34.27 34.27 0 0 0-8-2.59c-1.2-.23-2.27-.42-3.58-.58Zm0 81.15a41.78 41.78 0 0 1-4.47.27 42 42 0 0 1-4.47-.27c-1.31-.16-2.38-.35-3.56-.58a34.27 34.27 0 0 1-8-2.59C19.2 77.7 17 76.55 16.15 76A39.48 39.48 0 0 1 12 72.89l-.32-.26a23.79 23.79 0 0 1-2.83-2.86c-1.11-1.31-2-2.65-3-4a36.54 36.54 0 0 1-2.5-4.52 28.33 28.33 0 0 1-2-5.41C1 54.47.77 53.58.55 52.36a44.53 44.53 0 0 1-.55-7.1h2.28a26.1 26.1 0 0 0 1 6.58c.27.7.4.87.65.82 0 0-.14-.63-.21-1.19a61.19 61.19 0 0 1-.3-8.89H5.6A48.78 48.78 0 0 0 6.23 51c.21 1.15.53 1.54.81 1.46 0 0-.08-.45-.14-1a66 66 0 0 1-.17-9.72H9s-.09 1.93 0 4.77c.11 1.87.33 3.66.44 4.3.2 1.16.5 1.44.74 1.38 0 0-.06-.38-.08-.76a56.32 56.32 0 0 1 .07-8.13h2.2v4.1a22.5 22.5 0 0 0 .31 4.39c.33 1.9.84 2.74 1.33 2.64a5.75 5.75 0 0 1-.53-2.83 13 13 0 0 1 .61-3.11l2.31.37a16.47 16.47 0 0 0-.57 5.64 15.54 15.54 0 0 0 1.28 5 11.26 11.26 0 0 0 3.81 4.86A25.77 25.77 0 0 0 31 68.69h.05a26.12 26.12 0 0 0 10.64 0 25.85 25.85 0 0 0 10.09-4.4 11.24 11.24 0 0 0 3.81-4.86 15.22 15.22 0 0 0 1.28-5 16.47 16.47 0 0 0-.57-5.64l2.31-.37a12.32 12.32 0 0 1 .61 3.11 5.77 5.77 0 0 1-.53 2.83c.5.09 1-.74 1.33-2.64a22.5 22.5 0 0 0 .31-4.39v-4.1h2.21a57.59 57.59 0 0 1 .06 8.13c0 .38-.08.76-.08.76.24.06.54-.22.74-1.38.12-.65.33-2.43.44-4.3.09-2.84 0-4.77 0-4.77h2.29a2.58 2.58 0 0 0 0 .37 69 69 0 0 1-.19 9.35c-.07.6-.14 1-.14 1 .29.08.6-.3.81-1.46a48.78 48.78 0 0 0 .63-8.43h2.18a60.37 60.37 0 0 1-.31 8.89 11.19 11.19 0 0 1-.21 1.19c.25.05.38-.12.65-.82a26 26 0 0 0 1-6.58h2.28a45.24 45.24 0 0 1-.54 7.1c-.23 1.22-.41 2.11-.76 3.43a28.33 28.33 0 0 1-2 5.41 37.28 37.28 0 0 1-2.5 4.52c-1 1.4-1.89 2.74-3 4a23.9 23.9 0 0 1-2.84 2.86l-.32.26a39.48 39.48 0 0 1-4.1 3.24c-.84.55-3.05 1.7-4.17 2.26a33.8 33.8 0 0 1-8 2.59c-1.21.23-2.28.42-3.59.58Zm-.87-26v-.19a2.74 2.74 0 0 1 .34-1.69L43 50.07c2.07-2.74 4.4-5.8 5.89-8 .36-.51.56-1-.08-1.59l-.5-.42-.59-.5c-.7-.63-.94-.81-1.52-.14-1.21 1.4-6.48 7-6.48 7 0-.2 0-.75-.1-1.45-.14-1.9-.38-5-.09-5.77a10.87 10.87 0 0 1 1.6-2.44c.18-.22.35-.43.5-.64.49-.63.8-1 1.07-1.4.48-.64.82-1.08 1.73-2.25a.38.38 0 0 0 0-.49l-.31-.32a9.75 9.75 0 0 0-1.34-1.24c-.9-.63-1-.57-1.3-.32s-.59.61-.88.93-.51.58-.66.74c-.17.18-.35.37-.79.89v-.1c-.07-.73-.38-4.36-.45-6.76a.88.88 0 0 0-.88-.87H35.2a.89.89 0 0 0-.89.87c-.06 2.4-.38 6-.44 6.76v.1c-.45-.53-.63-.71-.8-.9s-.3-.32-.65-.73-.6-.65-.88-.93-.41-.31-1.3.32a10.44 10.44 0 0 0-1.35 1.24l-.3.32a.37.37 0 0 0 0 .49l1.74 2.27 1.05 1.38c.14.19.3.38.46.58a10.23 10.23 0 0 1 1.64 2.5c.3.8.06 3.87-.09 5.77-.05.71-.09 1.25-.09 1.45 0 0-5.14-5.44-6.49-7-.57-.67-.81-.49-1.52.14-.2.18-.38.33-.56.47l-.53.45c-.62.56-.43 1.08-.07 1.59 1.49 2.16 3.81 5.23 5.88 8 1 1.28 1.9 2.49 2.64 3.5a2.66 2.66 0 0 1 .35 1.68v.19a70.75 70.75 0 0 1-.7 7.14 11.1 11.1 0 0 0 8.47.1l.25-.1a50.19 50.19 0 0 1-1-7.14Zm10.78-17.2a1.92 1.92 0 0 0 1.81-2.16c-.09-1.65-.92-2.41-2.51-2.31a2.23 2.23 0 0 0-1.77 2.17 2.29 2.29 0 0 0 2.47 2.3Zm-30.59-2.16A1.93 1.93 0 0 0 22 38.23a2.29 2.29 0 0 0 2.47-2.3 2.23 2.23 0 0 0-1.78-2.17c-1.58-.1-2.4.66-2.5 2.31Zm25.75-6.77a1.91 1.91 0 0 0 1.82-2.15c-.09-1.65-.92-2.41-2.51-2.31A2.22 2.22 0 0 0 43.48 27a2.27 2.27 0 0 0 2.46 2.3Zm-7.31-8.76a1.93 1.93 0 0 1-1.82 2.16 2.29 2.29 0 0 1-2.47-2.3 2.23 2.23 0 0 1 1.78-2.17c1.59-.1 2.41.66 2.51 2.31Zm-12 8.76a1.91 1.91 0 0 1-1.82-2.15c.1-1.65.92-2.41 2.51-2.31A2.21 2.21 0 0 1 29.13 27a2.27 2.27 0 0 1-2.46 2.3Z"
              className="fill-[#f6e7e0]"
            />
          </motion.svg>
          <motion.svg
            viewBox="0 0 31.18 24.53"
            className="absolute bottom-[8%] left-0 block w-[12.17%] origin-right -translate-y-1/2"
            initial={animateLogo ? 'hidden' : 'visible'}
            animate={animateLogo ? controlsTop : false}
            variants={leftItemAnimation}
          >
            <path
              d="M15.84 0a4.78 4.78 0 0 1 5.08 5.1c0 3.11-2 5-5.08 5a4.72 4.72 0 0 1-5.07-5A4.8 4.8 0 0 1 15.84 0Zm.38 7.79c1.79 0 3-.79 3-2.44 0-1.8-1.59-3.05-4-3.05-1.62 0-2.83.87-2.83 2.44.06 1.84 1.61 3.06 3.83 3.06ZM0 .22v9.65h1.67v-4h5v4h1.66V.22H6.67v3.49h-5V.22Zm5.62 14.66h8.87V17h-3.6v7.52H9.22V17h-3.6Zm13.75 4.45L16 14.88h1.92l2.47 3.23 2.32-3.23h2.63l-3.58 4.76 3.79 4.89h-1.91l-2.93-3.7-2.66 3.7h-2.62l3.94-5.2ZM23 .21v5.17c0 3.19 1.51 4.71 3.95 4.71s4.23-1.59 4.23-4.71V.21h-1.67v5.16c0 1.68-.83 2.41-2.19 2.41-1.81 0-2.65-.88-2.65-3V.21Z"
              className="fill-[#f6e7e0]"
            />
          </motion.svg>
        </>
      )}
      <svg viewBox="0 0 161.96 53.99" className={'w-[63.25%]'}>
        <path
          d="M144.73 0a77.41 77.41 0 0 1 3.4 13.05 79.85 79.85 0 0 1 .71 14.78q-.39 11.21-6.71 11.21a5.76 5.76 0 0 1-3.36-1 6.32 6.32 0 0 1-2.17-2.63 15.07 15.07 0 0 1-1.08-3.55 23.42 23.42 0 0 1-.33-4.06 96.12 96.12 0 0 1 1-14.68A97.15 97.15 0 0 1 139.3 0h-33.75l1.26 3.86a100 100 0 0 1 2.53 9.77 48.55 48.55 0 0 1 1.28 10.09q0 1.89-.39 6a52.19 52.19 0 0 1-10.1-14.48A36 36 0 0 1 96.4 0H80.12l.55 1.18a34.55 34.55 0 0 1 1.4 3.4c.55 1.49 1.1 3.14 1.67 5a54.75 54.75 0 0 1 1.52 6.35A52.76 52.76 0 0 1 86.1 23a48.79 48.79 0 0 1-.23 7.84c-.31 3-.68 5.61-1.13 7.94s-1 4.76-1.6 7.26c-.26 1.05-.49 2-.68 2.7a90 90 0 0 1-4.88-12.58A87.66 87.66 0 0 1 74 17.55 51.4 51.4 0 0 1 75.35 0H50.28a49.4 49.4 0 0 1 1.44 17.53 88.17 88.17 0 0 1-3.63 18.61 92.67 92.67 0 0 1-4.66 12c-.5-1.4-1-2.93-1.54-4.62a56 56 0 0 1-1.54-6.3 59.5 59.5 0 0 1-.9-7 49 49 0 0 1 .25-7.94c.31-3 .68-5.66 1.14-8s1-4.77 1.59-7.28 1-4.19 1.3-5 .45-1.52.6-2h-18.9l1.25 3.85a100.76 100.76 0 0 1 2.54 9.78 49.14 49.14 0 0 1 1.27 10.09c0 1.25-.12 3.25-.38 6A52.19 52.19 0 0 1 20 15.26 36 36 0 0 1 16.27 0H0l.55 1.19C.93 2 1.4 3.11 2 4.6s1.1 3.14 1.67 5a57.64 57.64 0 0 1 1.52 6.36A52.7 52.7 0 0 1 6 23a47.65 47.65 0 0 1-.23 7.84q-.45 4.44-1.12 7.94T3 46c-.62 2.51-1 4.17-1.3 5s-.45 1.51-.59 2H20l-1-5.2c-.69-3.44-1.44-7.79-2.26-13s-1.32-9.62-1.54-13.16a34.6 34.6 0 0 1 4.89 5.23 48.41 48.41 0 0 1 3.86 5.78 60.6 60.6 0 0 1 2.92 6q1.34 3.18 2.1 5.48c.5 1.53.95 3.08 1.36 4.63s.65 2.57.73 3.07.17.9.22 1.19h29.9a17.43 17.43 0 0 1-2.79-12A8.56 8.56 0 0 1 59.87 37a3.59 3.59 0 0 1 3-1.65A4 4 0 0 1 66 37a6.8 6.8 0 0 1 1.53 4.13 18.89 18.89 0 0 1-3 12h35.64l-1-5.19q-1-5.17-2.26-13t-1.6-13.26a35.09 35.09 0 0 1 4.89 5.23 49.23 49.23 0 0 1 3.86 5.78 60.6 60.6 0 0 1 2.92 6c.89 2.13 1.59 4 2.1 5.49s1 3.07 1.35 4.62.65 2.58.74 3.08.16.9.22 1.19h14.22l-.55-1.15c-.36-.79-.82-1.92-1.36-3.41s-1.09-3.13-1.66-4.94a57 57 0 0 1-1.53-6.31 55.32 55.32 0 0 1-.9-7 47.67 47.67 0 0 1 .24-7.93q.47-4.48 1.14-8c.44-2.34 1-4.77 1.59-7.27.27-1.11.5-2 .71-2.83q.48 1.89 1 4.41a65.93 65.93 0 0 1 1.18 7.08c.11 1.11.17 2.73.17 4.85s0 4.57-.09 7.34-.08 4.67-.08 5.73Q125.49 54 142.15 54a18.18 18.18 0 0 0 6.73-1.15 13.05 13.05 0 0 0 4.72-3 15.07 15.07 0 0 0 3-4.6 23.42 23.42 0 0 0 1.59-5.5 39.49 39.49 0 0 0 .43-6.07c0-1.06 0-3-.08-5.73s-.08-5.21-.08-7.34.06-3.74.16-4.85a66 66 0 0 1 1.25-7.39q.91-4.16 1.37-5.76c.3-1.07.55-1.92.75-2.56h-17.2ZM65.6 29.77a7.58 7.58 0 0 1-5.57 0 5.81 5.81 0 0 1-2.09-1.13l4.88-18.5 4.85 18.5a5.69 5.69 0 0 1-2.07 1.13Z"
          className="fill-[#f6e7e0]"
        />
      </svg>
      {animateLogo && (
        <motion.svg
          viewBox="0 0 31.31 24.53"
          className="absolute bottom-[8%] right-0 block w-[12.23%] origin-left -translate-y-1/2"
          initial={animateLogo ? 'hidden' : 'visible'}
          animate={animateLogo ? controlsTop : false}
          variants={rightItemAnimation}
        >
          <path
            d="M26.35 0c-2.87 0-4.79 2-4.79 5.11a4.61 4.61 0 0 0 4.84 5 8.34 8.34 0 0 0 3.3-.55v-3a4.11 4.11 0 0 1-3.19 1.23 3.1 3.1 0 0 1-3.36-3.09c0-1.49 1.06-2.38 2.8-2.38a4.3 4.3 0 0 1 3.61 1.59V.7a6.78 6.78 0 0 0-3.21-.7ZM9.1 9.86V7.74H4l4.64-5.65V.2h-7v2.14h4.92L2 7.9v2ZM5.79 21.42 2.3 14.87H0v9.65h2.2v-6.44l3.43 6.44h.88l3.55-6.66v6.66h1.66v-9.65H9.27Zm14.59-6.55h-6.79v9.65h6.79V22.4h-5.13v-1.77h4.85v-2h-4.85V17h5.13Zm4.75 4.45-3.37-4.45h1.92l2.47 3.24 2.32-3.24h2.64l-3.59 4.76 3.79 4.9H29.4l-2.93-3.71-2.66 3.71h-2.62l3.94-5.2Zm-13.9-9.46L14.86.21h1.77l3.59 9.65h-1.64l-.82-2.23h-3.47l-.81 2.23Zm6.1-3.41L16 2.91l-1.27 3.54Z"
            className="fill-[#f6e7e0]"
          />
        </motion.svg>
      )}
    </Link>
  );
};

export default Logo;
