import { AddToCart } from 'components/cart/add-to-cart';
import Grid from 'components/grid';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <div className="relative flex flex-col items-center justify-stretch">
            <Link href={`/product/${product.handle}`}>
              <Image src={product.featuredImage?.url} width={405} height={500} alt={product.title} />
            </Link>
            <div className="before:absolute before:top-0 before:inset-x-0 before:block before:h-[5px] before:bg-border-sky before:bg-repeat-space before:content-[''] relative mt-2 pt-5 w-full">
              <h2 className="font-portland text-2xl font-semibold uppercase text-[#532826]">{product.title}</h2>
              <div className="flex items-center">
                <p className="text-[#532826] text-lg font-athiti font-medium leading-none">{product.description}</p>
                <p className="text-[#532826] text-2xl font-portland leading-none uppercase flex items-center justify-center border-2 border-[#532826] h-12 px-3 me-5">${Number(product.priceRange.maxVariantPrice.amount).toString().replace(/\.0$/, '')}</p>
                <Suspense fallback={null}>
                  <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
                </Suspense>
              </div>
            </div>
          </div>
        </Grid.Item>
      ))}
    </>
  );
}
