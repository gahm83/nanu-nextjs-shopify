import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import Link from 'next/link';
import { Suspense } from 'react';
import Logo from './logo';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  // const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div className="relative inset-x-0 top-0 z-50 bg-[#532826] py-5">
      <div className="relative mx-auto flex w-11/12 items-center lg:max-w-[1420px] lg:items-end">
        <button className="flex h-8 w-8 items-center justify-center lg:hidden">
          <svg viewBox="0 0 16 16" className="h-full w-full fill-[#f6e7e0]">
            <path d="M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z" />
          </svg>
        </button>
        <Link href="/" className="relative z-10 mx-auto w-[180px]">
          <Logo className="w-full fill-[#f6e7e0]" />
        </Link>
        <nav className="absolute left-0 hidden w-full  items-center space-x-4 pr-24 font-portland font-bold uppercase lg:flex">
          <Link href="/shop" className="py-2">
            Shop
          </Link>
          <Link href="/" className="py-2">
            About
          </Link>
          <Link href="/" className="!ml-auto py-2">
            Contact
          </Link>
        </nav>

        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div> */}

        <div className="absolute right-0">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
      {/* <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div> */}
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
    </div>
  );
}
