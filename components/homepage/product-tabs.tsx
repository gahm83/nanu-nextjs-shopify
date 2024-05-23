'use client';
import { Product } from '@/lib/shopify/types';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ProductCarousel from './product-carousel';

function ProductTabs() {
  const [slide, setSlide] = useState('tortillas');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('/api/products', { collection: 'tortillas' });
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <div className="relative py-16">
        <div className="grid w-full grid-cols-[37.5%_62.5%]">
          <div className="relative col-start-2">
            <div className="absolute inset-y-0 -left-8 w-[390px] -translate-x-full [&_button]:text-black">
              <div className="mb-5 flex items-center justify-between space-x-8">
                <button
                  onClick={() => setSlide('tortillas')}
                  className={clsx(
                    'relative w-6/12 border-b-2 border-[#532826] pb-5 text-center font-plam-canyon-drive text-5xl font-thin leading-[20px] text-[#532826]',
                    {
                      "before:absolute before:bottom-2 before:block before:h-4 before:w-full before:bg-[#8DC8E8] before:content-['']":
                        slide === 'tortillas'
                    }
                  )}
                >
                  <span className="relative">Tortillas</span>
                </button>
                <button
                  onClick={() => setSlide('salsas')}
                  className={clsx(
                    'relative w-6/12 border-b-2 border-[#532826] pb-5 text-center font-plam-canyon-drive text-5xl font-thin leading-[20px] text-[#532826]',
                    {
                      "before:absolute before:bottom-2 before:block before:h-4 before:w-full before:bg-[#8DC8E8] before:content-['']":
                        slide === 'salsas'
                    }
                  )}
                >
                  <span className="relative">Salsas</span>
                </button>
              </div>
              <h2 className="font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
                Nanu is your companion in every bite
              </h2>
            </div>
            <div className="aspect-video w-full">
              {/* {slide === "tortillas" && (
                <ul>
                  {productosTortillas.map((product, index) => <ProductCard product={product} key={index} />)}
                </ul>
              )}
              {slide === "salsas" && (
                <ul>
                  {productosSalsas.map((product, index) => <ProductCard product={product} key={index} />)}
                </ul>
              )} */}
              <ProductCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductTabs;