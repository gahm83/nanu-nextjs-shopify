'use client';
import { Product } from '@/lib/shopify/types';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ProductCarousel from './product-carousel';

function ProductTabs() {
  const [slide, setSlide] = useState('tortillas');
  const [tortillas, setTortillas] = useState<Product[]>([]);
  const [salsas, setSalsas] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchTortillas = axios.post('/api/products', { collection: 'tortillas' });
        const fetchSalsas = axios.post('/api/products', { collection: 'sauces' });
        const [tortillasResponse, salsasResponse] = await Promise.all([
          fetchTortillas,
          fetchSalsas
        ]);
        setTortillas(tortillasResponse.data?.products);
        setSalsas(salsasResponse.data?.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section>
      <div className="companion-in-every-bite relative py-16">
        <div className="w-full lg:grid lg:grid-cols-[37.5%_62.5%]">
          <div className="relative lg:col-start-2">
            <div className="max-lg:mx-auto max-lg:w-11/12 lg:absolute lg:inset-y-0 lg:-left-8 lg:w-[28.1271vw] lg:max-w-[405.33px] lg:-translate-x-full [&_button]:text-black">
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
            <div className="relative w-full max-lg:mt-5 max-lg:pl-[4.1666665%]">
              <ProductCarousel products={slide === 'tortillas' ? tortillas : salsas} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductTabs;
