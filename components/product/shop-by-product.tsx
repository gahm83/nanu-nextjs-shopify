'use client';

import Image from 'next/image';
import Link from 'next/link';
import ShapeFlower from '../svg/shape-puff';

const shopByItems = [
  {
    image: '/images/shop-by-tortillas.png',
    name: 'Tortillas',
    url: '/shop/tortillas'
  },
  {
    image: '/images/shop-by-sauces.png',
    name: 'Salsas',
    url: '/shop/salsas'
  },
  {
    image: '/images/shop-by-bundles.png',
    name: 'Bundles',
    url: '/shop/bundles'
  }
];

export function ShopByProduct() {
  return (
    <section className="relative before:absolute before:left-5 before:right-5 before:top-0 before:block before:h-[5px] before:bg-border-wood before:bg-repeat-space before:content-['']">
      <div className="py-16">
        <div className="max-w-full-lg mx-auto w-11/12">
          <div className="flex flex-col items-center lg:flex-row">
            <h2 className="px-[16%] text-center font-portland text-3xl font-black uppercase text-[#532826] lg:px-0 lg:text-4xl">
              Shop by Product
            </h2>
            <div className="mt-10 flex w-full items-center justify-around lg:ml-24 lg:mt-0 lg:w-auto lg:justify-center lg:space-x-32">
              {shopByItems.map((button, index) => (
                <Link href={button.url} key={index} className="group flex flex-col justify-center">
                  <figure className="relative flex aspect-square w-24 items-center justify-center lg:w-36 [&_svg]:text-[#EDD3C5] [&_svg]:transition [&_svg]:duration-300 group-hover:[&_svg]:rotate-90">
                    <ShapeFlower />
                    <Image
                      src={button.image}
                      width={256}
                      height={256}
                      alt={`Shop by ${button.name} Picture`}
                      className="absolute h-[77%] w-[77%]"
                    />
                  </figure>
                  <span className="mx-auto mt-4 text-center font-portland text-lg font-black uppercase leading-none text-[#532826] lg:text-2xl">
                    {button.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
