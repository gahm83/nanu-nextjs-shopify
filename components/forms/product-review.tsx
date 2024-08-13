'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import StarRating from '../product/star-rating';

interface FormData {
  shop_domain: string;
  platform: string;
  id: number;
  name: string;
  email: string;
  rating: number;
  title: string;
  body: string;
  productId: string;
  url: string;
}

const ProductReviewForm = ({ productId }: { productId: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const [rating, setRating] = useState<number>(0);
  const shopifyProductId = productId.split('/');
  const id = Number(shopifyProductId[shopifyProductId.length - 1]);

  console.log(id);

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.assign({ id, rating }, data))
      });

      if (response.ok) {
        console.log('Review submitted successfully!');
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-5 py-4">
      <input {...register('shop_domain', { value: '0690d7-0d.myshopify.com' })} type="hidden" />
      <input {...register('platform', { value: 'shopify' })} type="hidden" />
      <input {...register('name', { value: 'Mauricio Farid García Herrera' })} type="hidden" />
      <input {...register('email', { value: 'farid.herrera@gmail.com' })} type="hidden" />
      <h2 className="font-portland text-2xl font-bold uppercase">Share Your Experience</h2>
      <div>
        <StarRating rating={rating} onChange={setRating} editable />
      </div>
      <div className="flex flex-col items-stretch">
        <input
          id="title"
          className={clsx(
            'h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80',
            { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.title }
          )}
          placeholder="Title your review!"
          {...register('title', {
            required: 'Please add a catchy title for your review',
            maxLength: {
              value: 100,
              message: 'Title must be less than 100 characters'
            }
          })}
        />
        {errors.title && <p className="text-[#EA2D23]">{errors.title.message}</p>}
      </div>
      <div className="flex flex-col items-stretch">
        <textarea
          id="body"
          className={clsx(
            'h-36 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 py-2 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80',
            { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.body }
          )}
          placeholder="Share your thoughts about"
          {...register('body', {
            required: "Don't forget to share your thoughts about the product!",
            maxLength: {
              value: 5000,
              message: 'Review must be less than 5000 characters'
            }
          })}
        />
        {errors.body && <p className="text-[#EA2D23]">{errors.body.message}</p>}
      </div>
      <button
        type="submit"
        className="border-2 border-solid border-[#8FC8E7] bg-[#8FC8E7] px-6 py-2 text-center font-portland text-lg font-black uppercase text-[#532826] max-lg:flex-grow lg:min-w-48"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ProductReviewForm;
