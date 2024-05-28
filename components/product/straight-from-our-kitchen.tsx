'use client';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShapeRomboid from '../svg/shape-romboid';
import { default as ShapeFlower, default as ShapeSnowflake } from '../svg/shape-snowflake';
import { RecipeCardSlideshow } from './recipe-card';

const recipeItems = [
  {
    steps: [
      {
        text: 'Vegetarian Quesadillas',
        image: '/images/receta-01.jpg'
      },
      {
        text: 'Heat a skillet over medium heat and place a tortilla on it. Add grated cheese on one half of the tortilla, then add the chopped vegetables on top of the cheese.',
        image: '/images/receta-02.jpg'
      },
      {
        text: 'Fold the tortilla in half over the filling. Cook until the bottom is golden brown and crispy, then flip and cook the other side. Serve hot with salsa and sour cream.',
        image: '/images/receta-03.jpg'
      }
    ]
  },
  {
    steps: [
      {
        text: 'Chicken Fajitas',
        image: '/images/receta-02.jpg'
      },
      {
        text: 'Heat oil in a skillet over medium-high heat. Add the marinated chicken strips and sliced bell peppers and onions. Cook until the chicken is fully cooked and the vegetables are tender.',
        image: '/images/receta-03.jpg'
      },
      {
        text: 'Warm tortillas in a separate skillet or microwave. Fill each tortilla with the cooked chicken and vegetable mixture. Serve hot with guacamole and salsa.',
        image: '/images/receta-01.jpg'
      }
    ]
  },
  {
    steps: [
      {
        text: 'Breakfast Burritos',
        image: '/images/receta-03.jpg'
      },
      {
        text: 'Warm tortillas on a separate skillet or in the microwave. Place a scoop of cooked sausage and scrambled eggs in the center of each tortilla.',
        image: '/images/receta-01.jpg'
      },
      {
        text: 'Sprinkle shredded cheese on top of the filling, then fold the sides of the tortilla inward and roll it up tightly to form a burrito.',
        image: '/images/receta-02.jpg'
      }
    ]
  }
];

export function StraighFromOurKitchen() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    }
  };

  return (
    <section className="overflow-hidden lg:aspect-video">
      <div className="h-full bg-[#532826] py-24">
        <h1 className="text-center font-portland text-4xl font-black uppercase text-[#F6E7E0]">
          Straight from our kitchen
        </h1>
        <div className="relative mx-auto w-10/12 py-10 lg:max-w-[1120px]">
          <div className="relative flex w-full items-center justify-center">
            <AnimatedShapesBG />
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={pagination}
              spaceBetween={32}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
              className="pagination-dots w-full"
            >
              {recipeItems &&
                recipeItems.map((recipe, index) => (
                  <SwiperSlide>
                    <RecipeCardSlideshow key={index} recipe={recipe} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedShapesBG() {
  return (
    <div className="absolute flex aspect-[0.7/1] h-full w-full items-center justify-between lg:w-[122%]">
      <figure className="relative flex aspect-[1/2] w-[18%] flex-col items-center">
        <ShapeFlower className="absolute left-[13.02%] top-[3.75%] w-[13.952%] [&_svg]:animate-spin-reverse [&_svg]:fill-[#42201e]" />
        <ShapeRomboid className="absolute left-[27.91%] top-[16.88%] w-[11.63%] [&_svg]:animate-blink-delayed [&_svg]:fill-[#42201e]" />
        <ShapeSnowflake className="absolute left-1/2 top-1/2 w-full [&_svg]:animate-spin [&_svg]:fill-[#42201e]" />
        <ShapeFlower className="absolute left-[33.94%] top-[96.25%] w-[13.952%] [&_svg]:animate-spin-reverse [&_svg]:fill-[#42201e]" />
        <ShapeRomboid className="absolute left-[15.81%] top-[84%] w-[11.63%] [&_svg]:animate-blink [&_svg]:fill-[#42201e]" />
      </figure>
      <figure className="relative flex aspect-[1/2] w-[18%] flex-col items-center">
        <ShapeFlower className="absolute left-[86.98%] top-[3.75%] w-[13.952%] [&_svg]:animate-spin [&_svg]:fill-[#42201e]" />
        <ShapeRomboid className="absolute left-[72.09%] top-[16.88%] w-[11.63%] [&_svg]:animate-blink-delayed [&_svg]:fill-[#42201e]" />
        <ShapeSnowflake className="absolute left-1/2 top-1/2 w-full [&_svg]:animate-spin-reverse [&_svg]:fill-[#42201e]" />
        <ShapeFlower className="absolute left-[66.06%] top-[96.25%] w-[13.952%] [&_svg]:animate-spin [&_svg]:fill-[#42201e]" />
        <ShapeRomboid className="absolute left-[84.19%] top-[84%] w-[11.63%] [&_svg]:animate-blink [&_svg]:fill-[#42201e]" />
      </figure>
    </div>
  );
}
