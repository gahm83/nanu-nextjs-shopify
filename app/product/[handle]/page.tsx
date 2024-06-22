import { ProductCard } from '@/components/grid/product-card';
import { CustomerReviews } from '@/components/product/customer-reviews';
import { StraighFromOurKitchen } from '@/components/product/straight-from-our-kitchen';
import { VersatileCompanion } from '@/components/product/versatile-companion';
import { Gallery } from 'components/product/gallery';
import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image as TImage } from 'lib/shopify/types';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount
    }
  };

  console.log({ product });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd)
        }}
      />
      <div className="mx-auto max-w-[1120px] pb-10 pt-40 lg:pb-16 lg:pt-52">
        <div className="grid gap-4 lg:mx-10 lg:grid-cols-2 lg:gap-10 xl:mx-0">
          <div className="px-5 lg:max-h-[600px] lg:overflow-y-scroll lg:p-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[1.2/1] rounded-xl bg-[#F2D2C3]">
                <Suspense
                  fallback={
                    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
                  }
                >
                  <Gallery
                    images={product.images.map((image: TImage) => ({
                      src: image.url,
                      altText: image.altText
                    }))}
                  />
                </Suspense>
              </div>
              <div className="relative col-span-2 hidden aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#F2D2C3] lg:block ">
                <Image
                  src="/images/hero-producto.jpg"
                  alt="Nanu's Heritage Doods"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="relative hidden aspect-square w-full overflow-hidden rounded-xl bg-[#F2D2C3] lg:block ">
                <Image
                  src="/images/nanu-01.jpg"
                  alt="Nanu's Heritage Doods"
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative hidden aspect-square w-full overflow-hidden rounded-xl bg-[#F2D2C3] lg:block ">
                <Image
                  src="/images/nanu-02.jpg"
                  alt="Nanu's Heritage Doods"
                  width={800}
                  height={600}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex px-5 lg:p-0">
            <div className="flex flex-grow rounded-xl bg-[#FFF5F0]">
              <ProductDescription product={product} />
            </div>
          </div>
        </div>
        {/* <RelatedProducts id={product.id} /> */}
      </div>
      <VersatileCompanion />
      <CustomerReviews />
      <StraighFromOurKitchen />
      <RelatedProducts id={product.id} />
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="mx-auto w-11/12 py-16 lg:max-w-screen-xl">
      <h2 className="mb-14 text-center font-portland text-4xl font-black uppercase text-[#532826]">
        Shop More Products
      </h2>
      <ul className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProducts.slice(0, 3).map((product) => (
          <li key={product.handle} className="animate-fadeIn transition-opacity">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
