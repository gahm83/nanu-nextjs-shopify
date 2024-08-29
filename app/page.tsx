import BannerHomeIsCloser from '@/components/homepage/banner-home-is-closer';
import Hero from '@/components/homepage/hero-banner';
import JoinOurTable from '@/components/homepage/join-our-table';
import MeetOurFamily from '@/components/homepage/meet-our-family';
import Modal from '@/components/homepage/modal';
import NanusCookBook from '@/components/homepage/nanus-cook-book';
import ProductTabs from '@/components/homepage/product-tabs';
import WeHateLettuceTacos from '@/components/homepage/we-hate-lettuce-tacos';
import { HomeCollection, Recipe } from '@/lib/shopify/types';
import { getPage } from 'lib/shopify';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const page = await getPage('home');

  const collections: HomeCollection[] = page.collections?.references?.nodes?.map((node) => {
    const collection: HomeCollection = {
      title: '',
      image: {
        src: '',
        width: 0,
        height: 0
      }
    };

    node.fields.forEach((field) => {
      if (field.key === 'name') {
        collection.title = field.value;
      } else if (field.key === 'image' && field.reference?.image) {
        collection.image = field.reference.image as {
          src: string;
          width: number;
          height: number;
        };
      }
    });

    return collection;
  });

  const recipes: Recipe[] = page.recipes?.references?.nodes?.map((node) => {
    const recipe: Recipe = {
      title: '',
      description: '',
      image: {
        url: '',
        width: 0,
        height: 0
      },
      url: ''
    };
    node.fields.forEach((field) => {
      if (field.key === 'title') {
        recipe.title = field.value;
      } else if (field.key === 'description') {
        recipe.description = field.value;
      } else if (field.key === 'url') {
        recipe.url = field.value;
      } else if (field.key === 'image' && field.reference?.image) {
        recipe.image = field.reference.image as {
          url: string;
          width: number;
          height: number;
        };
      }
    });
    return recipe;
  });

  return (
    <>
      <Hero />
      <MeetOurFamily collections={collections} />
      <WeHateLettuceTacos />
      <ProductTabs />
      <NanusCookBook recipes={recipes} />
      <BannerHomeIsCloser />
      <JoinOurTable />
      <Modal />
    </>
  );
}
