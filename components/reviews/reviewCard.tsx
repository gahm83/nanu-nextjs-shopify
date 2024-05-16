'use client';

import Image from 'next/image';
import StarRating from '../product/star-rating';

interface Review {
  image?: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

function getInitials(name: string) {
  const words = name.split(' ');
  const initials = words.map((word) => word.charAt(0)).join('');
  return initials;
}

export function CustomerReviewCard({ review }: { review: Review }) {
  return (
    <div className="box-border break-inside-avoid-column border-2 border-[#532826] text-[#532826]">
      {review.image && (
        <figure className="relative aspect-square">
          <Image src={review.image} fill={true} alt={review.title} />
        </figure>
      )}
      <div className="space-y-6 p-7">
        <div className="flex space-x-5">
          <figure className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#532826] text-[#F6E7E0]">
            <span className="font-portland text-xl font-black">{getInitials(review.name)}</span>
          </figure>
          <div>
            <h2 className="font-portland text-2xl font-black uppercase tracking-tighter">
              {review.name}
            </h2>
            <p>Verified buyer</p>
          </div>
        </div>
        <div>
          <StarRating rating={review.rating} />
          <h2 className="font-portland text-2xl font-black uppercase tracking-tighter">
            {review.title}
          </h2>
        </div>
        <div className="text-xl leading-tight">
          <p>{review.content}</p>
        </div>
      </div>
    </div>
  );
}
