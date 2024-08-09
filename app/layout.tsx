import FreeShippingBanner from '@/components/free-shipping-banner';
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { headers } from 'next/headers';
import { ReactNode } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headersList = headers();
  const pathName = headersList.get('x-current-path');

  return (
    <html lang="en">
      <body className="bg-[#532826] text-[#F6E7E0] antialiased">
        <FreeShippingBanner />
        <Navbar pathName={pathName} />
        <main className="w-full overflow-x-hidden bg-[#F6E7E0]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
