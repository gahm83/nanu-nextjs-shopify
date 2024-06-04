'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import ShapeRomboid from './svg/shape-romboid';

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
      <ShapeRomboid className="relative block h-3 w-3 lg:h-4 lg:w-4 [&_svg]:fill-[#532826]" />
      <span className="block font-bold text-[#532826] md:text-lg lg:text-xl">
        FREE SHIPPING ON ORDERS OVER $50
      </span>
      <ShapeRomboid className="relative block h-3 w-3 lg:h-4 lg:w-4 [&_svg]:fill-[#532826]" />
    </div>
  );
};

export default FreeShippingBanner;
