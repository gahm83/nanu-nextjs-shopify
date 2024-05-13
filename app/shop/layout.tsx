// 'use client';
// import Footer from 'components/layout/footer';
import Collections from 'components/layout/shop/collections';
// import { usePathname } from 'next/navigation';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  // const pathname = usePathname();
  return (
    <>
      <div className="w-full py-9 lg:mx-auto lg:w-[60%] lg:py-28">
        <p className="pb-8 text-center font-portland text-2xl font-black uppercase text-[#532826]">
          Filter by
        </p>
        <Collections />
      </div>
      <div className="mx-auto w-10/12 lg:max-w-[1280px]">{children}</div>
      <div className="relative py-28 before:absolute before:left-1 before:right-1 before:top-10 before:block before:h-[5px] before:bg-border-wood before:bg-repeat-space before:content-['']">
        <div className="flex items-center">eaeaea</div>
      </div>
    </>
  );
}
