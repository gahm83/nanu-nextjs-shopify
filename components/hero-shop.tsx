import Image from 'next/image';

function HeroShop() {
  return (
    <section>
      <div className="pt-16">
        <div className="border-pyramid-top border-pyramid-bottom relative flex aspect-[3/1] w-full justify-center">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              src="/images/home/bg-banner.jpg"
              alt="Home is closer than you think"
              className="object-cover object-center"
              fill
            />
          </figure>
          <div className="relative flex w-11/12 max-w-screen-xl flex-grow items-center justify-center">
            <h2 className="mb-5 font-portland text-7xl uppercase text-white">
              Home is one bite away
            </h2>
            <div className="bg-button-hero bg-blue-circle absolute left-full top-full z-10 flex aspect-[1.09/1] w-[90px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#8DC8E8] bg-no-repeat font-portland font-bold uppercase text-[#532826] drop-shadow-md lg:w-[120px] lg:text-xl">
              <span className="-mb-2 block font-black">FIND IN</span>
              <span className="block text-xl font-black lg:text-2xl">STORE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
