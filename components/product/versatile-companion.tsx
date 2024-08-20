'use client';
import Image from 'next/image';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';
import IconDipped from '../svg/icon-dipped';
import IconFried from '../svg/icon-fried';
import IconGrilled from '../svg/icon-grilled';
import IconToasted from '../svg/icon-toasted';
import IconWrapped from '../svg/icon-wrapped';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';

const versatileCompanionItems = [
  {
    icon: <IconWrapped />,
    title: 'Wrapped'
  },
  {
    icon: <IconToasted />,
    title: 'Toasted'
  },
  {
    icon: <IconFried />,
    title: 'Fried'
  },
  {
    icon: <IconGrilled />,
    title: 'Grilled'
  },
  {
    icon: <IconDipped />,
    title: 'Dipped'
  }
];

export function VersatileCompanion() {
  const isMobile = useMediaQuery('(max-width:1024px)');

  return (
    <section>
      <div className="overflow-hidden bg-[#532826] px-8 py-10">
        <div className="border-top-sky border-bottom-sky relative mx-auto flex w-full flex-col bg-[#532826] py-20">
          <div className="relative mx-auto w-11/12 lg:max-w-screen-xl">
            <ShapeSnowflake className="blink-1 absolute bottom-full right-full h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform text-[#8DC8E8] lg:h-10 lg:w-10" />
            <ShapeRomboid className="blink-3 absolute bottom-full right-full h-[10px] w-[10px] -translate-x-12 translate-y-12 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <ShapeRomboid className="absolute bottom-full right-full h-[10px] w-[10px] -translate-y-9 translate-x-12 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <ShapeSnowflake className="absolute bottom-full left-full h-5 w-5 text-[#8DC8E8]" />
            <ShapeRomboid className="absolute bottom-full left-full h-[10px] w-[10px] translate-x-12 translate-y-12 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <ShapeRomboid className="absolute bottom-full left-full h-[10px] w-[10px] -translate-x-12 -translate-y-9 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <ShapeSnowflake className="absolute bottom-0 left-full h-5 w-5 translate-x-full transform text-[#8DC8E8]" />
            <ShapeRomboid className="absolute left-full top-full h-[10px] w-[10px] translate-y-8 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <ShapeSnowflake className="absolute right-full top-full h-5 w-5 text-[#8DC8E8]" />
            <ShapeRomboid className="absolute right-full top-full h-[10px] w-[10px] -translate-x-4 -translate-y-8 transform text-[#8DC8E8] lg:h-5 lg:w-5" />
            <h1 className="text-center font-portland text-4xl font-black uppercase">
              Your versatile companion
            </h1>
            <div className="mt-12 flex items-center justify-between">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 5
                  }
                }}
                className="w-full"
              >
                {versatileCompanionItems &&
                  versatileCompanionItems.map((item, index) => (
                    <SwiperSlide key={index} className="lg:w-1/5">
                      <figure className="flex items-center justify-center [&_svg]:w-32">
                        {item.icon}
                      </figure>
                      <div className="mt-4 space-y-4 px-6 text-center">
                        <h2 className="mx-auto text-center font-portland text-2xl font-black uppercase leading-none">
                          {item.title}
                        </h2>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="mx-auto mt-5 w-11/12 space-y-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image
              src="/images/nanu-01.jpg"
              fill
              alt="Nanu Heritage Foods"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image
              src="/images/nanu-02.jpg"
              fill
              alt="Nanu Heritage Foods"
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image
              src="/images/nanu-03.jpg"
              fill
              alt="Nanu Heritage Foods"
              className="object-cover object-center"
            />
          </div>
        </div>
      )}
    </section>
  );
}
