'use client';
import Image from 'next/image';
import ShapeRomboid from '../svg/shape-romboid';

function NanusCookBook() {
  return (
    <section>
      <div className="relative py-16">
        <div className="max-w-full-xl mx-auto w-11/12">
          <h2 className="text-center font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Nanu's Cook Book
          </h2>
          <p className="text-center font-portland text-lg font-medium uppercase text-[#532826] lg:text-2xl">
            A few recipes from home to get you inspired
          </p>
          <div className="mt-12 overflow-hidden rounded-lg lg:grid lg:grid-cols-12">
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
            <div className="col-span-8 hidden lg:block">
              <figure className="relative aspect-square">
                <Image
                  src="/images/nanu-shrimp-tacos.jpg"
                  fill
                  alt="Nanu's Shrimp Tacos"
                  className="object-cover"
                />
                <button className="group absolute left-[36%] top-[22%] h-[80px] w-[80px] text-[#8DC8E8]">
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button className="group absolute left-[63%] top-[23%] h-[80px] w-[80px] text-[#8DC8E8]">
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button className="group absolute left-[52%] top-[50%] h-[80px] w-[80px] text-[#8DC8E8]">
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
                <button className="group absolute left-[27%] top-[40%] h-[80px] w-[80px] text-[#8DC8E8]">
                  <ShapeRomboid className="absolute inset-0 flex h-full w-full items-center justify-center [&>*:first-child]:absolute [&>*:first-child]:h-full [&>*:first-child]:w-full [&>*:first-child]:opacity-50 [&>*:last-child]:absolute [&>*:last-child]:h-[45px] [&>*:last-child]:w-[45px] ">
                    <ShapeRomboid />
                  </ShapeRomboid>
                </button>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NanusCookBook;
