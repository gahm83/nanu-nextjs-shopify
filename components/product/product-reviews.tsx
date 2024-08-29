'use client';
import { Review } from '@/lib/shopify/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CustomerReviewCard } from '../reviews/reviewCard';
import StarRating from './star-rating';
export function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortOption, setSortOption] = useState('most-recent');

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

  const sortReviews = (reviews: Review[]) => {
    switch (sortOption) {
      case 'highest-rated':
        return [...reviews].sort((a, b) => b.rating - a.rating);
      case 'most-recent':
      default:
        return [...reviews].sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    }
  };

  return (
    <section>
      {reviews ? (
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
                <div className="relative flex after:absolute after:right-0 after:top-1/2 after:-ml-2 after:h-0 after:w-0 after:border-[6px] after:border-solid after:border-transparent after:border-t-[#532826]">
                  <select
                    className="h-14 flex-grow appearance-none bg-transparent pr-7 font-black uppercase outline-none"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="most-recent">Most Recent</option>
                    <option value="highest-rated">Highest Rated</option>
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
            <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:block after:h-[380px] after:w-full after:bg-gradient-to-b after:from-transparent after:to-[#F6E7E0] lg:max-h-[780px] lg:overflow-hidden">
              <div className="space-y-8 md:columns-2 md:gap-8 lg:columns-3">
                {sortReviews(reviews).map((item, index) => (
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
      ) : (
        <div className="mx-auto w-11/12 lg:max-w-[1120px]">
          <div className="space-y-5">
            <span className="text-[#8DC8E8]">*</span>
            <h2 className="font-plam-canyon-drive text-5xl font-normal">
              Be the first to share your thoughts on this product! Your review could help others
              make the right choice. We can't wait to hear from you!
            </h2>
            <span className="text-[#8DC8E8]">*</span>
          </div>
        </div>
      )}
    </section>
  );
}
