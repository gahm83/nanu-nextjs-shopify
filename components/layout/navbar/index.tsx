import FreeShippingBanner from '@/components/free-shipping-banner';
import { getMenu } from '@/lib/shopify';
import clsx from 'clsx';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import Logo from './logo';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path');
  const menu = await getMenu('next-js-frontend-header-menu');
  const shopPathPattern = /^\/shop\/.*$/;

  console.log(pathname);

  return (
    <header className={pathname !== '/' ? 'navbar-site' : 'navbar-home'}>
      <FreeShippingBanner />
      <nav
        className={clsx(
          'navbar-wrapper',
          {
            'bg-[#532826]/0 transition-all duration-300': pathname === '/' || pathname === '/shop'
          },
          { 'bg-[#532826] drop-shadow-md': pathname !== '/' && pathname !== '/shop' }
        )}
      >
        <div className="relative mx-auto flex w-11/12 items-center py-3 lg:max-w-[1420px] lg:items-start lg:py-5">
          <div className="lg:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link href="/" className="relative z-10 mx-auto w-[180px]">
            {pathname === '/' && <Logo className="logo-full w-full fill-[#f6e7e0]" />}
            <Image
              src="/images/nanu.svg"
              alt="Navbar Logo"
              width={114}
              height={40}
              className={`logo-nanu mx-auto block ${pathname === '/' ? 'h-0' : 'h-[40px]'}`}
            />
          </Link>
          <nav className="absolute left-0 hidden w-full  items-center space-x-8 pr-24 font-portland font-bold uppercase lg:flex">
            <Link
              href="/shop"
              className={clsx(
                "relative before:absolute before:bottom-0 before:left-[-10%] before:block before:h-3 before:w-0 before:bg-[#8DC8E8] before:transition-all before:duration-300 before:content-[''] hover:before:w-[120%]",
                { 'before:w-[120%]': shopPathPattern.test(pathname as string) }
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
          <div className="lg:absolute lg:right-0">
            <Suspense fallback={<OpenCart />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  );
}
