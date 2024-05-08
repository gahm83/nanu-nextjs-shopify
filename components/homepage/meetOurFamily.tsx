import Image from 'next/image';
import Link from 'next/link';

const collectionItems = [
  {
    image: '/images/home/meet-our-family/shop-tortillas.jpg',
    title: 'Shop Tortillas'
  },
  {
    image: '/images/home/meet-our-family/shop-salsas.jpg',
    title: 'Shop Salsas'
  },
  {
    image: '/images/home/meet-our-family/shop-bundles.jpg',
    title: 'Shop Bundles'
  }
];

const MeetOurFamily = () => {
  return (
    <section>
      <div className="mx-auto w-10/12 py-[60px] lg:grid lg:max-w-[1280px] lg:auto-rows-max lg:grid-cols-2 lg:gap-10">
        <div className="flex items-center">
          <h2 className="font-portland text-5xl font-black uppercase text-[#532826]">
            Meet our Family
          </h2>
        </div>
        <div className="flex items-center justify-end space-x-6">
          <Link
            href="/productos"
            className="border-2 border-solid border-[#532826] bg-[#532826] px-10 py-4 font-portland text-lg font-black uppercase text-[#F6E7E0] lg:px-6 lg:py-2"
          >
            Shop all
          </Link>
          <Link
            href="#"
            className="border-2 border-solid border-[#532826] px-10 py-4 font-portland text-lg font-black uppercase text-[#532826] lg:px-6 lg:py-2"
          >
            Find in store
          </Link>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-2 lg:grid lg:grid-cols-3">
          {collectionItems &&
            collectionItems.map((item, index) => (
              <div
                className="after:bg-[auto 5px] relative flex flex-col items-stretch justify-around bg-[#EDD3C5] after:absolute after:bottom-10 after:left-10 after:right-10 after:block after:h-[5px] after:bg-border-wood after:bg-repeat-space after:content-['']"
                key={index}
              >
                <div className="relative z-10 -mb-[5rem] flex items-end justify-end pr-10 pt-14">
                  <a href="" className="right-10 top-14 block h-[80px] w-[80px]">
                    <Image
                      src="images/elements/go-to.svg"
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                  </a>
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
