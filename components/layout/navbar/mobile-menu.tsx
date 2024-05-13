'use client';

import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lib/shopify/types';

import SocialMenu from '../social-menu';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-12 w-12 items-center justify-center text-[#F6E7E0] outline-none transition-colors lg:hidden"
      >
        <Bars3Icon className="h-9" />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-[#F6E7E0]" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-[#F6E7E0] pb-6">
              <div className="p-6">
                <div className="flex justify-end">
                  <button
                    className="group relative flex h-11 w-11 items-center justify-center text-[#532826]"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
                    <XMarkIcon className="relative h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125" />
                  </button>
                </div>

                <nav className="flex flex-col divide-y divide-[#532826]">
                  <div className="py-2">
                    <p className="font-portland text-2xl font-bold uppercase text-[#532826]">
                      Shop
                    </p>
                    <div className="flex flex-col">
                      <Link href="/shop/" className="font-portland uppercase text-[#532826]">
                        Shop all
                      </Link>
                      <Link
                        href="/shop/tortillas"
                        className="font-portland uppercase text-[#532826]"
                      >
                        Tortillas
                      </Link>
                      <Link href="/shop/sauces" className="font-portland uppercase text-[#532826]">
                        Sauces
                      </Link>
                      <Link href="/shop/bundles" className="font-portland uppercase text-[#532826]">
                        Bundles
                      </Link>
                    </div>
                  </div>
                  <Link
                    href="/"
                    className="py-2 font-portland text-2xl font-bold uppercase text-[#532826]"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    className="py-2 font-portland text-2xl font-bold uppercase text-[#532826]"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/"
                    className="py-2 font-portland text-2xl font-bold uppercase text-[#532826]"
                  >
                    Find in Store
                  </Link>
                </nav>
              </div>
              <div className="mt-auto flex flex-col items-center space-y-2">
                <SocialMenu classname="text-[#532826] justify-center w-full" />
                <a
                  href="mailto:nanufoodsllc@gmail.com"
                  className="font-portland text-lg  font-bold text-[#532826]"
                >
                  nanufoodsllc@gmail.com
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
