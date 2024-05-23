import Image from 'next/image';
import Link from 'next/link';

const collectionItems = [
  {
    url: '/shop/tortillas',
    image: '/images/home/meet-our-family/shop-tortillas.jpg',
    title: 'Shop Tortillas'
  },
  {
    url: '/shop/sauces',
    image: '/images/home/meet-our-family/shop-salsas.jpg',
    title: 'Shop Salsas'
  },
  {
    url: '/shop/bundles',
    image: '/images/home/meet-our-family/shop-bundles.jpg',
    title: 'Shop Bundles'
  }
];

const MeetOurFamily = () => {
  return (
    <section>
      <div className="mx-auto flex w-11/12 flex-col py-24 lg:grid lg:max-w-screen-xl lg:auto-rows-max lg:grid-cols-6 lg:gap-8">
        <div className="flex items-center pb-4 lg:col-span-3">
          <h2 className="font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Meet our Family
          </h2>
        </div>
        <div className="order-last mt-5 flex items-center justify-end space-x-5 lg:col-span-3 lg:col-start-4 lg:row-start-1 lg:mt-0 lg:space-x-6">
          <Link
            href="/shop"
            className="min-w-48 border-2 border-solid border-[#532826] bg-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#F6E7E0] max-lg:flex-grow lg:px-6 lg:py-2"
          >
            Shop all
          </Link>
          <Link
            href="#"
            className="min-w-48 border-2 border-solid border-[#532826] py-4 text-center font-portland text-lg font-black uppercase text-[#532826] max-lg:flex-grow lg:px-6 lg:py-2"
          >
            Find in store
          </Link>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-6 lg:grid lg:grid-cols-3">
          {collectionItems &&
            collectionItems.map((item, index) => (
              <div
                className="group/productcard after:bg-[auto 5px] relative flex flex-col items-stretch justify-around bg-[#EDD3C5] after:absolute after:bottom-10 after:left-10 after:right-10 after:block after:h-[5px] after:bg-border-wood after:bg-repeat-space after:content-['']"
                key={index}
              >
                <div className="relative z-10 -mb-[5rem] flex items-end justify-end pr-10 pt-14">
                  <Link
                    href={item.url}
                    className="group relative flex h-[80px] w-[80px] items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={80}
                      height={80}
                      fill="none"
                      className="absolute origin-center group-hover:animate-spin-slow"
                    >
                      <path
                        fill="#8DC8E8"
                        d="M69.368 25.77c4.994-12.325-2.812-20.135-15.137-15.137-1.369.554-2.956-.073-3.53-1.434-5.18-12.265-16.222-12.265-21.402 0-.575 1.36-2.161 1.988-3.53 1.434C13.444 5.638 5.635 13.444 10.632 25.77c.554 1.368-.072 2.955-1.433 3.53-12.265 5.18-12.265 16.222 0 21.402 1.36.575 1.987 2.162 1.433 3.53-4.994 12.325 2.812 20.135 15.137 15.137 1.369-.554 2.956.073 3.53 1.434 5.18 12.263 16.222 12.263 21.402 0 .575-1.36 2.161-1.988 3.53-1.434 12.325 4.995 20.134-2.812 15.137-15.137-.554-1.368.073-2.955 1.433-3.53 12.265-5.18 12.265-16.222 0-21.402-1.36-.575-1.987-2.162-1.433-3.53Z"
                        className="group-hover/product-card:animate-[spin_3s_ease-in-out_infinite]] origin-center"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={80}
                      height={80}
                      fill="none"
                      className="absolute"
                    >
                      <path
                        fill="#532826"
                        d="M46.674 35.68 32.353 50.002 30 47.649l14.321-14.321H31.697V30H50v18.303h-3.328l.002-12.622Z"
                      />
                    </svg>
                  </Link>
                </div>
                <figure className="relative aspect-square">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={512}
                    height={512}
                    className="absolute inset-0 h-full w-full"
                  />
                </figure>
                <div className="px-10 pb-14">
                  <h2 className="font-portland text-4xl font-semibold uppercase text-[#532826]">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurFamily;
