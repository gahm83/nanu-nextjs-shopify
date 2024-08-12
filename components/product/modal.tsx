'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  title: string;
  body: string;
  productId: string;
  url: string;
}

function ReviewForm({ id }: { id: string }) {
  const [visible, setVisible] = React.useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ReviewFormData>();

  const onSubmit: SubmitHandler<ReviewFormData> = async (data) => {
    try {
      const response = await fetch('https://judge.me/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          url: document.domain
        })
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

  const togglePopup = () => {
    setVisible(!visible);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] h-screen w-full overflow-y-auto bg-black/70 md:flex md:items-center md:justify-center">
          <motion.div
            className="w-full p-10 pt-12 "
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative mx-auto w-11/12 max-w-[380px] rounded-lg bg-[#532826] lg:max-w-screen-xl">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('productId', { value: id })} type="hidden" />
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    {...register('name', { required: true })}
                    className={clsx(
                      'h-12 w-full appearance-none border-2 border-[#F3E5DE] bg-transparent px-4 font-portland text-lg font-medium outline-none placeholder:font-bold placeholder:uppercase placeholder:text-[#F3E5DE]/80 lg:w-80',
                      { 'border-[#EA2D23] text-[#EA2D23] placeholder:text-[#EA2D23]': errors.name }
                    )}
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" {...register('email', { required: true })} />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div>
                  <label htmlFor="rating">Rating:</label>
                  <input
                    id="rating"
                    type="number"
                    {...register('rating', { required: true, min: 1, max: 5 })}
                  />
                  {errors.rating && <span>Rating must be between 1 and 5</span>}
                </div>
                <div>
                  <label htmlFor="title">Title:</label>
                  <input id="title" {...register('title', { required: true, maxLength: 100 })} />
                  {errors.title && <span>Title must be less than 100 characters</span>}
                </div>
                <div>
                  <label htmlFor="body">Review:</label>
                  <textarea id="body" {...register('body', { required: true, maxLength: 5000 })} />
                  {errors.body && <span>Review must be less than 5000 characters</span>}
                </div>
                {/* <div>
                <label htmlFor="productId">Product ID:</label>
                <input id="productId" {...register('productId', { required: true })} />
                {errors.productId && <span>This field is required</span>}
              </div> */}
                <button type="submit">Submit Review</button>
              </form>
              <button
                onClick={togglePopup}
                className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]"
              >
                <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
                <XMarkIcon className="relative z-10 h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default ReviewForm;
