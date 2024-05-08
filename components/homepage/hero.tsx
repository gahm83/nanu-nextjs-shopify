import Image from 'next/image';

const cardItems = [
  {
    icon: '/images/home/hero/taste-of-home.svg',
    title: 'A taste of home',
    description:
      'We are your companion in every bite, providing heartfelt warmth no matter where you are.'
  },
  {
    icon: '/images/home/hero/unmatched-companion.svg',
    title: 'An unmatched companion',
    description:
      'For breakfast toast? Yup. For nachos? Yas! In tacos? Of course. Do your own thing!'
  },
  {
    icon: '/images/home/hero/happier-gut-life.svg',
    title: 'Happier gut, happier life',
    description: ' Gluten-free, low carb, made with natural ingredients and lots of love!'
  }
];

const ctoItems = [
  {
    classname: 'order-first',
    top: 'Shop',
    bottom: 'Now'
  },
  {
    classname: 'order-last',
    top: 'Find in',
    bottom: 'Store'
  }
];

const Hero = () => {
  return (
    <section>
      <div className="relative flex w-full flex-col justify-center before:bg-hero lg:before:bg-hero-desktop before:absolute before:inset-x-0 before:top-0 before:aspect-[1/2.4] before:w-full before:content-[''] lg:before:aspect-[1.44/1] lg:before:max-h-[1000px]">
        <div className="relative flex flex-grow flex-col items-center pb-20 pt-60">
          <figure className="flex items-center justify-center px-6">
            <Image
              src="/images/home/hero/title-mobile.svg"
              width={837}
              height={473}
              alt="Heritage"
              className="flex-grow-1 block drop-shadow-md lg:hidden"
            />
          </figure>
          <Image
            src="/images/home/hero/title-top.svg"
            width={447}
            height={110}
            alt="Heritage"
            className="mx-auto hidden drop-shadow-md lg:block"
          />
          <Image
            src="/images/home/hero/title-bottom.svg"
            width={760}
            height={153}
            alt="Friendly Foods"
            className="mx-auto -mt-9 hidden drop-shadow-md lg:block"
          />
          <div className="space-y-16">
            <h1 className="text-center font-portland text-2xl">
              <span className="text-shadow block">HONOR YOUR ROOTS,</span>
              <span className="text-shadow block">EMBRACE YOUR WELLNESS</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 lg:space-x-[60px]">
              {ctoItems &&
                ctoItems.map((cto, index) => (
                  <div
                    key={index}
                    className={`bg-sphere-mobile flex flex-col items-center justify-center bg-[#8DC8E8] bg-blue-circle bg-no-repeat ${cto.classname} aspect-[1.09/1] w-[90px] rounded-full font-portland font-bold uppercase text-[#532826] lg:w-[120px] lg:text-xl`}
                  >
                    <span className="block leading-none">{cto.top}</span>
                    <span className="block text-xl leading-none lg:text-2xl">{cto.bottom}</span>
                  </div>
                ))}
              <div className="relative order-2 mx-auto flex w-[80px] items-center justify-center lg:w-[120px]">
                <Image
                  src="/images/elements/dot-lg.png"
                  width={40}
                  height={40}
                  alt="Just a dot"
                  className="absolute left-0 h-3 w-3 lg:h-5 lg:w-5"
                />
                <Image
                  src="/images/elements/shape-lg.png"
                  width={40}
                  height={40}
                  alt="Just a shape"
                  className="h-6 w-6 lg:h-10 lg:w-10"
                />
                <Image
                  src="/images/elements/dot-lg.png"
                  width={40}
                  height={40}
                  alt="Just a dot"
                  className="absolute right-0 h-3 w-3 lg:h-5 lg:w-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="before:bg-[auto 6px] after:bg-[auto 5px] relative mx-auto flex w-[86vw] flex-col bg-[#532826] px-6 py-24 before:absolute before:left-6 before:right-6 before:top-10 before:block before:h-[6px] before:bg-border-sky before:bg-repeat-space before:content-[''] after:absolute after:bottom-10 after:left-6 after:right-6 after:block after:h-[5px] after:bg-border-sky after:bg-repeat-space after:content-[''] lg:max-w-[1120px] lg:px-24">
        <div className="grid gap-16 lg:grid-cols-3">
          {cardItems &&
            cardItems.map((item, index) => (
              <div key={index}>
                <figure className="flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} height={78} width={141} />
                </figure>
                <div className="mt-4 space-y-4 px-6 text-center">
                  <h2 className="mx-auto text-center font-portland text-2xl uppercase leading-none">
                    {item.title}
                  </h2>
                  <p className="leading-tight">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
