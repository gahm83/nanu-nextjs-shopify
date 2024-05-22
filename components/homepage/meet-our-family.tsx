import Image from 'next/image';
import Link from 'next/link';
import GoToIcon from '../icons/go-to';

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
                  <Link href={item.url} className="right-10 top-14 block h-[80px] w-[80px]">
                    <GoToIcon />
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
