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
  const headerList = headers();
  const pathname = headerList.get('x-current-path');
  const menu = await getMenu('next-js-frontend-header-menu');
  const shopPathPattern = /^\/shop\/.*$/;

  return (
    <header className={pathname === '/' ? 'navbar-home' : 'navbar-site'}>
      <FreeShippingBanner />
      <nav
        className={
          pathname === '/'
            ? 'navbar-wrapper bg-[#532826]/0 transition-all duration-300'
            : 'bg-[#532826] drop-shadow-md'
        }
      >
        <div
          className={clsx(
            `relative mx-auto flex w-11/12 items-center py-3 lg:max-w-[1420px] lg:items-end lg:py-5`
          )}
        >
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
            {/* <Link href="/shop" className={`py-2 ${ pathname === '/shop'}`}> */}
            <Link
              href="/shop"
              className={clsx('relative py-2', {
                "relativebefore:content-[''] *:drop-shadow-md before:absolute before:bottom-2 before:left-[-10%] before:block before:h-3 before:w-[120%] before:bg-[#8DC8E8]":
                  shopPathPattern.test(pathname as string)
              })}
            >
              <span className="relative">Shop</span>
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
      {/* <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div> */}
    </header>
  );
}
