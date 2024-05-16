'use client';
import 'blaze-slider/dist/blaze.css';
import Image from 'next/image';
import { useBlazeSlider } from 'react-blaze-slider';

type RecipeItem = {
  steps: {
    text: string;
    image: string;
  }[];
};

export function RecipeCardSlideshow({ recipe }: { recipe: RecipeItem }) {
  const ref = useBlazeSlider({
    all: {
      slidesToShow: 1
    }
  });

  return (
    <div className="blaze-slider" ref={ref}>
      <div className="blaze-container">
        <div className="blaze-track-container">
          <div className="blaze-track">
            {recipe.steps.map((step, idx) => (
              <figure key={idx} className="relative aspect-[0.56/1] overflow-hidden rounded-xl">
                <Image src={step.image} layout="fill" objectFit="cover" alt="Receta" />
                <div className="after:to-12% absolute inset-0 before:absolute before:inset-0 before:block before:h-full before:w-full before:bg-gradient-to-b before:from-black/60 before:to-transparent before:to-45% before:content-[''] after:absolute after:inset-0 after:block after:h-full after:w-full after:bg-gradient-to-b after:from-transparent after:from-45% after:to-black/80 after:content-['']">
                  <div className="border-bottom-sky absolute inset-8 z-10 flex flex-col justify-end pb-5">
                    {idx === 0 ? (
                      <h2 className="font-portland text-3xl font-black uppercase leading-none tracking-tighter text-[#F6E7E0]">
                        {step.text}
                      </h2>
                    ) : (
                      <p className="text-xl font-medium leading-none text-[#F6E7E0]">{step.text}</p>
                    )}
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
