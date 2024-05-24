'use client';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

const versatileCompanionItems = [
  {
    icon: '/images/icon-wrapped.svg',
    title: 'Wrapped'
  },
  {
    icon: '/images/icon-toasted.svg',
    title: 'Toasted'
  },
  {
    icon: '/images/icon-fried.svg',
    title: 'Fried'
  },
  {
    icon: '/images/icon-grilled.svg',
    title: 'Grilled'
  },
  {
    icon: '/images/icon-dipped.svg',
    title: 'Dipped'
  }
];

export function VersatileCompanion() {
  const loopSettings = {
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  };

  useGSAP(() => {
    gsap.to('.blink-1', {
      delay: 0.25,
      scale: 0,
      ...loopSettings
    });

    gsap.to('.blink-2', {
      delay: 0.5,
      scale: 0,
      ...loopSettings
    });

    gsap.to('.blink-3', {
      delay: 0.75,
      scale: 0,
      ...loopSettings
    });

    gsap.to('.blink-4', {
      delay: 1,
      scale: 0,
      ...loopSettings
    });
  });

  return (
    <section className="overflow-hidden">
      <div className="border-top-sky border-bottom-sky relative mx-auto flex w-full flex-col bg-[#532826] py-32">
        <div className="relative mx-auto w-11/12 lg:max-w-screen-xl">
          <Image
            src="/images/snowflake-blue.svg"
            alt="Honor your roots"
            width={40}
            height={40}
            className="blink-1 absolute bottom-full right-full h-[1.96vw] w-[1.96vw] -translate-x-1/2 -translate-y-1/2 transform"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-3 absolute bottom-full right-full h-[.98vw] w-[.98vw] -translate-x-12 translate-y-12 transform"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-2 absolute bottom-full right-full h-[.98vw] w-[.98vw] -translate-y-9 translate-x-12 transform"
          />
          <Image
            src="/images/snowflake-blue.svg"
            alt="Honor your roots"
            width={40}
            height={40}
            className="blink-4 absolute bottom-full left-full h-[1.96vw] w-[1.96vw]"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-1 absolute bottom-full left-full h-[.98vw] w-[.98vw] translate-x-12 translate-y-12 transform"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-3 absolute bottom-full left-full h-[.98vw] w-[.98vw] -translate-x-12 -translate-y-9 transform"
          />
          <Image
            src="/images/snowflake-blue.svg"
            alt="Honor your roots"
            width={40}
            height={40}
            className="blink-2 absolute bottom-0 left-full h-[1.96vw] w-[1.96vw] translate-x-full transform"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-4 absolute left-full top-full h-[.98vw] w-[.98vw] translate-y-8 transform"
          />
          <Image
            src="/images/snowflake-blue.svg"
            alt="Honor your roots"
            width={40}
            height={40}
            className="blink-1 absolute right-full top-full h-[1.96vw] w-[1.96vw]"
          />
          <Image
            src="/images/square-sky.svg"
            alt="Honor your roots"
            width={20}
            height={20}
            className="blink-2 absolute right-full top-full h-[.98vw] w-[.98vw] -translate-x-4 -translate-y-8 transform"
          />
          <h1 className="text-center font-portland text-4xl font-black uppercase">
            Your versatile companion
          </h1>
          <div className="mt-12 flex items-center justify-between">
            {versatileCompanionItems &&
              versatileCompanionItems.map((item, index) => (
                <div key={index} className={clsx({ 'hidden lg:block': index >= 2 })}>
                  <figure className="flex items-center justify-center">
                    <Image src={item.icon} alt={item.title} height={78} width={141} />
                  </figure>
                  <div className="mt-4 space-y-4 px-6 text-center">
                    <h2 className="mx-auto text-center font-portland text-2xl font-black uppercase leading-none">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
