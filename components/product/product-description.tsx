'use client';
import badges from '@/images/Badges.png';
import imageClose from '@/images/Close.png';
import dashedIngredients from '@/images/ingredientes-dashed.png';
import Prose from 'components/prose';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { AddToCart } from '../cart/add-to-cart';

export function ProductDescription({ product }: { product: Product }) {
  const [cantidad, setCantidad] = React.useState(1);
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  console.log('*********************', product, product.variants);
  const handleIncrement = () => {
    if (cantidad < (product?.stock ?? 0)) {
      setCantidad((prev) => prev + 1);
    }
    setCantidad((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-black bg-opacity-50">
            <motion.div
              className="fixed left-0 top-0 z-[99999] flex h-full w-full items-center justify-center bg-opacity-50"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-lg bg-[#532826] p-8">
                <button className="absolute -right-6 -top-6 p-0" onClick={togglePopup}>
                  <Image
                    src={imageClose}
                    alt={'Close'}
                    className="mx-auto h-auto w-auto cursor-pointer"
                    width={406}
                    height={500}
                  />
                </button>
                <div className="flex gap-6">
                  {/* TODO: FALTAN INGREDIENTES */}
                  {/* <Image 
                                  src={product.imageIngredients}
                                  alt={product.title} 
                                  className="w-1/2 h-auto mx-auto cursor-pointer"
                                  width={406} height={500}
                              /> */}
                  <div className="flex w-1/2 flex-col justify-between">
                    <div>
                      <Image
                        src={dashedIngredients}
                        alt={'Dashed Image'}
                        className="w-full"
                        width={282}
                        height={5}
                      />
                      <h3 className="Portland pb-2 pt-5 text-center text-[24px] font-black leading-[1.2] text-[#F6E7E0]">
                        INGREDIENTS
                      </h3>
                      <p className="Portland mx-auto w-[232px] text-center text-[19px] font-light leading-[1.2] text-[#F6E7E0]">
                        Oats, water, salt and lots of love!
                      </p>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                      <Image
                        src={badges}
                        alt={'Badges'}
                        className="w-full"
                        width={282}
                        height={199}
                      />
                      <Image
                        src={dashedIngredients}
                        alt={'Dashed Image'}
                        className="w-full"
                        width={282}
                        height={5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex flex-col space-y-5 px-10 py-8">
        <div className="relative pb-5 after:inset-x-10 after:bottom-0 after:block after:h-[5px] after:bg-border-sky after:bg-repeat-space after:content-['']">
          <h4 className="pb-5 font-plam-canyon-drive text-5xl font-normal text-[#532826]">
            Collection (Pendiente)
          </h4>
        </div>
        <h1 className="mb-2 font-portland text-4xl font-bold uppercase text-[#532826]">
          {product.title}
        </h1>
        <div className="flex items-center justify-stretch divide-x-2 divide-[#532826] border-2 border-[#532826] text-center font-portland uppercase text-[#532826]">
          <div className="flex h-[50px] items-center justify-center bg-[#EDD3C5] px-4 text-2xl font-bold">
            ${Number(product.priceRange.maxVariantPrice.amount).toString().replace(/\.0$/, '')}
          </div>
          <div className="flex h-[50px] items-center justify-center px-4 font-bold leading-none">
            {product.quantity?.value}
          </div>
          <div className="flex h-[50px] items-center justify-center whitespace-nowrap px-4 font-bold">
            {product.weight?.value} OZ
          </div>
        </div>
        {product.descriptionHtml ? (
          <Prose
            className="font-athiti text-lg font-medium leading-none text-[#532826]"
            html={product.descriptionHtml}
          />
        ) : (
          <p className="font-athiti text-lg font-medium leading-none text-[#532826]">
            XXX{product.description}
          </p>
        )}
        {/* <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div> */}
        <div className="flex items-center gap-5">
          <div className="flex items-center bg-[#EDD3C5]">
            <button
              className="px-4 py-2 font-portland text-[24px] font-normal transition-all hover:bg-[#df9e7c]"
              onClick={handleDecrement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M19 13H5v-2h14z" />
              </svg>
            </button>
            <input
              type="text"
              value={cantidad}
              readOnly
              className="h-[50px] w-10 border-0 bg-transparent p-0 text-center font-portland text-2xl text-[#532826]"
            />
            <button
              className="rounded-r px-4 py-2 font-portland text-[24px] font-normal transition-all hover:bg-[#df9e7c]"
              onClick={handleIncrement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" />
              </svg>
            </button>
          </div>
          <Suspense fallback={null}>
            <AddToCart
              variants={product.variants}
              availableForSale={product.availableForSale}
              isProduct={true}
            />
          </Suspense>
        </div>
        <a
          className="Portland mb-2 mt-3 cursor-pointer py-3 text-center text-[15px] font-black leading-[15px] text-[#532826]"
          onClick={togglePopup}
        >
          Ingredients & nutrition +
        </a>
        {/* <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense> 
      <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense> */}
      </div>
    </>
  );
}
