import HeroShop from '@/components/hero-shop';
import { ShopByProduct } from '@/components/product/shop-by-product';
import Collections from 'components/layout/shop/collections';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroShop />
      <div className="mx-auto w-full pb-10 pt-12 lg:w-[60%] ">
        <p className="pb-8 text-center font-portland text-2xl font-black uppercase text-[#532826]">
          Filter by
        </p>
        <Collections />
      </div>
      <div className="mx-auto w-11/12 pb-16 lg:max-w-screen-xl">{children}</div>
      <ShopByProduct />
      {/* <div className="relative py-28 before:absolute before:left-1 before:right-1 before:top-10 before:block before:h-[5px] before:bg-border-wood before:bg-repeat-space before:content-['']">
      </div> */}
    </>
  );
}
