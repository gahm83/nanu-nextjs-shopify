'use client';

import Image from 'next/image';
import Link from 'next/link';
import ShapeFlower from '../svg/shape-puff';

const CustomerReviewsItems = [
  {
    name: 'Emily P.',
    title: 'A great companion',
    content:
      "As a self-proclaimed tortilla aficionado, I'm thrilled to have discovered a brand that takes the time to outline the ingredients. My experience with Myt Falutas was nothing short of delightful. Their crunchiness held up impeccably during deep frying, leaving me with perfectly golden delights.",
    rating: 5
  },
  {
    image: '/images/review-1.jpg',
    name: 'Sarah M.',
    title: 'Insane Quality!',
    content:
      "Being particular about my tortillas and salsa, I was pleasantly surprised by Myt Falutas' transparency regarding ingredients. The satisfaction of frying up these tortillas without worrying about crumbling was truly a game-changer for my culinary adventures.",
    rating: 4
  },
  {
    name: 'Christian G.',
    title: 'A great companion',
    content:
      'For someone who takes their tortillas seriously, Myt Falutas is a dream come true. Their commitment to providing detailed ingredient breakdowns is commendable. Plus, the fact that these tortillas maintain their crunchiness even after deep frying is simply fantastic.',
    rating: 5
  },
  {
    name: 'James L.',
    title: 'Awesome texture!',
    content:
      'I’m a bit of a tortilla and salsa nerd and I was so happy to find a company that actually provides a detailed breakdown of the contents. I was really happy when myt falutas came out crunchy and didn’t crumble when deep fried.',
    rating: 4
  },
  {
    image: '/images/review-2.jpg',
    name: 'Monique Q.',
    title: 'There are perfect for anything!',
    content:
      "My Falutas has won me over with their attention to detail, especially when it comes to listing ingredients. When I tried deep frying these tortillas, I was overjoyed to see them maintain their integrity without crumbling. It's evident that quality is a top priority for this brand.",
    rating: 5
  },
  {
    name: 'Anne O.',
    title: 'Perfect for chips',
    content:
      'I have high standards when it comes to tortillas, and Myt Falutas exceeded them in every way. From their informative ingredient breakdown to their impeccable crunchiness when deep fried, these tortillas are a cut above the rest.',
    rating: 4
  },
  {
    name: 'Santiago G',
    title: 'Found muy new  favorite tortillas',
    content:
      "Myt Falutas has quickly become my go-to for tortillas, and for good reason. Their commitment to transparency with ingredients is refreshing, and the texture of their tortillas holds up beautifully, even when deep fried. I couldn't be happier with my experience.",
    rating: 5
  },
  {
    name: 'Alexa D.',
    title: 'Delightful Surprise',
    content:
      "I stumbled upon Myt Falutas by chance and it's been a delightful discovery. Their tortillas maintain a perfect balance of crispiness and flavor, making them a staple in my kitchen.",
    rating: 4
  },
  {
    name: 'Oliver H.',
    title: 'Unexpectedly Delicious',
    content:
      "I wasn't sure what to expect when I tried Myt Falutas, but I was pleasantly surprised. Their tortillas are flavorful and hold up well, even when used in complex dishes.",
    rating: 5
  },
  {
    image: '/images/review-3.jpg',
    name: 'Sophia W.',
    title: 'Impressive Quality',
    content:
      'Myt Falutas has set a new standard for tortillas in my household. The attention to detail in their ingredients list and the consistent quality of their products make them a standout choice.',
    rating: 4
  },
  {
    name: 'Daniel R.',
    title: 'Perfect for Taco Nights',
    content:
      'My family loves taco nights, and Myt Falutas has become our go-to choice for tortillas. Their texture and flavor elevate our taco experience to a whole new level.',
    rating: 5
  },
  {
    name: 'Isabella M.',
    title: 'Crunchy Goodness',
    content:
      'Myt Falutas tortillas are the perfect balance of crunchy and delicious. Whether enjoyed plain or as part of a dish, they always impress with their texture and flavor.',
    rating: 4
  }
];

const shopByItems = [
  {
    image: '/images/shop-by-tortillas.png',
    name: 'Tortillas',
    url: '/shop/tortillas'
  },
  {
    image: '/images/shop-by-sauces.png',
    name: 'Salsas',
    url: '/shop/sauces'
  },
  {
    image: '/images/shop-by-bundles.png',
    name: 'Bundles',
    url: '/shop/bundles'
  }
];

export function ShopByProduct() {
  return (
    <section className="relative before:absolute before:left-5 before:right-5 before:top-0 before:block before:h-[5px] before:bg-border-wood before:bg-repeat-space before:content-['']">
      <div className="py-16">
        <div className="max-w-full-lg mx-auto w-11/12">
          <div className="flex flex-col items-center lg:flex-row">
            <h2 className="px-[16%] text-center font-portland text-3xl font-black uppercase text-[#532826] lg:px-0 lg:text-4xl">
              Shop by Product
            </h2>
            <div className="mt-10 flex w-full items-center justify-around lg:ml-24 lg:mt-0 lg:w-auto lg:justify-center lg:space-x-32">
              {shopByItems.map((button, index) => (
                <Link href={button.url} key={index} className="group flex flex-col justify-center">
                  <figure className="relative flex aspect-square w-24 items-center justify-center lg:w-36 [&_svg]:text-[#EDD3C5] [&_svg]:transition [&_svg]:duration-300 group-hover:[&_svg]:rotate-90">
                    <ShapeFlower />
                    <Image
                      src={button.image}
                      width={256}
                      height={256}
                      alt={`Shop by ${button.name} Picture`}
                      className="absolute h-[77%] w-[77%]"
                    />
                  </figure>
                  <span className="mx-auto mt-4 text-center font-portland text-lg font-black uppercase leading-none text-[#532826] lg:text-2xl">
                    {button.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
