import FullWidthImage from '../full-width-image';

function JoinOurTable() {
  return (
    <section>
      <div className="relative overflow-x-hidden py-16">
        <div className="max-w-full-lg mx-auto w-11/12">
          <h2 className="font-portland text-3xl font-black uppercase text-[#532826] lg:text-4xl">
            Join our table
          </h2>
          <div className="mt-12 flex w-[75vw] items-start space-x-8">
            <FullWidthImage
              src="/images/home/banner/pic-01.png"
              alt="Picture 1"
              width={300}
              height={300}
              className="flex-[1_0_240px]"
            />
            <FullWidthImage
              src="/images/home/banner/pic-02.png"
              alt="Picture 2"
              width={300}
              height={534}
              className="flex-[1_0_240px]"
            />
            <FullWidthImage
              src="/images/home/banner/pic-03.png"
              alt="Picture 3"
              width={300}
              height={300}
              className="flex-[1_0_240px]"
            />
            <FullWidthImage
              src="/images/home/banner/pic-04.png"
              alt="Picture 4"
              width={300}
              height={300}
              className="flex-[1_0_240px]"
            />
            <FullWidthImage
              src="/images/home/banner/pic-05.png"
              alt="Picture 5"
              width={300}
              height={534}
              className="flex-[1_0_240px]"
            />
            <FullWidthImage
              src="/images/home/banner/pic-06.png"
              alt="Picture 6"
              width={300}
              height={300}
              className="flex-[1_0_240px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinOurTable;
