'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Prose from 'components/prose';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import React, { Suspense } from 'react';
import { AddToCart } from '../cart/add-to-cart';
// import badges from '/images/Badges.png';
// import imageClose from '/images/Close.png';
// import dashedIngredients from '/images/ingredientes-dashed.png';

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
    } else {
      setCantidad((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  };
  //www.godaddy.com/es/seguridad-web
  https: return (
    <>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] h-screen w-screen overflow-y-auto bg-black/70 lg:flex lg:items-center lg:justify-center">
            <motion.div
              // className="fixed left-0 top-0 z-[99999] flex h-full w-full items-center justify-center bg-opacity-50 px-5"
              className="w-full p-10 pt-12 "
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative mx-auto w-full rounded-lg bg-[#532826] p-5 max-md:max-w-[380px] md:max-w-screen-md">
                <button
                  onClick={togglePopup}
                  className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]"
                >
                  <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
                  <XMarkIcon className="relative h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
                </button>
                <div className="ma grid gap-6 md:grid-cols-12">
                  <div className="max-md:row-start-2 md:col-span-5">
                    <Image
                      src={product.nutritionFacts?.reference?.image.src as string}
                      alt={product.title}
                      className="mx-auto h-auto w-full cursor-pointer"
                      width={406}
                      height={500}
                    />
                  </div>
                  <div className="md:col-span-7 md:flex">
                    <div className="border-top-sky border-bottom-sky relative flex flex-grow flex-col items-stretch justify-between py-6">
                      <div className="space-y-2 text-center">
                        <h2 className="font-portland text-xl font-semibold uppercase text-[#F6E7E0]">
                          Ingredientes
                        </h2>
                        <p>{product.ingredients?.value}</p>
                      </div>
                      <div className="flex aspect-[2/1] justify-between lg:aspect-[3/1]">
                        <div className="relative aspect-square w-[100px] self-start">
                          <Image
                            src="/images/home/benefits/gluten-free.svg"
                            fill={true}
                            alt="Gluten free!"
                            className="rotate-15 h-24 w-24"
                          />
                          <Image
                            src="/images/snowflake-blue.svg"
                            alt="Honor your roots"
                            width={20}
                            height={20}
                            className="blink-4 absolute bottom-full left-[120%] top-[20%] h-5 w-5"
                          />
                        </div>
                        <div className="relative aspect-[0.77/1] w-[80px] self-end">
                          <Image
                            src="/images/home/benefits/made-with-few-ingredients.svg"
                            alt="Made with few ingredients"
                            fill={true}
                            className="-rotate-15 h-24 w-24"
                          />

                          <Image
                            src="/images/square-sky.svg"
                            alt="Honor your roots"
                            width={20}
                            height={20}
                            className="blink-1 absolute left-0 top-0 h-[10] w-[10]"
                          />
                          <Image
                            src="/images/square-sky.svg"
                            alt="Honor your roots"
                            width={20}
                            height={20}
                            className="blink-1 absolute right-[70%] top-[35%] h-[10] w-[10]"
                          />
                        </div>
                        <div className="relative aspect-square w-[100px] self-start">
                          <Image
                            src="/images/home/benefits/100-vegan.svg"
                            alt="100% Vegan"
                            fill={true}
                            className="-rotate-15 h-24 w-24"
                          />
                          <Image
                            src="/images/snowflake-blue.svg"
                            alt="Honor your roots"
                            width={40}
                            height={40}
                            className="blink-4 absolute left-0 top-[110%] h-5 w-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex flex-col space-y-5 px-6 py-5 lg:px-10 lg:py-8">
        <div className="border-bottom-sky relative pb-5">
          <h4 className="pb-5 font-plam-canyon-drive text-5xl font-normal capitalize text-[#532826]">
            {product.collections.edges[0].node.handle}
          </h4>
        </div>
        <h1 className="mb-2 font-portland text-4xl font-bold uppercase text-[#532826]">
          {product.title}
        </h1>
        <div className="grid grid-flow-row grid-cols-2 items-center justify-stretch border-2 border-[#532826] text-center font-portland uppercase text-[#532826] lg:flex lg:divide-x-2 lg:divide-[#532826]">
          <div className="col-span-1 flex h-[50px] items-center justify-center border-r-2 border-[#532826] bg-[#EDD3C5] px-4 text-2xl font-bold lg:border-r-0">
            ${Number(product.priceRange.maxVariantPrice.amount).toString().replace(/\.0$/, '')}
          </div>
          <div className="col-span-2 row-start-2 flex h-[50px] items-center justify-center border-t-2 border-[#532826] px-4 font-bold leading-none lg:border-t-0">
            {product.quantity?.value}
          </div>
          <div className="col-span-1 flex h-[50px] items-center justify-center whitespace-nowrap px-4 font-bold">
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
              className="flex h-[50px] w-8 items-center justify-end transition-all hover:bg-[#df9e7c]"
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
              className="h-[50px] w-12 border-0 bg-transparent p-0 text-center font-portland text-2xl text-[#532826]"
            />
            <button
              className="flex h-[50px] w-8 items-center justify-start transition-all hover:bg-[#df9e7c]"
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
