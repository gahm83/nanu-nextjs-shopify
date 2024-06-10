import BannerHomeIsCloser from '@/components/homepage/banner-home-is-closer';
import Hero from '@/components/homepage/hero-banner';
import JoinOurTable from '@/components/homepage/join-our-table';
import NanusCookBook from '@/components/homepage/nanus-cook-book';
import WeHateLettuceTacos from '@/components/homepage/we-hate-lettuce-tacos';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      {/* <MeetOurFamily /> */}
      <WeHateLettuceTacos />
      {/* <ProductTabs /> */}
      <NanusCookBook />
      <BannerHomeIsCloser />
      <JoinOurTable />
    </>
  );
}
