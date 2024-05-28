'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import FullVegan from '../svg/full-vegan';
import GlutenFree from '../svg/gluten-free';
import HonorYourRoots from '../svg/honor-your-roots';
import MadeWithFewIngredients from '../svg/made-with-few-ingredients';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';
import WomenOwned from '../svg/women-owned';

gsap.registerPlugin(useGSAP);

const WeHateLettuceTacos = () => {
  const container = useRef();

  // const loopSettings = {
  //   repeat: -1,
  //   yoyo: true,
  //   ease: 'sine.inOut'
  // };

  // useGSAP(() => {
  //   gsap.to('.rotate-15', {
  //     duration: 0.75,
  //     rotation: 15,
  //     ...loopSettings
  //   });

  //   gsap.to('.-rotate-15', {
  //     duration: 0.9,
  //     rotation: -15,
  //     ...loopSettings
  //   });

  //   gsap.to('.blink-1', {
  //     delay: 0.25,
  //     scale: 0,
  //     ...loopSettings
  //   });

  //   gsap.to('.blink-2', {
  //     delay: 0.5,
  //     scale: 0,
  //     ...loopSettings
  //   });

  //   gsap.to('.blink-3', {
  //     delay: 0.75,
  //     scale: 0,
  //     ...loopSettings
  //   });

  //   gsap.to('.blink-4', {
  //     delay: 1,
  //     scale: 0,
  //     ...loopSettings
  //   });
  // });

  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-11/12 py-28 lg:max-w-screen-xl">
        <figure className="mx-auto mb-5 w-[12vw]">
          <Image
            src="/images/nanu-logo-top.svg"
            width={200}
            height={230}
            objectFit="cover"
            alt="Nanu Roots"
          />
        </figure>
        <h2 className="relative flex flex-col items-center font-portland text-[8vw] uppercase leading-tight text-[#532826] lg:text-[4.3vw]">
          We hate our tacos on a lettuce wrap, so we crafted heritage friendly foods to suit every
          lifestyle
          <GlutenFree className="absolute left-full top-1/2 z-[1] aspect-square w-[15vw] translate-x-[40%] translate-y-[-50%] md:w-[10vw]">
            <ShapeRomboid className="[&_svg]:animate-blink-1 absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-2 absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-4 absolute left-[120%] top-[65%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </GlutenFree>
          <FullVegan className="absolute right-full top-1/2 z-[1] aspect-square w-[16vw] translate-x-[15%] translate-y-[-40%] lg:w-[11vw]">
            <ShapeSnowflake className="blink-1 absolute left-0 top-full h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-spin [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-3 absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-2 absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </FullVegan>
          <WomenOwned className="absolute left-[100%] top-[60%] z-[1] aspect-[1.77/1] w-[21vw] translate-x-[-30%] -rotate-[15deg] lg:top-[60%] lg:w-[14vw] lg:translate-x-[-50%]">
            <ShapeRomboid className="[&_svg]:animate-blink-2 absolute left-[70%] top-[-40%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-1 absolute left-[80%] top-[130%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </WomenOwned>
          <MadeWithFewIngredients className="absolute left-0 z-[1] aspect-[0.77/1] w-[13vw] translate-x-[-120%] translate-y-[-50%] -rotate-[13deg] lg:w-[8vw]">
            <ShapeSnowflake className="blink-3 absolute -left-5 top-[120%] h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-spin [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-2 absolute left-0 top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="[&_svg]:animate-blink-1 absolute left-[-40%] top-[80%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </MadeWithFewIngredients>
          <HonorYourRoots className="absolute right-0 z-[1] w-[18vw] translate-x-[130%] translate-y-[-50%] -rotate-[14deg] lg:w-[11vw]">
            <ShapeSnowflake className="blink-2 [&_svg] :fill-[#8DC8E8] absolute left-full top-0 h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-spin" />
            <ShapeRomboid className="[&_svg]:animate-blink-1 absolute left-[20%] top-full h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:fill-[#8DC8E8]" />
          </HonorYourRoots>
        </h2>
        <div className="mt-24 flex items-center justify-center">
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
