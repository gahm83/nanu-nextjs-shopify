'use client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Prose from 'components/prose';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect } from 'react';
import { AddToCart } from '../cart/add-to-cart';
import Price from '../price';
import FullVegan from '../svg/full-vegan';
import GlutenFree from '../svg/gluten-free';
import HandmadeSmallBatches from '../svg/handmade-small-batches';
import MadeWithCleanIngredients from '../svg/made-with-clean-ingredients';
import MadeWithFewIngredients from '../svg/made-with-few-ingredients';
import NoArtificialFlavours from '../svg/no-artificial-flavours';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';
import { VariantSelector } from './variant-selector';
// import badges from '/images/Badges.png';
// import imageClose from '/images/Close.png';
// import dashedIngredients from '/images/ingredientes-dashed.png';

export function ProductDescription({ product }: { product: Product }) {
  const [cantidad, setCantidad] = React.useState(1);
  const [showPopup, setShowPopup] = React.useState(false);
  const searchParams = useSearchParams();
  const collection = product.collections.edges[0].node.handle;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

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

  console.log(product.variants);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(
      '::::::::::::::::::::: xxxxxxx',
      searchParams.get('pack size'),
      Object.fromEntries(searchParams.entries()),
      params
    );
  }, [searchParams]);

  https: return (
    <>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] h-screen w-screen overflow-y-auto bg-black/70 md:flex md:items-center md:justify-center">
            <motion.div
              className="w-full p-10 pt-12 "
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative mx-auto w-full rounded-lg bg-[#532826] p-5 max-md:max-w-[380px] md:w-9/12 md:max-w-[720px]">
                <button
                  onClick={togglePopup}
                  className="group absolute left-full top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[#532826]"
                >
                  <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
                  <XMarkIcon className="relative h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
                </button>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="max-md:row-start-2">
                    <Image
                      src={product.nutritionFacts?.reference?.image.src as string}
                      alt={product.title}
                      className="mx-auto h-auto w-full cursor-pointer"
                      width={406}
                      height={500}
                    />
                  </div>
                  <div className="md:flex">
                    <div className="border-top-sky border-bottom-sky relative flex flex-grow flex-col items-stretch justify-between py-6">
                      <div className="space-y-2 text-center">
                        <h2 className="font-portland text-xl font-semibold uppercase text-[#F6E7E0]">
                          Ingredients
                        </h2>
                        <p>{product.ingredients?.value}</p>
                      </div>
                      {collection === 'tortillas' ? (
                        <div className="relative flex aspect-[16/9] justify-between">
                          <GlutenFree className="absolute top-0 w-28 rotate-[15deg]" />
                          <MadeWithFewIngredients className="absolute bottom-0 left-[55%] w-24 -translate-x-1/2 rotate-[15deg]" />
                          <FullVegan className="absolute right-4 w-28 -translate-y-1/2 rotate-[-16deg]" />
                          <ShapeSnowflake className="absolute right-[10px] top-[140px] h-5 w-5 [&_svg]:fill-[#8DC8E8]" />
                          <ShapeSnowflake className="absolute left-[42%] top-[6%] h-5 w-5 [&_svg]:fill-[#8DC8E8]" />
                          <ShapeRomboid className="absolute left-[20%] top-[80%] h-[10] w-[10] [&_svg]:fill-[#8DC8E8]" />
                          <ShapeRomboid className="absolute left-[78%] top-[90%] h-[10] w-[10] [&_svg]:fill-[#8DC8E8]" />
                        </div>
                      ) : (
                        <div className="relative flex aspect-[16/9] justify-between">
                          <NoArtificialFlavours className="absolute top-0 w-28 rotate-[15deg]" />
                          <MadeWithCleanIngredients className="absolute bottom-0 left-[55%] w-24 -translate-x-1/2 rotate-[15deg]" />
                          <HandmadeSmallBatches className="absolute right-0 w-36 -translate-y-1/2 rotate-[-16deg]" />
                          <ShapeSnowflake className="absolute right-[10px] top-[140px] h-5 w-5 [&_svg]:fill-[#8DC8E8]" />
                          <ShapeSnowflake className="absolute left-[42%] top-[6%] h-5 w-5 [&_svg]:fill-[#8DC8E8]" />
                          <ShapeRomboid className="absolute left-[20%] top-[80%] h-[10] w-[10] [&_svg]:fill-[#8DC8E8]" />
                          <ShapeRomboid className="absolute left-[78%] top-[90%] h-[10] w-[10] [&_svg]:fill-[#8DC8E8]" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex flex-grow flex-col px-6 py-5 lg:px-10 lg:py-8">
        <div className="border-bottom-sky relative hidden lg:block">
          <h4 className="pb-4 font-plam-canyon-drive text-5xl font-normal capitalize text-[#532826]">
            {collection}
          </h4>
        </div>
        <h1 className="mb-2 mt-5 font-portland text-4xl font-bold uppercase text-[#532826]">
          {product.title}
        </h1>
        <div className="my-auto grid grid-flow-row grid-cols-2 items-center justify-stretch border-2 border-[#532826] text-center font-portland uppercase text-[#532826] lg:flex lg:grid-cols-3 lg:divide-x-2 lg:divide-[#532826]">
          <div className="col-span-1 flex h-[50px] items-center justify-center border-r-2 border-[#532826] bg-[#EDD3C5] px-4 text-2xl font-bold lg:border-r-0">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
          <div className="col-span-2 row-start-2 flex h-[50px] items-center justify-center border-t-2 border-[#532826] px-4 font-bold leading-none lg:col-span-1 lg:row-start-1 lg:border-t-0">
            {product.quantity?.value}
          </div>
          <div className="col-span-1 flex h-[50px] items-center justify-center whitespace-nowrap px-4 font-bold">
            {product.weight?.value} OZ
          </div>
        </div>
        {product.descriptionHtml ? (
          <Prose
            html={product.descriptionHtml}
            className="font-athiti text-lg font-medium text-[#532826]"
          />
        ) : (
          <p className="font-athiti text-lg font-medium text-[#532826]">{product.description}</p>
        )}
        <div className="my-auto flex items-center gap-8">
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
        <div className="flex items-end gap-5">
          <Suspense fallback={null}>
            <VariantSelector options={product.options} variants={product.variants} />
          </Suspense>
          <Suspense fallback={null}>
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </Suspense>
        </div>
        <a
          className="lg:text-md mt-4 flex cursor-pointer items-center justify-center py-3 text-center font-portland font-bold uppercase leading-none text-[#532826]"
          onClick={togglePopup}
        >
          <span>Ingredients & nutrition</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="ml-2 h-5 w-5"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" className="fill-[#532826]" />
          </svg>
        </a>
      </div>
    </>
  );
}
