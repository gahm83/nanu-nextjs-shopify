'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
    description: 'Gluten-free, low carb, made with natural ingredients and lots of love!'
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
  // const navbar = useRef(null);
  // const container = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 60,
      end: 'bottom',
      scrub: true,
      toggleClass: { targets: '.navbar', className: 'sticky-navbar' }
    });

    const heroTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.hero-banner',
          start: 120,
          end: '75%',
          scrub: true,
          pin: true
        }
      })
      .set('.heritage, .friendlyFoods', { y: 100, opacity: 0 })
      .set('.hyr', { x: -100, opacity: 0 })
      .set('.eyw', { x: 100, opacity: 0 })
      .set('.shapes', { width: 40 })
      .set('.rombo-1', { rotate: -45, scale: 0 })
      .set('.rombo-2', { rotate: 45, scale: 0 })
      .set('.snowflake', { opacity: 0 })
      .set('.button-1', { opacity: 0, scale: 0, x: 100 })
      .set('.button-2', { opacity: 0, scale: 0, x: -100 })
      .to('.heritage', { y: 0, opacity: 1 }, 3)
      .to('.friendlyFoods', { y: 0, opacity: 1 }, '<50%')
      .to('.hyr', { x: 1, opacity: 100 }, '<50%')
      .to('.eyw', { x: 0, opacity: 100 }, '<50%')
      .to('.shapes', { width: 120 })
      .to('.rombo-1', { rotate: 0, scale: 1 }, '<')
      .to('.rombo-2', { rotate: 0, scale: 1 }, '<')
      .to('.snowflake', { opacity: 1 })
      .to('.button-1', { opacity: 1, scale: 1, x: 0 })
      .to('.button-2', { opacity: 1, scale: 1, x: 0 })
      .to('.logo-full', { y: -100 })
      .to('.logo-full', { height: 0 }, '<')
      .to('.logo-nanu', { height: 38 }, '<')
      .to('.navbar-wrapper', { backgroundColor: '#532826' });

    // freeShippingTL.to('.free-shipping-banner', { height: 0 });

    // if (container.current) {
    // const tl = gsap
    // .timeline()
    // .set('.heritage, .friendlyFoods', { y: 100, opacity: 0 })
    // .set('.hyr', { x: -100, opacity: 0 })
    // .set('.eyw', { x: 100, opacity: 0 })
    // .set('.shapes', { width: 40 })
    // .set('.rombo-1', { rotate: -45, scale: 0 })
    // .set('.rombo-2', { rotate: 45, scale: 0 })
    // .set('.snowflake', { opacity: 0 })
    // .set('.button-1', { opacity: 0, scale: 0, x: 100 })
    // .set('.button-2', { opacity: 0, scale: 0, x: -100 })
    // .to('.heritage', { y: 0, opacity: 1 }, 3)
    // .to('.friendlyFoods', { y: 0, opacity: 1 }, '<50%')
    // .to('.hyr', { x: 1, opacity: 100 }, '<50%')
    // .to('.eyw', { x: 0, opacity: 100 }, '<50%')
    // .to('.shapes', { width: 120 })
    // .to('.rombo-1', { rotate: 0, scale: 1 }, '<')
    // .to('.rombo-2', { rotate: 0, scale: 1 }, '<')
    // .to('.snowflake', { opacity: 1 })
    // .to('.button-1', { opacity: 1, scale: 1, x: 0 })
    // .to('.button-2', { opacity: 1, scale: 1, x: 0 });

    // .fromTo('.snowflake', { width: 40, opacity: 0 }, { x: 0, opacity: 100 })
    // .fromTo('.button-1', { x: 60, scale: 0.7, opacity: 0 }, { x: 0, scale: 1, opacity: 100 })
    // .fromTo(
    //   '.button-2',
    //   { x: -60, scale: 0.7, opacity: 0 },
    //   { x: 0, scale: 1, opacity: 100 },
    //   '<'
    // );
    // }
  });

  return (
    <div className="hero-banner">
      <div className="before:bg-hero relative flex w-full flex-col justify-center before:absolute before:inset-x-0 before:top-0 before:aspect-[1/2.4] before:w-full before:content-[''] lg:before:aspect-[1.44/1] lg:before:max-h-[1200px]">
        <div className="relative flex flex-grow flex-col items-center pb-24 pt-[24vw]">
          <figure className="flex items-center justify-center px-6">
            <Image
              src="/images/home/hero/title-mobile.svg"
              width={837}
              height={473}
              alt="Heritage"
              className="flex-grow-1 drop-drop-shadow-md block lg:hidden"
            />
          </figure>
          <Image
            src="/images/home/hero/title-top.svg"
            width={447}
            height={110}
            alt="Heritage"
            className="heritage mx-auto hidden drop-shadow-lg lg:block"
          />
          <Image
            src="/images/home/hero/title-bottom.svg"
            width={760}
            height={153}
            alt="Friendly Foods"
            className="friendlyFoods drop-drop-shadow-md mx-auto -mt-9 hidden opacity-0 lg:block"
          />
          <div className="-mt-6 space-y-16">
            <h1 className="text-center font-portland text-2xl">
              <span className="hyr font-semibild text-shadow block">HONOR YOUR ROOTS,</span>
              <span className="eyw font-semibild text-shadow block">EMBRACE YOUR WELLNESS</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 lg:space-x-[60px]">
              {ctoItems &&
                ctoItems.map((cto, index) => (
                  <div
                    key={index}
                    className={`bg-button-hero bg-blue-circle flex flex-col items-center justify-center bg-[#8DC8E8] bg-no-repeat ${cto.classname} aspect-[1.09/1] w-[90px] rounded-full font-portland font-bold uppercase text-[#532826] lg:w-[120px] lg:text-xl button-${index + 1} drop-shadow-md`}
                  >
                    <span className="-mb-2 block font-black">{cto.top}</span>
                    <span className="block text-xl font-black lg:text-2xl">{cto.bottom}</span>
                  </div>
                ))}
              <div className="shapes relative order-2 mx-auto flex w-[40px] items-center justify-center lg:w-[120px]">
                <Image
                  src="/images/dot-lg.png"
                  width={80}
                  height={80}
                  alt="Just a dot"
                  className="rombo-1 absolute left-0 h-3 w-3 drop-shadow-md lg:h-5 lg:w-5"
                />
                <Image
                  src="/images/snowflake-blue.svg"
                  width={80}
                  height={80}
                  alt="Just a shape"
                  className="snowflake h-6 w-6 drop-shadow-md lg:h-10 lg:w-10"
                />
                <Image
                  src="/images/dot-lg.png"
                  width={80}
                  height={80}
                  alt="Just a dot"
                  className="rombo-2 absolute right-0 h-3 w-3 drop-shadow-md lg:h-5 lg:w-5"
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
    </div>
  );
};

export default Hero;
