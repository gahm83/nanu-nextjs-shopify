import HeroShop from '@/components/hero-shop';
import { ShopByProduct } from '@/components/product/shop-by-product';
import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import Collections from 'components/layout/shop/collections';
import { defaultSort, sorting } from 'lib/constants';
import { getPage, getProducts } from 'lib/shopify';

export const metadata = {
  title: 'Shop',
  description: 'Search for products in the store.'
};

export default async function SearchPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const page = await getPage('shop');
  const resultsText = products.length > 1 ? 'results' : 'result';

  return (
    <>
      <HeroShop image={page.hero?.reference?.image} />
      <div className="mx-auto w-full pb-10 pt-12 lg:w-[60%] ">
        <p className="pb-8 text-center font-portland text-2xl font-black uppercase text-[#532826]">
          Filter by
        </p>
        <Collections />
      </div>
      <div className="mx-auto w-11/12 pb-16 lg:max-w-screen-xl">
        {searchValue ? (
          <p className="mb-4">
            {products.length === 0
              ? 'There are no products that match '
              : `Showing ${products.length} ${resultsText} for `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}
        {products.length > 0 ? (
          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </div>
      <ShopByProduct />
    </>
  );
}
