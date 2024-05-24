'use client';
import { CustomerReviewCard } from '../reviews/reviewCard';
import StarRating from './star-rating';

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

export function CustomerReviews() {
  return (
    <div className="py-16">
      <h1 className="mb-14 text-center font-portland text-4xl font-black uppercase text-[#532826]">
        Customer Reviews
      </h1>
      <div className="mx-auto flex w-10/12 items-center justify-between lg:max-w-[1120px]">
        <div className="font-portland text-5xl">4.0</div>
        <StarRating rating={4} />
        <div className="text-sm">Based on 12 reviews</div>
        <div className="">
          <a
            href="#"
            className="flex-grow border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:px-6 lg:py-2"
          >
            Write a review
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-10/12 py-10 lg:max-w-[1120px]">
        <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[380px] after:w-full after:bg-gradient-to-b after:from-transparent after:to-[#F6E7E0] after:content-[''] lg:max-h-[780px] lg:overflow-hidden">
          <div className="space-y-8 md:columns-2 md:gap-8 lg:columns-3">
            {CustomerReviewsItems.map((item, index) => (
              <CustomerReviewCard key={index} review={item} />
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="max-w-52 border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:px-6 lg:py-2"
          >
            Show more
          </a>
        </div>
      </div>
    </div>
  );
}
