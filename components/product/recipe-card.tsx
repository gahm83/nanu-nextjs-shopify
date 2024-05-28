'use client';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

type RecipeItem = {
  steps: {
    text: string;
    image: string;
  }[];
};

export function RecipeCardSlideshow({ recipe }: { recipe: RecipeItem }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    }
  };

  return (
    <Swiper
      modules={[Pagination]}
      pagination={pagination}
      slidesPerView={1}
      className="pagination-lines w-full"
    >
      {recipe.steps.map((step, index) => (
        <SwiperSlide key={index} className="relative aspect-[0.56/1] overflow-hidden rounded-xl">
          <Image src={step.image} layout="fill" objectFit="cover" alt="Receta" />
          <div className="after:to-12% absolute inset-0 before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-gradient-to-b before:from-black/60 before:to-transparent before:to-45% before:content-[''] after:absolute after:inset-0 after:block after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-45% after:to-black/80 after:content-['']">
            <div className="border-bottom-sky absolute inset-8 z-10 flex flex-col justify-end pb-5">
              {index === 0 ? (
                <h2 className="font-portland text-3xl font-black uppercase leading-none tracking-tighter text-[#F6E7E0]">
                  {step.text}
                </h2>
              ) : (
                <p className="text-xl font-medium leading-none text-[#F6E7E0]">{step.text}</p>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
