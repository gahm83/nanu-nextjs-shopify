import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { AddToCart } from '../cart/add-to-cart';

export function ProductCard({
  product,
  hideDescription = false
}: {
  product: Product;
  hideDescription?: boolean;
}) {
  return (
    <div className="relative flex flex-col items-center justify-stretch">
      <Link href={`/product/${product.handle}`}>
        <Image src={product.featuredImage?.url} width={405} height={500} alt={product.title} />
      </Link>
      <div className="relative mt-2 w-full pt-5 before:absolute before:inset-x-0 before:top-0 before:block before:h-[5px] before:bg-border-sky before:bg-repeat-space before:content-['']">
        <h2 className="font-portland text-2xl font-semibold uppercase text-[#532826]">
          {product.title}
        </h2>
        <div className="mt-4 flex items-stretch space-x-4">
          {hideDescription ? (
            <Link
              href={`/product/${product.handle}`}
              className="flex flex-grow items-center justify-center border-2 border-solid border-[#532826] bg-[#532826] text-center font-portland text-lg font-black uppercase text-[#F6E7E0]"
            >
              <span>Shop Now</span>
            </Link>
          ) : (
            <>
              <p className="font-athiti text-lg font-medium leading-none text-[#532826]">
                {product.description}
              </p>
              <p className="me-5 flex h-12 items-center justify-center border-2 border-[#532826] px-3 font-portland text-2xl uppercase leading-none text-[#532826]">
                ${Number(product.priceRange.maxVariantPrice.amount).toString().replace(/\.0$/, '')}
              </p>
            </>
          )}
          <Suspense fallback={null}>
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
