'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import FullVegan from '../svg/full-vegan';
import GlutenFree from '../svg/gluten-free';
import HonorYourRoots from '../svg/honor-your-roots';
import MadeWithFewIngredients from '../svg/made-with-few-ingredients';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';
import WomenOwned from '../svg/women-owned';

const WeHateLettuceTacos = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', '2 1']
  });

  const useParallax = (value: MotionValue<number>, distance: number) =>
    useTransform(value, [0, 1], [distance, -distance]);

  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   console.log('Page scroll: ', latest);
  // });

  const y1 = useParallax(scrollYProgress, 100);
  const y2 = useParallax(scrollYProgress, 250);
  const y3 = useParallax(scrollYProgress, 200);
  const y4 = useParallax(scrollYProgress, 150);
  const y5 = useParallax(scrollYProgress, 300);

  return (
    <section ref={container}>
      <div className="lg:max-w-full-xl mx-auto w-11/12 py-12 lg:py-20">
        <figure className="mx-auto mb-5 w-[16.666667vw] lg:w-[9vw]">
          <Image
            src="/images/nanu-logo-top.svg"
            width={200}
            height={230}
            objectFit="cover"
            alt="Nanu Roots"
          />
        </figure>
        <h2 className="relative mx-auto w-8/12 text-center font-portland text-[8vw] uppercase leading-tight text-[#532826] lg:w-7/12 lg:text-[4.3vw]">
          <motion.div
            className="absolute left-[90%] top-0 -z-0 h-[16vw] w-[16vw] md:-top-9 md:h-[10vw] md:w-[10vw]"
            style={{ y: y1 }}
          >
            <GlutenFree className="aspect-square h-full w-full" />
            <ShapeRomboid className="absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[120%] top-[65%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </motion.div>
          <motion.div
            className="absolute left-[-20%] top-[16%] -z-0 h-[18vw] w-[18vw] md:h-[10vw] md:w-[10vw]"
            style={{ y: y2 }}
          >
            <FullVegan className="aspect-square h-full w-full" />
            <ShapeSnowflake className="blink-1 absolute left-0 top-full h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </motion.div>
          <motion.div
            className="absolute left-[100%] top-[48%] -z-0 w-[21vw] lg:top-[60%] lg:w-[12vw]"
            style={{ y: y3 }}
          >
            <WomenOwned className="translate-x-[-30%] -rotate-[15deg] lg:translate-x-[-50%]" />
            <ShapeRomboid className="absolute left-[70%] top-[-40%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[80%] top-[130%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </motion.div>
          <motion.div
            className="made-with-few-ingredients absolute left-0 top-[70%] -z-0 w-[13vw] lg:left-[15%] lg:top-[83%] lg:w-[7.7vw]"
            style={{ y: y4 }}
          >
            <MadeWithFewIngredients className="translate-x-[-120%] translate-y-[-50%] -rotate-[13deg]" />
            <ShapeSnowflake className="absolute -left-5 top-[120%] h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-0 top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[-40%] top-[80%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </motion.div>
          <motion.div
            className="absolute left-[90%] top-[95%] -z-0 w-[18vw] lg:w-[11vw]"
            style={{ y: y5 }}
          >
            <HonorYourRoots className="-rotate-[13deg]" />
            <ShapeSnowflake className="absolute left-full top-0 h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[20%] top-full h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </motion.div>
          <span className="relative">
            We hate <br />
            our tacos on a <br className="hidden lg:block" />
            lettuce wrap, <br className="hidden lg:block" />
            so we crafted <br className="hidden lg:block" />
            heritage <br className="hidden lg:block" />
            friendly foods <br className="hidden lg:block" />
            to suit every <br className="hidden lg:block" />
            lifestyle <br className="hidden lg:block" />
          </span>
        </h2>
        <div className="mt-12 flex items-center justify-center lg:mt-24">
          <a
            href="#"
            className="w-48 border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:py-2"
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeHateLettuceTacos;
