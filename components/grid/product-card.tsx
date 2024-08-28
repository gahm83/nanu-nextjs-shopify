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
  const defaultVariantId = product?.variants[0]?.id;
  return (
    <div className="relative flex flex-col items-center justify-stretch">
      <Link href={`/product/${product.handle}`} className="block w-full">
        <Image
          src={product.featuredImage?.url}
          width={405}
          height={500}
          alt={product.title}
          className="w-full"
        />
      </Link>
      <div className="relative mt-2 w-full pt-5 before:absolute before:inset-x-0 before:top-0 before:block before:h-[5px] before:bg-border-sky before:bg-repeat-space before:content-['']">
        <div className="flex items-center space-x-4">
          <h2 className="w-full truncate font-portland text-2xl font-semibold uppercase text-[#532826]">
            {product.title}
          </h2>
          <div className="flex h-12 items-center justify-center border-2 border-[#532826] px-3 lg:hidden">
            <p className="font-portland text-2xl uppercase leading-none text-[#532826]">
              ${Number(product.priceRange.minVariantPrice.amount).toString().replace(/\.0$/, '')}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-stretch space-x-5">
          {hideDescription ? (
            <Link
              href={`/product/${product.handle}`}
              className="flex w-full flex-grow items-center justify-center border-2 border-solid border-[#532826] bg-[#532826] text-center font-portland text-lg font-black uppercase text-[#F6E7E0]"
            >
              <span>Shop Now</span>
            </Link>
          ) : (
            <>
              <p className="line-clamp-2 font-athiti text-lg font-medium leading-tight text-[#532826]">
                {product.description}
              </p>
              <div className="hidden h-12 items-center justify-center border-2 border-[#532826] px-3 lg:flex ">
                <p className="font-portland text-2xl uppercase leading-none text-[#532826]">
                  $
                  {Number(product.priceRange.minVariantPrice.amount).toString().replace(/\.0$/, '')}
                </p>
              </div>
            </>
          )}
          <Suspense fallback={null}>
            <AddToCart
              variants={product.variants}
              availableForSale={product.availableForSale}
              defaultVariantId={defaultVariantId}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
