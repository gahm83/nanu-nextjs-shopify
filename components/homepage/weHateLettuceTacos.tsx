'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const WeHateLettuceTacos = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.to('.rotate-15', {
      duration: 0.75,
      rotation: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.-rotate-15', {
      duration: 0.9,
      rotation: -15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.blink-1', {
      delay: 1.5,
      scale: 0,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.blink-2', {
      delay: 3,
      scale: 0,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.blink-3', {
      delay: 4.5,
      scale: 0,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });

  return (
    <section>
      <div className="mx-auto w-10/12 py-28 lg:max-w-[1280px]">
        <h2 className="flex flex-col items-center font-portland text-[8vw] uppercase leading-tight text-[#532826] lg:text-[5vw]">
          <div className="relative">
            <span>We hate </span>
            <figure className="absolute left-full top-1/2 z-[1] aspect-square w-[15vw] translate-x-[40%] translate-y-[-50%] md:w-[10vw]">
              <Image
                src="/images/home/benefits/gluten-free.svg"
                fill={true}
                alt="Gluten free!"
                className="rotate-15"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Gluten free!"
                width={20}
                height={20}
                className="blink-1 absolute right-[110%] top-[70%]"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Gluten free!"
                width={20}
                height={20}
                className="blink-2 absolute left-[70%] top-[-20%]"
              />
            </figure>
          </div>
          <div className="relative">
            <span>our tacos on a </span>
            <figure className="absolute right-full top-1/2 z-[1] aspect-square w-[16vw] translate-x-[15%] translate-y-[-40%] lg:w-[11vw]">
              <Image
                src="/images/home/benefits/100-vegan.svg"
                alt="100% Vegan"
                fill={true}
                className="-rotate-15"
              />
              <Image
                src="/images/snowflake-blue.svg"
                alt="Honor your roots"
                width={40}
                height={40}
                className="blink absolute left-0 top-full"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Honor your roots"
                width={20}
                height={20}
                className="blink-2 absolute right-[110%] top-[70%]"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Honor your roots"
                width={20}
                height={20}
                className="blink-3 absolute left-[70%] top-[-20%]"
              />
            </figure>
          </div>
          <div className="relative">
            <span>lettuce wrap, </span>
          </div>
          <div className="relative">
            <span>so we crafted </span>
            <figure className="absolute left-[110%] top-[60%] z-[1] aspect-[1.77/1] w-[21vw] translate-x-[-30%] -rotate-[15deg] lg:top-[60%] lg:w-[14vw] lg:translate-x-[-50%]">
              <Image
                src="/images/home/benefits/women-owned.svg"
                alt="Women Owned"
                fill={true}
                className="rotate-15"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Honor your roots"
                width={20}
                height={20}
                className="blink-2 absolute left-[70%] top-[-40%]"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Honor your roots"
                width={20}
                height={20}
                className="blink-1 absolute left-[80%] top-[130%]"
              />
            </figure>
          </div>
          <div className="relative">
            <span>heritage </span>
          </div>
          <div className="relative">
            <span>friendly foods </span>
          </div>
          <div className="relative">
            <span>to suit every </span>
            <figure className="l-0 absolute z-[1] aspect-[0.77/1] w-[13vw] translate-x-[-120%] translate-y-[-50%] -rotate-[13deg] lg:w-[8vw]">
              <Image
                src="/images/home/benefits/made-with-few-ingredients.svg"
                alt="Made with few ingredients"
                fill={true}
                className="-rotate-15"
              />
              <Image
                src="/images/snowflake-blue.svg"
                alt="Made with few ingredients"
                width={40}
                height={40}
                className="blink-2 absolute -left-5 top-[120%]"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Made with few ingredients"
                width={20}
                height={20}
                className="blink-1 absolute left-0 top-[-20%]"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Made with few ingredients"
                width={20}
                height={20}
                className="blink-3 absolute left-[-40%] top-[80%]"
              />
            </figure>
          </div>
          <div className="relative">
            <span>lifestyle</span>
            <figure className="absolute right-0 z-[1] aspect-square w-[18vw] translate-x-[130%] translate-y-[-50%] -rotate-[14deg] lg:w-[11vw]">
              <Image
                src="/images/home/benefits/honor-your-roots.svg"
                alt="Honor your roots"
                fill={true}
                className="rotate-15"
              />
              <Image
                src="/images/snowflake-blue.svg"
                alt="Honor your roots"
                width={40}
                height={40}
                className="blink-2 absolute left-full top-0"
              />
              <Image
                src="/images/square-sky.svg"
                alt="Honor your roots"
                width={20}
                height={20}
                className="blink-1 absolute left-[20%] top-full"
              />
            </figure>
          </div>
        </h2>
      </div>
    </section>
  );
};

export default WeHateLettuceTacos;
