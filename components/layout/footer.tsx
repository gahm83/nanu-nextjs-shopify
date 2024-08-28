import Link from 'next/link';
import NewsletterForm from '../newsletter';
import Nanu from '../svg/nanu';
import SocialMenu from './social-menu';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  // const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="bg-[#532826] font-portland text-sm font-semibold">
      {/*  space-y-16 py-16 */}
      <div className="mx-auto w-11/12 space-y-9 pb-9 pt-14 lg:max-w-screen-xl lg:space-y-12 lg:pb-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mr-auto">
            <NewsletterForm />
          </div>
          <div className="mt-9 lg:order-last lg:ml-20 lg:mt-0 lg:flex lg:flex-col lg:justify-between">
            <SocialMenu classname="text-[#F6E7E0]" />
            <a>nanufoodsllc@gmail.com</a>
          </div>
          <nav className="mt-16 grid grid-cols-2 lg:mt-0 lg:gap-8">
            <div className="flex flex-col space-y-2">
              <Link href="/shop">SHOP</Link>
              <Link href="/about-us">ABOUT US</Link>
              <a>RECIPES</a>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/shop">FIND IN STORE</Link>
              <Link href="/faqs">FAQs</Link>
              <Link href="/contact-us">CONTACT US</Link>
            </div>
          </nav>
        </div>
        <div className="relative aspect-[3/1]">
          <Nanu />
        </div>
        <div className="grid-row-2 grid grid-cols-2 items-center justify-center gap-y-3 lg:flex lg:justify-between">
          <span className="col-span-2 row-start-2 place-self-center">
            © {currentYear} Nanu Herritage Foods
          </span>
          <Link href="/terms-and-conditions" className="place-self-center">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="place-self-center">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
