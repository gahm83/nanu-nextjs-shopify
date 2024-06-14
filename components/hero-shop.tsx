'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

function HeroShop() {
  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     trigger: 'body',
  //     start: 60,
  //     end: 'bottom',
  //     scrub: true,
  //     toggleClass: { targets: '.navbar-wrapper', className: '!bg-[#532826]' }
  //   });
  // });

  return (
    <section>
      <div className="hero-shop border-pyramid-bottom relative flex w-full items-center justify-center">
        <figure className="absolute inset-0 h-full w-full">
          <Image
            src="/images/home/bg-banner.jpg"
            alt="Home is closer than you think"
            className="object-cover object-center"
            fill
          />
        </figure>
        <div className="relative mx-auto w-9/12 max-w-screen-xl pb-24 pt-48">
          <h2 className="font-portland text-5xl uppercase leading-none text-white lg:max-w-[50%] lg:text-7xl">
            Home is one bite away
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
