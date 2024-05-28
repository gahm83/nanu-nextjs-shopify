'use client';
import Image from 'next/image';
import FullVegan from '../svg/full-vegan';
import GlutenFree from '../svg/gluten-free';
import HonorYourRoots from '../svg/honor-your-roots';
import MadeWithFewIngredients from '../svg/made-with-few-ingredients';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';
import WomenOwned from '../svg/women-owned';

const WeHateLettuceTacos = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto w-11/12 py-12 lg:max-w-screen-xl lg:py-20">
        <figure className="mx-auto mb-5 w-[12vw] lg:w-[9vw]">
          <Image
            src="/images/nanu-logo-top.svg"
            width={200}
            height={230}
            objectFit="cover"
            alt="Nanu Roots"
          />
        </figure>
        <h2 className="relative mx-auto w-8/12 text-center font-portland text-[8vw] uppercase leading-tight text-[#532826] lg:w-7/12 lg:text-[4.3vw]">
          We hate <br />
          our tacos on a <br className="hidden lg:block" />
          lettuce wrap, <br className="hidden lg:block" />
          so we crafted <br className="hidden lg:block" />
          heritage <br className="hidden lg:block" />
          friendly foods <br className="hidden lg:block" />
          to suit every <br className="hidden lg:block" />
          lifestyle <br className="hidden lg:block" />
          <GlutenFree className="absolute right-[8%] top-0 z-[1] aspect-square w-[15vw] translate-x-[40%] translate-y-[-50%] md:w-[10vw] lg:top-[6%] [&>_svg]:animate-wave-1">
            <ShapeRomboid className="absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-1 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-2 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[120%] top-[65%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-4 [&_svg]:fill-[#8DC8E8]" />
          </GlutenFree>
          <FullVegan className="absolute left-0 top-[23%] z-[1] aspect-square w-[16vw] -translate-x-1/2 translate-y-[-40%] lg:w-[10vw] [&>_svg]:animate-wave-2">
            <ShapeSnowflake className="blink-1 absolute left-0 top-full h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-spin [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute right-[110%] top-[70%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-3 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[70%] top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-2 [&_svg]:fill-[#8DC8E8]" />
          </FullVegan>
          <WomenOwned className="absolute left-[100%] top-[48%] z-[1] aspect-[1.77/1] w-[21vw] translate-x-[-30%] -rotate-[15deg] lg:top-[60%] lg:w-[12vw] lg:translate-x-[-50%] [&>_svg]:animate-wave-1">
            <ShapeRomboid className="absolute left-[70%] top-[-40%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-2 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[80%] top-[130%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-1 [&_svg]:fill-[#8DC8E8]" />
          </WomenOwned>
          <MadeWithFewIngredients className="absolute left-[20%] top-[70%] z-[1] aspect-[0.77/1] w-[13vw] translate-x-[-120%] translate-y-[-50%] -rotate-[13deg] lg:left-[15%] lg:top-[83%] lg:w-[7.7vw] [&>_svg]:animate-wave-2">
            <ShapeSnowflake className="blink-3 absolute -left-5 top-[120%] h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-spin [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-0 top-[-20%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-2 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[-40%] top-[80%] h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-1 [&_svg]:fill-[#8DC8E8]" />
          </MadeWithFewIngredients>
          <HonorYourRoots className="absolute right-0 top-[95%] z-[1] w-[18vw] -translate-y-1/2 translate-x-1/2 -rotate-[14deg] lg:w-[11vw] [&>_svg]:animate-wave-1">
            <ShapeSnowflake className="absolute left-full top-0 h-[20px] w-[20px] lg:h-[40px] lg:w-[40px] [&_svg]:animate-blink-2 [&_svg]:fill-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-[20%] top-full h-[10px] w-[10px] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-1 [&_svg]:fill-[#8DC8E8]" />
          </HonorYourRoots>
        </h2>
        <div className="mt-12 flex items-center justify-center lg:mt-24">
          <a
            href="#"
            className="w-48 border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:py-2"
          >
            Show more
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeHateLettuceTacos;
