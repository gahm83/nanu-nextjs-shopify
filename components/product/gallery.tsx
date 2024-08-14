'use client';

import { createUrl } from 'lib/utils';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  const previousUrl = createUrl(pathname, previousSearchParams);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  // const buttonClassName = 'h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center';

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={pagination}
        slidesPerView={1}
        className="pagination-dots dark-foreground w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="aspect-[1.2/1] w-full">
            <Image
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={image.altText as string}
              src={image.src as string}
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
