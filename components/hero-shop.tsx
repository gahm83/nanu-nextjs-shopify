// 'use client';
import { HeroBanner } from '@/lib/shopify/types';
import Image from 'next/image';

function HeroShop({ data }: { data: HeroBanner }) {
  return (
    <section>
      <div className="hero-shop border-pyramid-bottom relative flex w-full items-center justify-center">
        <figure className="absolute inset-0 h-full w-full">
          <Image
            src={data.image.src}
            width={data.image.width}
            height={data.image.height}
            alt="Home is closer than you think"
            className="h-full w-full object-cover object-center"
          />
        </figure>
        <div className="max-w-full-lg relative mx-auto w-9/12 pb-24 pt-48">
          <h2 className="font-portland text-5xl uppercase leading-none text-white lg:max-w-[50%] lg:text-7xl">
            {data.title}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
