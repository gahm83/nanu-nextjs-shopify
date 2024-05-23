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
                <Image
                  src="/images/snowflake-blue.svg"
                  alt="Honor your roots"
                  width={40}
                  height={40}
                  className="blink-1 absolute left-[-60px] top-[-60px] h-[1.96vw] w-[1.96vw]"
                />
                <Image
                  src="/images/square-sky.svg"
                  alt="Honor your roots"
                  width={20}
                  height={20}
                  className="blink-3 absolute left-[-10%] top-[10%] h-[1vw] w-[1vw]"
                />
                <Image
                  src="/images/square-sky.svg"
                  alt="Honor your roots"
                  width={20}
                  height={20}
                  className="blink-2 absolute left-[10%] top-[-20%] h-[1vw] w-[1vw]"
                />
                <h2 className="mb-5 font-portland text-7xl uppercase text-white">
                  Home is closer than you think
                </h2>
                <div className="flex items-center justify-start">
                  <a
                    href="#"
                    className="block border-2 border-solid border-[#8DC8E8] bg-[#8DC8E8] px-6 py-4 text-center font-portland text-lg font-black uppercase text-[#532826] transition-all duration-150 hover:bg-transparent hover:text-[#8DC8E8] lg:py-2"
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
