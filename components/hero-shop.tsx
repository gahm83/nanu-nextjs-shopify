'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Picture } from '@/lib/shopify/types';
import Image from 'next/image';

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

function HeroShop({ image }: { image: Picture }) {
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
            src={image.url}
            width={image.width}
            height={image.height}
            alt="Home is closer than you think"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="max-w-full-lg relative mx-auto w-9/12 pb-24 pt-48">
          <h2 className="font-portland text-5xl uppercase leading-none text-white lg:max-w-[50%] lg:text-7xl">
            Home is one bite away
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
