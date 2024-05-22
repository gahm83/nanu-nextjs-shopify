// Import Swiper React components
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function ProductCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={32}
      slidesPerView={2.4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="w-full"
    >
      <SwiperSlide>
        <div className="text-black">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-black">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-black">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text-black">Slide 4</div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default ProductCarousel;
