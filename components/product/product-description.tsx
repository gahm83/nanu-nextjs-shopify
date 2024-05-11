'use client'
import badges from "@/images/Badges.png";
import imageClose from "@/images/Close.png";
import lineaRombos from "@/images/Dashed Line Product.png";
import dashedIngredients from "@/images/ingredientes-dashed.png";
import estrella from "@/images/star-complete.png";
import estrellaVacia from "@/images/star-empty.png";
import Prose from 'components/prose';
import { AnimatePresence, motion } from 'framer-motion';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import React, { Suspense } from "react";
import { AddToCart } from "../cart/add-to-cart";

export function ProductDescription({ product }: { product: Product }) {
  const [cantidad, setCantidad] = React.useState(1);
  const [showPopup, setShowPopup] = React.useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  console.log('*********************', product, product.variants)
  const handleIncrement = () => {
    if (cantidad < (product?.stock ?? 0)) {
        setCantidad(prev => prev + 1);
    }
    setCantidad(prev => prev + 1);
};

const handleDecrement = () => {
    if (cantidad > 1) {
        setCantidad(prev => prev - 1);
    }
};

  return (
    <>
      <AnimatePresence>
          {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center z-[9999] bg-black">
                  <motion.div 
                      className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center z-[99999]"
                      initial={{ opacity: 0, y: -200 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -200 }}
                      transition={{ duration: 0.4 }}
                  >
                      <div className="bg-[#532826] rounded-lg p-8 relative">
                          <button 
                              className="absolute -top-6 p-0 -right-6"
                              onClick={togglePopup}
                          >
                              <Image 
                                  src={imageClose}
                                  alt={'Close'} 
                                  className="w-auto h-auto mx-auto cursor-pointer"
                                  width={406} height={500}
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
                              <div className="w-1/2 flex flex-col justify-between">
                                  <div>
                                      <Image 
                                          src={dashedIngredients}
                                          alt={'Dashed Image'} 
                                          className="w-full"
                                          width={282} height={5}
                                      />
                                      <h3 className="text-[#F6E7E0] font-black Portland text-[24px] leading-[1.2] text-center pt-5 pb-2">
                                          INGREDIENTS
                                      </h3>
                                      <p className="text-[#F6E7E0] font-light Portland text-[19px] leading-[1.2] w-[232px] text-center mx-auto">
                                          Oats, water, salt and lots of love!
                                      </p>
                                  </div>
                                  <div className="flex flex-col gap-[20px]">
                                      <Image 
                                          src={badges}
                                          alt={'Badges'} 
                                          className="w-full"
                                          width={282} height={199}
                                      />
                                      <Image 
                                          src={dashedIngredients}
                                          alt={'Dashed Image'} 
                                          className="w-full"
                                          width={282} height={5}
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
          )}
      </AnimatePresence>
      <div className="mb-6 flex flex-col pb-6">
        <h4 className="text-gray-600 mb-2 cursor-pointer Plam-Canyon-Drive font-thin text-[40px] capitalize leading-4">sauces</h4>
        <Image 
          src={lineaRombos} 
          alt="" 
          className="w-full mt-5"
        />
        <h1 className="mb-2 text-5xl font-medium">{product.title}</h1>
        <div className="flex items-center mb-2">
          {[1,2,3,4,5].map((_, index) => (
              <Image 
                  key={index}
                  src={index < product.stars ? estrella : estrellaVacia} 
                  alt="" 
                  className=""
              />
          ))}
          { product.numberReviews > 0 && <span className="text-gray-600 Athiti text-[19px] leading-[22px] font-medium ml-2">[{product.numberReviews}]</span>}
        </div>
        <div className="flex py-4">
            <p className="w-[33%] py-1 px-4 flex items-center justify-center leading-5 bg-[#EDD3C5] font-black Portland text-lg border-2 border-[#532826] text-center mb-2 uppercase">${product.priceRange.maxVariantPrice.amount}</p>
            <p className="w-[33%] py-1 px-4 flex items-center justify-center leading-5 font-black Portland text-lg border-y-2 border-[#532826] text-center text-gray-600 mb-2 uppercase">{product.quantity}</p>
            <p className="w-[33%] py-1 px-4 flex items-center justify-center leading-5 font-black Portland text-lg border-2 border-[#532826] text-center text-gray-600 mb-2 uppercase">{product.weight}</p>
        </div>
        {product.descriptionHtml ? (
        <Prose
          className="text-gray-700 mt-1 mb-8 Athiti text-[19px] font-medium leading-[23px]"
          html={product.descriptionHtml}
        />
      ) : <p className="text-gray-700 mt-1 mb-8 Athiti text-[19px] font-medium leading-[23px]">XXX{product.description}</p>}
        {/* <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div> */}
        <div className="flex items-center mb-4 gap-5">
          <div className="flex bg-[#EDD3C5]">
              <button 
                  className="hover:bg-[#df9e7c] transition-all text-[24px] Portland font-normal py-2 px-4 rounded-l"
                  onClick={handleDecrement}
              >
                  -
              </button>
              <input 
                  type="text" 
                  value={cantidad} 
                  readOnly 
                  className="bg-transparent px-2 py-2 text-center w-16 text-[24px] Portland font-normal"
              />
              <button 
                  className="hover:bg-[#df9e7c] transition-all py-2 px-4 rounded-r text-[24px] Portland font-normal"
                  onClick={handleIncrement}
              >
                  +
              </button>
          </div>
          {/* <button 
              className="bg-[#361917] w-full text-[#F6E7E0] py-3 rounded-none text-[15px] Portland font-black uppercase"
              onClick={() => {
                  console.log(`Añadido ${cantidad} ${product.title} al carrito`);
              }}
          >
              Add to bag
          </button> */}
          <Suspense fallback={null}>
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </Suspense>
        </div>
        <p 
            className="text-[15px] py-3 leading-[15px] font-black mb-2 text-[#532826] Portland text-center mt-3 cursor-pointer"
            onClick={togglePopup}
        >
            Ingredients & nutrition +
        </p>
      </div>
      {/* <Suspense fallback={null}>
        <VariantSelector options={product.options} variants={product.variants} />
      </Suspense> */}

      {/* <Suspense fallback={null}>
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </Suspense> */}
    </>
  );
}
