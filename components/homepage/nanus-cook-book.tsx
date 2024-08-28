'use client';
import { Recipe } from '@/lib/shopify/types';
import Image from 'next/image';
import { useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShapeRomboid from '../svg/shape-romboid';

function NanusCookBook({ recipes }: { recipes: Recipe[] }) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const [slide, setSlide] = useState('recipe-top');
  const recipePosition = ['recipe-top', 'recipe-right', 'recipe-bottom', 'recipe-left'];

  const slideTo = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span key="${index}" class="${className}"></span>`;
    }
  };

  return (
    <section>
      <div className="relative py-16">
        <div className="mx-auto w-11/12 max-w-screen-lg">
          <h2 className="text-center font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Nanu's Cook Book
          </h2>
          <p className="text-center font-portland text-lg font-medium uppercase text-[#532826] lg:text-2xl">
            A few recipes from home to get you inspired
          </p>
          <div className="mt-12 overflow-hidden rounded-lg lg:grid lg:grid-cols-12">
            <div className="col-span-4 flex bg-[#532826] p-8">
              <div className="relative py-5">
                <div className="border-top-sky border-bottom-sky">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    pagination={pagination}
                    slidesPerView={1}
                    spaceBetween={10}
                    className="pagination-dots mobile-only w-full"
                    onSwiper={setSwiperInstance}
                  >
                    {recipes &&
                      recipes.map((recipe, idx) => (
                        <SwiperSlide
                          key={recipe.title}
                          className={`space-y-5 ${slide === recipePosition[idx] ? 'block' : 'hidden'}`}
                        >
                          <h2 className="font-portland text-3xl font-black uppercase leading-none tracking-tighter text-[#F6E7E0]">
                            {recipe.title}
                          </h2>
                          <figure className="aspect-[2.5/3]">
                            <a href={recipe.url} target="_blank">
                              <Image
                                src={recipe.image.url}
                                alt={recipe.title}
                                width={recipe.image.width}
                                height={recipe.image.height}
                                className="h-full w-full object-cover object-center"
                              />
                            </a>
                          </figure>
                          <p className="text-xl font-medium leading-none text-[#F6E7E0]">
                            {recipe.description}
                          </p>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-span-8 hidden lg:flex">
              <figure className="relative aspect-square flex-grow">
                <Image
                  src="/images/nanu-shrimp-tacos.jpg"
                  fill
                  alt="Nanu's Shrimp Tacos"
                  className="object-cover"
                />
                <button
                  onClick={() => slideTo(0)}
                  className="group absolute left-[36%] top-[22%] h-[80px] w-[80px] text-[#8DC8E8]"
                >
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button
                  onClick={() => slideTo(1)}
                  className="group absolute left-[63%] top-[23%] h-[80px] w-[80px] text-[#8DC8E8]"
                >
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button
                  onClick={() => slideTo(2)}
                  className="group absolute left-[52%] top-[50%] h-[80px] w-[80px] text-[#8DC8E8]"
                >
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button
                  onClick={() => slideTo(3)}
                  className="group absolute left-[27%] top-[40%] h-[80px] w-[80px] text-[#8DC8E8]"
                >
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NanusCookBook;
