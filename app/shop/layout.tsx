import HeroShop from '@/components/hero-shop';
import { ShopByProduct } from '@/components/product/shop-by-product';
import { getPage } from '@/lib/shopify';
import { HeroBanner } from '@/lib/shopify/types';
import Collections from 'components/layout/shop/collections';

export default async function SearchLayout({ children }: { children: React.ReactNode }) {
  const page = await getPage('shop');

  const heroBanner: HeroBanner = {
    image: {
      src:
        page.hero_banner.reference.fields.find((field) => field.key === 'image')?.reference?.image
          ?.src || '',
      width:
        page.hero_banner.reference.fields.find((field) => field.key === 'image')?.reference?.image
          ?.width || 0,
      height:
        page.hero_banner.reference.fields.find((field) => field.key === 'image')?.reference?.image
          ?.height || 0
    },
    title: page.hero_banner.reference.fields.find((field) => field.key === 'title')?.value || ''
  };

  return (
    <>
      <HeroShop data={heroBanner} />
      <div className="mx-auto w-full pb-10 pt-12 lg:w-[60%] ">
        <p className="pb-8 text-center font-portland text-2xl font-black uppercase text-[#532826]">
          Filter by
        </p>
        <Collections />
      </div>
      <div className="mx-auto w-11/12 pb-16 lg:max-w-screen-xl">{children}</div>
      <ShopByProduct />
    </>
  );
}
