'use client';
import { HeroBanner, HeroColumn } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import ButtonFindInStore from '../svg/button-find-in-store';
import ButtonShopNow from '../svg/button-shop-now';
import HeroDesktop from '../svg/hero-desktop';
import HeroMobile from '../svg/hero-mobile';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';

const Hero = ({ data, columns }: { data: HeroBanner; columns: HeroColumn[] }) => {
  return (
    <div className="hero-banner relative">
      <figure
        className="border-pyramid-bottom
    absolute inset-x-0 top-0 block h-[1000px] w-full"
      >
        <Image
          src={data.image.src}
          alt=""
          width={data.image.width}
          height={data.image.height}
          className="h-full w-full object-cover object-center"
        />
      </figure>
      <div className="flex w-full flex-col justify-center">
        <div className="relative flex flex-grow flex-col items-center pb-24 pt-56 lg:pt-80 ">
          <HeroMobile className="aspect-[1.31/1] w-[80vw] max-w-[420px] md:hidden" />
          <HeroDesktop className="hidden aspect-[3.1/1] w-[80vw] max-w-[800px] md:block" />
          <div className="mt-12 flex w-full items-center justify-center space-x-6 lg:space-x-[60px]">
            <Link href="/shop" className="aspect-[1.09/1] w-[120px] lg:w-[90px]">
              <ButtonShopNow className="h-full w-full" />
            </Link>
            <div className="relative mx-auto flex w-[80px] items-center justify-center lg:w-[120px]">
              <ShapeRomboid className="absolute left-0 h-3 w-3 drop-shadow-md lg:h-5 lg:w-5 [&_svg]:fill-[#8DC8E8]" />
              <ShapeSnowflake className="h-6 w-6 drop-shadow-md lg:h-10 lg:w-10 [&_svg]:fill-[#8DC8E8]" />
              <ShapeRomboid className="absolute right-0 h-3 w-3 drop-shadow-md lg:h-5 lg:w-5 [&_svg]:fill-[#8DC8E8]" />
            </div>
            <Link href="/shop" className="aspect-[1.09/1] w-[120px] lg:w-[90px]">
              <ButtonFindInStore className="h-full w-full" />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex w-11/12 max-w-screen-xl flex-col rounded-lg bg-[#532826] px-6 py-24 before:absolute before:left-6 before:right-6 before:top-10 before:block before:h-[6px] before:bg-border-sky before:bg-[auto_6px] before:bg-repeat-space before:content-[''] after:absolute after:bottom-10 after:left-6 after:right-6 after:block after:h-[5px] after:bg-border-sky after:bg-[auto_5px] after:bg-repeat-space after:content-[''] xl:px-24">
        <div className="grid gap-4 md:grid-cols-3">
          {columns &&
            columns.map((item, index) => (
              <div key={index} className="max-w-80">
                <div className="flex justify-center">
                  <Image
                    src={item.image.url}
                    width={item.image.width}
                    height={item.image.width}
                    alt={item.title}
                  />
                </div>
                <div className="mt-4 space-y-4 text-center lg:px-6">
                  <h2 className="mx-auto text-center font-portland text-2xl uppercase leading-none">
                    {item.title}
                  </h2>
                  <p className="leading-tight">{item.content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
