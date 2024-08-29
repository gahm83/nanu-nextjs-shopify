import { getMenu } from '@/lib/shopify';
import Link from 'next/link';
import NewsletterForm from '../newsletter';
import Nanu from '../svg/nanu';
import SocialMenu from './social-menu';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const social = await getMenu('social-menu');

  const currentYear = new Date().getFullYear();
  // const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  // const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  // const menu = await getMenu('next-js-frontend-footer-menu');
  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  const emailTo = social.filter((item) => item.title === 'Email')[0]?.path;

  return (
    <footer className="bg-[#532826] font-portland text-sm font-semibold">
      <div className="mx-auto w-11/12 space-y-9 pb-9 pt-14 lg:max-w-screen-xl lg:space-y-12 lg:pb-12 lg:pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:mr-auto">
            <NewsletterForm />
          </div>
          <div className="mt-9 lg:order-last lg:ml-20 lg:mt-0 lg:flex lg:flex-col lg:space-y-4">
            <SocialMenu menu={social} classname="[&_a_svg]:fill-[#F6E7E0]" />
            {emailTo && (
              <a href={emailTo} rel="noreferrer" target="_blank">
                {emailTo?.split(':')[1]}
              </a>
            )}
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
            © {currentYear} | {copyrightName}
          </span>
          <Link href="/terms-conditions" className="place-self-center">
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
