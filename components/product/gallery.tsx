'use client';

import { Image as TImage } from 'lib/shopify/types';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Gallery({ images }: { images: TImage[] }) {
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const imageSearchParam = searchParams.get('image');
  const imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0;

  const nextSearchParams = new URLSearchParams(searchParams.toString());
  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  nextSearchParams.set('image', nextImageIndex.toString());
  // const nextUrl = createUrl(pathname, nextSearchParams);

  const previousSearchParams = new URLSearchParams(searchParams.toString());
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  previousSearchParams.set('image', previousImageIndex.toString());
  // const previousUrl = createUrl(pathname, previousSearchParams);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span key="${index}" class="${className}"></span>`;
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
          <SwiperSlide key={index} className="aspect-square w-full overflow-hidden rounded-xl">
            <Image
              src={image.url as string}
              className="h-full w-full object-cover object-center"
              width={1024}
              height={1024}
              alt={image.altText as string}
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
