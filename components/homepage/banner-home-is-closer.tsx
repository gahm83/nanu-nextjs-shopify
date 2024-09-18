import { Banner } from '@/lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import ShapeRomboid from '../svg/shape-romboid';
import ShapeSnowflake from '../svg/shape-snowflake';

function BannerHomeIsCloser({ data }: { data: Banner }) {
  console.log(data);
  return (
    <section>
      <div className="py-8 lg:py-16">
        <div className="border-pyramid-top border-pyramid-bottom relative flex w-full items-center justify-center">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              src={data.image.src}
              alt={data.cta.link}
              width={data.image.width}
              height={data.image.height}
              className="h-full w-full object-cover object-center"
            />
          </figure>
          <div className="max-w-full-lg relative w-9/12 py-[24vw] md:py-[12vw] lg:w-11/12">
            <div className="lg:grid lg:grid-cols-2">
              <div className="relative lg:col-start-2">
                <ShapeSnowflake className="absolute left-[-60px] top-[-60px] h-[20px] w-[20px] text-[#8DC8E8] lg:h-[40px] lg:w-[40px] [&_svg]:animate-blink-4" />
                <ShapeRomboid className="absolute left-[-10%] top-[10%] h-[10px] w-[10px] text-[#8DC8E8] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-2" />
                <ShapeRomboid className="absolute left-[10%] top-[-20%] h-[10px] w-[10px] text-[#8DC8E8] lg:h-[20px] lg:w-[20px] [&_svg]:animate-blink-1" />
                <h2 className="mb-5 font-portland text-4xl uppercase leading-snug text-white lg:text-7xl">
                  {data.title}
                </h2>
                <div className="flex items-center justify-start">
                  <Link
                    href={`/${data.cta.url}`}
                    className="block border-2 border-solid border-[#8DC8E8] bg-[#8DC8E8] px-6 py-4 text-center font-portland text-lg font-black uppercase text-[#532826] transition-all duration-150 hover:bg-transparent hover:text-[#8DC8E8] lg:py-2"
                  >
                    {data.cta.link}
                  </Link>
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
