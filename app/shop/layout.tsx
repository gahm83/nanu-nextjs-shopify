// 'use client';
// import Footer from 'components/layout/footer';
import Collections from 'components/layout/shop/collections';
// import { usePathname } from 'next/navigation';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  return (
    <>
      <div className="lg:w-[60%] lg:mx-auto py-28">
        <p className="font-portland font-black text-center text-2xl pb-8 text-[#532826] uppercase">Filter by</p>
        <Collections />
      </div>
      <div className="w-10/12 mx-auto lg:max-w-[1280px]">{children}</div>
      <div className="relative py-28 before:absolute before:top-10 before:left-1 before:right-1 before:block before:h-[5px] before:bg-border-wood before:bg-repeat-space before:content-['']">
        <div className="flex items-center">
        eaeaea
        </div>
      </div>
    </>
  );
}
