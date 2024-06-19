'use client';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';
import ButtonFindInStore from '../svg/button-find-in-store';
import ButtonShopNow from '../svg/button-shop-now';
import HappierGutLife from '../svg/happier-gut-life';
import HeroDesktop from '../svg/hero-desktop';
import HeroMobile from '../svg/hero-mobile';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';
import TasteOfHome from '../svg/taste-of-home';
import UnmatchedCompanion from '../svg/unmatched-companion';

const cardItems = [
  {
    icon: <TasteOfHome />,
    title: 'A taste of home',
    description:
      'We are your companion in every bite, providing heartfelt warmth no matter where you are.'
  },
  {
    icon: <UnmatchedCompanion />,
    title: 'An unmatched companion',
    description:
      'For breakfast toast? Yup. For nachos? Yas! In tacos? Of course. Do your own thing!'
  },
  {
    icon: <HappierGutLife />,
    title: 'Happier gut, happier life',
    description: 'Gluten-free, low carb, made with natural ingredients and lots of love!'
  }
];

const Hero = () => {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="hero-banner before:bg-hero relative before:absolute before:inset-x-0 before:top-0 before:block before:h-[1000px] before:w-full before:bg-sze-sm before:bg-pos-sm before:content-[''] lg:before:bg-sze-lg lg:before:bg-pos-lg">
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
      <div className="relative mx-auto flex w-11/12 max-w-screen-xl flex-col rounded-lg bg-[#532826] px-6 py-24 before:absolute before:left-6 before:right-6 before:top-10 before:block before:h-[6px] before:bg-border-sky before:bg-[auto_6px] before:bg-repeat-space before:content-[''] after:absolute after:bottom-10 after:left-6 after:right-6 after:block after:h-[5px] after:bg-border-sky after:bg-[auto_5px] after:bg-repeat-space after:content-[''] lg:px-24">
        <div className="grid gap-16 lg:grid-cols-3">
          {cardItems &&
            cardItems.map((item, index) => (
              <div key={index}>
                {item.icon}
                <div className="mt-4 space-y-4 px-6 text-center">
                  <h2 className="mx-auto text-center font-portland text-2xl uppercase leading-none">
                    {item.title}
                  </h2>
                  <p className="leading-tight">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
