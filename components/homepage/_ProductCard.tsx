import Image from 'next/image';

// Define the LocalProduct type
type LocalProduct = {
  id: number;
  title: string;
  image: string;
  category: string;
  description: string;
  shortDescription: string;
  stars: string;
  numberReviews: string;
  price: number;
  quantity: string;
  weight: string;
  stock: number;
};

export function ProductCard({ product }: { product: LocalProduct }) {
  return (
    <div className="relative flex flex-col items-center justify-stretch">
      <figure>
        <Image src={product.image} width={405} height={500} alt={product.title} />
      </figure>
      <div className="relative mt-2 w-full pt-5 before:absolute before:inset-x-0 before:top-0 before:block before:h-[5px] before:bg-border-sky before:bg-repeat-space before:content-['']">
        <h2 className="font-portland text-2xl font-semibold uppercase text-[#532826]">
          {product.title}
        </h2>
        <div className="flex items-center">
          <p className="font-athiti text-lg font-medium leading-none text-[#532826]">
            {product.description}
          </p>
          <p className="me-5 flex h-12 items-center justify-center border-2 border-[#532826] px-3 font-portland text-2xl uppercase leading-none text-[#532826]">
            ${Number(product.price).toString().replace(/\.0$/, '')}
          </p>
        </div>
      </div>
    </div>
  );
}
