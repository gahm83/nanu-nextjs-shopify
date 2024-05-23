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
      <div className="py-16">
        <div className="border-pyramid-top border-pyramid-bottom relative flex aspect-[3/1] w-full items-center justify-center">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              src="/images/home/bg-banner.jpg"
              alt="Home is closer than you think"
              className="object-cover object-center"
              fill
            />
          </figure>
          <div className="relative w-11/12 max-w-screen-xl">
            <div className="grid grid-cols-2">
              <div className="col-start-2">
                <h2 className="mb-5 font-athiti text-7xl uppercase text-white">
                  Home is closer than you think
                </h2>
                <div className="flex items-center justify-start">
                  <a
                    href="#"
                    className="block border-2 border-solid border-[#8DC8E8] bg-[#8DC8E8] py-4 text-center font-portland text-lg font-black uppercase text-[#532826] transition-all duration-150 hover:bg-transparent hover:text-[#8DC8E8] lg:py-2"
                  >
                    Find Nanu Near You
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHomeIsCloser;
