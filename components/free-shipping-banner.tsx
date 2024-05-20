'use client';
// import clsx from 'clsx';
// import Price from './price';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const FreeShippingBanner = () => {
  useGSAP(() => {
    gsap.to('.hay-nanita', {
      scrollTrigger: '.hero-banner', // start the animation when ".box" enters the viewport (once)
      y: 400
    });
  });

  return (
    <div className="hay-nanita flex h-[60px] w-full items-center justify-center bg-[#8DC8E8]">
      <div className="relative block h-2 w-2">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
      <span className="block text-lg font-bold text-[#532826]">
        FREE SHIPPING ON ORDERS OVER $50
      </span>
      <div className="relative block h-3 w-3">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
    </div>
  );
};

export default FreeShippingBanner;
