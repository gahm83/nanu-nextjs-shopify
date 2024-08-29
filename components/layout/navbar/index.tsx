import { getMenu } from '@/lib/shopify';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { Suspense } from 'react';
import Header from './header';
import NanuLink from './link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar({ pathName }: { pathName?: string | null }) {
  const menu = await getMenu('main-menu');
  const social = await getMenu('social-menu');

  return (
    <Header>
      <div className="relative mx-auto flex w-11/12 items-end py-3 lg:py-5">
        <div className="lg:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} social={social} />
          </Suspense>
        </div>
        <Logo />
        <nav className="absolute left-0 hidden w-full  items-center space-x-8 pr-24 font-portland font-bold uppercase lg:flex">
          <NanuLink url="/shop" link="Shop" />
          <NanuLink url="/about-us" link="About" />
          <NanuLink url="/contact-us" link="Contact" className="!ml-auto" />
        </nav>
        <div className="flex h-10 items-center lg:absolute lg:right-0">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </Header>
  );
}
