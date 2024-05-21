'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const FreeShippingBanner = () => {
  // useGSAP(() => {
  //   const freeShippingTL = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.free-shipping-banner',
  //       start: 0,
  //       end: 90,
  //       scrub: true,
  //       markers: true,
  //       toggleClass: 'enable',
  //       // toggleClass: { targets: ".navbar", className: "sticky" },
  //       // onEnterBack: () => {
  //       //   freeShippingTL
  //       //     .to('.free-shipping-banner', { height: 60 })
  //       // },
  //       onLeave: () => {
  //         freeShippingTL.to('.free-shipping-banner', { height: 0 });

  //       }
  //     }
  //   });
  // });

  return (
    <div className="free-shipping-banner flex h-[60px] w-full items-center justify-center space-x-4 overflow-hidden bg-[#8DC8E8]">
      <div className="relative block h-3 w-3">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
      <span className="block text-xl font-bold text-[#532826]">
        FREE SHIPPING ON ORDERS OVER $50
      </span>
      <div className="relative block h-3 w-3">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
    </div>
  );
};

export default FreeShippingBanner;
