'use client';
import { Product } from '@/lib/shopify/types';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function BannerHomeIsCloser() {
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
        <div className="mx-auto w-11/12 max-w-screen-xl">
          <h2 className="text-center font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Nanu's Cook Book
          </h2>
          <p className="text-center font-athiti text-2xl font-bold uppercase text-[#532826]">
            A few recipes from home to get you inspired
          </p>
          <div className="mt-12 grid grid-cols-12 overflow-hidden rounded-lg">
            <div className="col-span-4 flex bg-[#532826] p-8">
              <div className="relative py-5">
                <div className="border-top-sky border-bottom-sky">
                  <h2 className="font-portland text-3xl font-black uppercase leading-none tracking-tighter text-[#F6E7E0]">
                    Nanu's Shrimp Tacos
                  </h2>
                  <p className="text-xl font-medium leading-none text-[#F6E7E0]">
                    Place shrimps into your favorite tortilla and drizzle with our Chilli & Oil
                    sauce. (Fit up to 4 lines of text)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <figure className="relative aspect-square">
                <Image
                  src="/images/nanu-shrimp-tacos.jpg"
                  fill
                  alt="Nanu's Shrimp Tacos"
                  className="object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHomeIsCloser;
