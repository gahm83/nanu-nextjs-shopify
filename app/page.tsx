import BannerHomeIsCloser from '@/components/homepage/banner-home-is-closer';
import Hero from '@/components/homepage/hero-banner';
import JoinOurTable from '@/components/homepage/join-our-table';
import MeetOurFamily from '@/components/homepage/meet-our-family';
import Modal from '@/components/homepage/modal';
import NanusCookBook from '@/components/homepage/nanus-cook-book';
import ProductTabs from '@/components/homepage/product-tabs';
import WeHateLettuceTacos from '@/components/homepage/we-hate-lettuce-tacos';
import { getPage } from 'lib/shopify';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const page = await getPage('home');

  interface Recipe {
    title: string;
    description: string;
    image: string;
    url: string;
  }

  const recipes: Recipe[] = page.recipes.references.nodes.map((node) => {
    const recipe: Recipe = {
      title: '',
      description: '',
      image: '',
      url: ''
    };

    node.fields.forEach((field) => {
      if (field.key === 'title') {
        recipe.title = field.value;
      } else if (field.key === 'description') {
        recipe.description = field.value;
      } else if (field.key === 'url') {
        recipe.url = field.value;
      } else if (field.key === 'image') {
        recipe.image = field.reference?.image?.url as string;
      }
    });

    return recipe;
  });

  return (
    <>
      <Hero />
      <MeetOurFamily />
      <WeHateLettuceTacos />
      <ProductTabs />
      <NanusCookBook recipes={recipes} />
      <BannerHomeIsCloser />
      <JoinOurTable />
      <Modal />
    </>
  );
}
