import Image from 'next/image';

function HeroShop() {
  return (
    <section>
      <div className="border-pyramid-bottom relative flex w-full items-center justify-center">
        <figure className="absolute inset-0 h-full w-full">
          <Image
            src="/images/home/bg-banner.jpg"
            alt="Home is closer than you think"
            className="object-cover object-center"
            fill
          />
        </figure>
        <div className="relative w-9/12 max-w-screen-xl pb-[12vw] pt-[32vw] lg:w-11/12 lg:pb-[8vw] lg:pt-[16vw]">
          <h2 className="font-portland text-5xl uppercase leading-snug text-white lg:text-7xl">
            Home is one bite away
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroShop;
