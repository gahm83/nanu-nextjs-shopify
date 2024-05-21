'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const FreeShippingBanner = () => {
  const pathname = usePathname();

  useGSAP(() => {
    if (pathname !== '/') {
      ScrollTrigger.create({
        trigger: '.navbar',
        start: 'top',
        end: 'bottom',
        scrub: true,
        toggleClass: { targets: '.free-shipping-banner', className: '!h-0' }
      });
    }
  });

  return (
    <div className="free-shipping-banner flex h-[48px] w-full items-center justify-center space-x-4 overflow-hidden bg-[#8DC8E8] transition-all duration-300 lg:h-[60px]">
      <div className="relative block h-3 w-3 lg:h-4 lg:w-4">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
      <span className="block font-bold text-[#532826] md:text-lg lg:text-xl">
        FREE SHIPPING ON ORDERS OVER $50
      </span>
      <div className="relative block h-3 w-3 lg:h-4 lg:w-4">
        <Image src="/images/square-wood.svg" fill={true} alt="Free Shipping Banner Dot" />
      </div>
    </div>
  );
};

export default FreeShippingBanner;
