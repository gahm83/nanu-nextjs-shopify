import { getMenu } from '@/lib/shopify';
import clsx from 'clsx';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Link from 'next/link';
import { Suspense } from 'react';
import Bg from './bg';
import Logo from './logo';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar({ pathName }: { pathName?: string | null }) {
  const menu = await getMenu('next-js-frontend-header-menu');
  const shopPathPattern = /^\/shop\/.*$/;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      <Bg />
      <div className="relative mx-auto flex w-11/12 items-center py-3 lg:max-w-[1420px] lg:items-end lg:py-5">
        <div className="lg:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <Logo />
        <nav className="absolute left-0 hidden w-full  items-center space-x-8 pr-24 font-portland font-bold uppercase lg:flex">
          <Link
            href="/shop"
            className={clsx(
              "relative before:absolute before:bottom-0 before:left-[-10%] before:block before:h-3 before:w-0 before:bg-[#8DC8E8] before:transition-all before:duration-300 before:content-[''] hover:before:w-[120%]",
              { 'before:w-[120%]': shopPathPattern.test(pathName as string) }
            )}
          >
            <span className="relative drop-shadow-sm">Shop</span>
          </Link>
          <Link href="/" className="py-2">
            <span className="relative">About</span>
          </Link>
          <Link href="/" className="!ml-auto py-2">
            <span className="relative">Contact</span>
          </Link>
        </nav>
        <div className="h-10 lg:absolute lg:right-0">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
