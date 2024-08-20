'use client';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
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
  submitError?: string; // Add a general error field
}

const ProductReviewForm = ({ productId }: { productId: string }) => {
  const {
    register,
    setFocus,
    setValue,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onChange' });

  const ratingValue = watch('rating', 0);
  const titleValue = watch('title', '');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    if (titleValue && ratingValue === 0) {
      setError('rating', {
        type: 'manual',
        message: 'Please select a rating before entering a title'
      });
    } else {
      clearErrors('rating');
    }
  }, [titleValue, ratingValue, setError, clearErrors]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, productId })
      });

      if (response.ok) {
        setSubmitted(true);
        const url = new URL(window.location.href);
        url.search = ''; // Remove all query params
        window.history.replaceState({}, document.title, url.toString());
      } else {
        // Handle non-OK response
        setError('submitError', {
          type: 'manual',
          message: 'Failed to submit review. Please try again later.'
        });
      }
    } catch (error) {
      // Handle fetch error
      setError('submitError', {
        type: 'manual',
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  };

  return (
    <>
      {submitted ? (
        <div className="flex aspect-video flex-col items-center justify-center">
          <h2 className="font-portland text-2xl font-bold uppercase text-[#8FC8E7]">Thank You!</h2>
          <p className="text-lg">Your review has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-5 py-4">
          <input {...register('shop_domain', { value: '0690d7-0d.myshopify.com' })} type="hidden" />
          <input {...register('platform', { value: 'shopify' })} type="hidden" />
          <input {...register('name', { value: 'Mauricio Farid García Herrera' })} type="hidden" />
          <input {...register('email', { value: 'farid.herrera@gmail.com' })} type="hidden" />

          <h2 className="font-portland text-2xl font-bold uppercase">Share Your Experience</h2>
          <div className="relative">
            <input
              {...register('rating', {
                value: ratingValue,
                validate: (value) => value > 0 || 'Give it a star or two!'
              })}
              type="hidden"
            />
            <StarRating
              rating={ratingValue}
              onChange={(newRating) => setValue('rating', newRating)}
              editable
            />
            {errors.rating && <p className="text-[#EA2D23]">{errors.rating.message}</p>}
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
          {errors.submitError && <p className="text-[#EA2D23]">{errors.submitError.message}</p>}
          <button
            type="submit"
            className="border-2 border-solid border-[#8FC8E7] bg-[#8FC8E7] px-6 py-2 text-center font-portland text-lg font-black uppercase text-[#532826] max-lg:flex-grow lg:min-w-48"
          >
            Submit Review
          </button>
        </form>
      )}
    </>
  );
};

export default ProductReviewForm;
