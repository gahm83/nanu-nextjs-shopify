import Image from 'next/image';

const WeHateLettuceTacos = () => {
  return (
    <section>
      <div className="mx-auto w-10/12 py-[60px] lg:max-w-[1280px]">
        <h2 className="flex flex-col items-center font-portland text-[8vw] uppercase leading-tight text-[#532826] lg:text-[5vw]">
          <div className="relative">
            <span>We hate </span>
            <figure className="absolute left-full top-1/2 z-[1] aspect-square w-[15vw] translate-x-[40%] translate-y-[-50%] md:w-[10vw]">
              <Image src="/images/home/benefits/gluten-free.svg" fill={true} alt="Gluten free!" />
            </figure>
          </div>
          <div className="relative">
            <span>our tacos on a </span>
            <figure className="absolute right-full top-1/2 z-[1] aspect-square w-[16vw] translate-x-[15%] translate-y-[-40%] lg:w-[11vw]">
              <Image src="/images/home/benefits/100-vegan.svg" fill={true} alt="100% Vegan" />
            </figure>
          </div>
          <div className="relative">
            <span>lettuce wrap, </span>
          </div>
          <div className="relative">
            <span>so we crafted </span>
            <figure className="absolute left-full top-[60%] z-[1] aspect-[1.77/1] w-[21vw] translate-x-[-30%] -rotate-[15deg] lg:top-full lg:w-[14vw] lg:translate-x-[-50%]">
              <Image src="/images/home/benefits/women-owned.svg" fill={true} alt="Women Owned" />
            </figure>
          </div>
          <div className="relative">
            <span>heritage </span>
          </div>
          <div className="relative">
            <span>friendly foods </span>
          </div>
          <div className="relative">
            <span>to suit every </span>
            <figure className="l-0 absolute z-[1] aspect-[0.77/1] w-[13vw] translate-x-[-120%] translate-y-[-50%] -rotate-[13deg] lg:w-[8vw]">
              <Image
                src="/images/home/benefits/made-with-few-ingredients.svg"
                fill={true}
                alt="Made with few ingredients"
              />
            </figure>
          </div>
          <div className="relative">
            <span>lifestyle</span>
            <figure className="absolute right-0 z-[1] aspect-square w-[18vw] translate-x-[130%] translate-y-[-50%] -rotate-[14deg] lg:w-[11vw]">
              <Image
                src="/images/home/benefits/honor-your-roots.svg"
                fill={true}
                alt="Honor your roots"
              />
            </figure>
          </div>
        </h2>
      </div>
    </section>
  );
};

export default WeHateLettuceTacos;
