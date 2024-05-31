import { Product } from '@/lib/shopify/types';
import { useRef } from 'react';
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../grid/product-card';

function ProductCarousel({ products }: { products: Product[] }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!
        }}
        spaceBetween={20}
        slidesPerView={1.4}
        loop={true}
        breakpoints={{
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 32
          }
        }}
        className="w-full"
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} hideDescription={true} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute bottom-0 right-full flex -translate-x-8 -translate-y-1/2 transform items-center space-x-5">
        <button
          ref={prevRef}
          className="group relative flex h-16 w-16 items-center justify-center before:absolute before:block before:h-12 before:w-12 before:rotate-45 before:transform before:border-2 before:border-[#532826] before:transition before:duration-300 before:content-[''] hover:before:bg-[#532826]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative [&_path]:fill-[#532826] group-hover:[&_path]:fill-[#F6E7E0]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2675 1.30086L10.9746 0.59375L12.3888 2.00796L11.6817 2.71507L4.32168 10.0751H20.043H21.043V12.0751H20.043H4.32154L11.6817 19.4353L12.3888 20.1424L10.9746 21.5566L10.2675 20.8495L1.20029 11.7823L0.493183 11.0752L1.20029 10.3681L10.2675 1.30086Z"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="group relative flex h-16 w-16 items-center justify-center before:absolute before:block before:h-12 before:w-12 before:rotate-45 before:transform before:border-2 before:border-[#532826] before:transition before:duration-300 before:content-[''] hover:before:bg-[#532826]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative [&_path]:fill-[#532826] group-hover:[&_path]:fill-[#F6E7E0]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2686 20.8495L10.5615 21.5566L9.14731 20.1424L9.85442 19.4353L17.2145 12.0753L1.49317 12.0753L0.493166 12.0753L0.493166 10.0753L1.49317 10.0753L17.2146 10.0753L9.85442 2.71508L9.14731 2.00797L10.5615 0.593761L11.2686 1.30087L20.3358 10.3681L21.043 11.0752L20.3358 11.7823L11.2686 20.8495Z"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ProductCarousel;
