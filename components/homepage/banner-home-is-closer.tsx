import Image from 'next/image';

function BannerHomeIsCloser() {
  return (
    <section>
      <div className="py-16">
        <div className="border-pyramid-top border-pyramid-bottom relative flex aspect-[3/1] w-full items-center justify-center">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              src="/images/home/bg-banner.jpg"
              alt="Home is closer than you think"
              className="object-cover object-center"
              fill
            />
          </figure>
          <div className="relative w-11/12 max-w-screen-xl">
            <div className="grid grid-cols-2">
              <div className="relative col-start-2">
                <h2 className="mb-5 font-portland text-7xl uppercase text-white">
                  Home is closer than you think
                </h2>
                <div className="flex items-center justify-start">
                  <a
                    href="#"
                    className="block border-2 border-solid border-[#8DC8E8] bg-[#8DC8E8] py-4 text-center font-portland text-lg font-black uppercase text-[#532826] transition-all duration-150 hover:bg-transparent hover:text-[#8DC8E8] lg:py-2"
                  >
                    Find Nanu Near You
                  </a>
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
