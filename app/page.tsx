import Hero from 'components/homepage/hero';
import MeetOurFamily from 'components/homepage/meetOurFamily';
import WeHateLettuceTacos from 'components/homepage/weHateLettuceTacos';

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
      <MeetOurFamily />
      <WeHateLettuceTacos />
      {/* <Carousel /> */}
    </>
  );
}
