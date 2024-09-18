import Grid from 'components/grid';
import { Product } from 'lib/shopify/types';
import { ProductCard } from '../grid/product-card';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <ProductCard product={product} />
        </Grid.Item>
      ))}
    </>
  );
}
