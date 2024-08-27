'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CustomerReviewCard } from '../reviews/reviewCard';
import StarRating from './star-rating';

export function CustomerReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsRes = await fetch(`/api/reviews/${productId}`);
        const data = await reviewsRes.json();
        setReviews(data.reviews || []);
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <section>
      <div className="py-16">
        <h1 className="mb-14 text-center font-portland text-4xl font-black uppercase text-[#532826]">
          Customer Reviews
        </h1>
        <div className="mx-auto w-11/12 lg:max-w-[1120px]">
          <div className="lg:flex lg:justify-between">
            <div className="flex items-center justify-between font-portland text-[#532826] lg:justify-center lg:space-x-4">
              <p className="text-2xl font-black tracking-tight lg:text-3xl">4.0</p>
              <StarRating rating={4} />
              <p className="font-bold">Based on 12 reviews</p>
            </div>
            <div className="flex items-center justify-between font-portland text-xl uppercase text-[#532826] lg:space-x-12">
              <p className="font-bold">Sort</p>
              <div className="after:borde relative flex after:pointer-events-none after:absolute after:right-0 after:top-1/2 after:-ml-2 after:h-0 after:w-0 after:border-[6px] after:border-solid after:border-transparent after:border-t-[#532826] after:content-['']">
                <select className="h-14 flex-grow appearance-none bg-transparent pr-7 font-black uppercase outline-none">
                  <option value="">Most Recent</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="flex-grow border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:px-6 lg:py-2"
              >
                Write a review
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-11/12 py-10 lg:max-w-[1120px]">
          <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[380px] after:w-full after:bg-gradient-to-b after:from-transparent after:to-[#F6E7E0] after:content-[''] lg:max-h-[780px] lg:overflow-hidden">
            <div className="space-y-8 md:columns-2 md:gap-8 lg:columns-3">
              {reviews.map((item, index) => (
                <CustomerReviewCard key={index} review={item} />
              ))}
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/shop"
              className="max-w-52 border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] lg:px-6 lg:py-2"
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
