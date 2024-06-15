// export async function generateMetadata({
//   params
// }: {
//   params: { page: string };
// }): Promise<Metadata> {
//   const page = await getPage(params.page);

//   if (!page) return notFound();

//   return {
//     title: page.seo?.title || page.title,
//     description: page.seo?.description || page.bodySummary,
//     openGraph: {
//       publishedTime: page.createdAt,
//       modifiedTime: page.updatedAt,
//       type: 'article'
//     }
//   };
// }
import Image from 'next/image';

export default async function Page({ params }: { params: { page: string } }) {
  // const page = await getPage(params.page);

  // if (!page) return notFound();

  return (
    <>
      <section>
        <div className="border-pyramid-bottom relative max-lg:h-[110vw] max-lg:max-h-[600px]">
          <img
            src="/images/hero-about.jpg"
            alt="About Us"
            width={1440}
            height={720}
            className="block w-full object-cover object-center max-lg:absolute max-lg:inset-0 max-lg:h-full"
          />
        </div>
      </section>
      <section>
        <div className="mx-auto w-10/12 max-w-[800px] pb-24">
          <div className="border-bottom-sky-lg relative my-14 px-10 py-14 text-center">
            <h2 className="font-portland text-4xl font-bold uppercase text-[#532826] md:text-5xl">
              The pursuit of Happiness
            </h2>
          </div>
          <div className="space-y-5 text-justify text-xl font-medium text-[#532826]">
            <p>
              In a world full of diet trends, harmful images of what our bodies should look like,
              and confusing health advice, I, like many, fell victim to the chaos. For the last 10
              years, I tried numerous diets—keto, raw vegan, carnivore, and more—all ending in yet
              another failed attempt to look and feel my best. Moreover, I noticed that these diets
              often made me miss out on my cultural foods, especially during our family’s Sunday
              dinners filled with salsas and tortillas.
            </p>
            <p>
              I no longer wanted to miss out on carne asada tacos, quesadillas, enchiladas, and
              chilaquiles (and yes… do we see a pattern? Lots of Mexican dishes incorporate
              tortillas!). <br /> Determined not to miss out, I tried supermarket “healthy
              tortillas” made from various flours. To my disappointment, they all had one thing in
              common: they lacked taste and broke as soon as you put food in them. Like, c’mon…
              you’d think they would accomplish the sole purpose of a tortilla, right?
            </p>
            <p>
              What started as a disappointment led me to take my shot at making my own healthy
              tortillas. After all, I come from a family that has been making tortillas for more
              than 15 years!
            </p>
          </div>
          <div className="my-10 space-y-10 rounded-2xl bg-[#EDD3C5] py-10 text-center text-xl font-medium text-[#532826] lg:my-20 lg:py-20">
            <p>My goal was simple:</p>
            <p className="mx-auto font-portland text-2xl font-bold uppercase lg:max-w-[60%]">
              To make a tortilla that met these requirements:
            </p>
            <div className="space-y-5 font-plam-canyon-drive text-5xl font-normal">
              <p className="leading-[0.7] md:flex md:justify-center md:space-x-2">
                <span className="text-[#8DC8E8]">*</span>
                Sturdy yet soft and pliable
                <span className="text-[#8DC8E8]">*</span>
              </p>
              <p className="leading-[0.7] md:flex md:justify-center md:space-x-2">
                <span className="text-[#8DC8E8]">*</span>
                Subtle taste that never overpowers your food
                <span className="text-[#8DC8E8]">*</span>
              </p>
              <p className="leading-[0.7] md:flex md:justify-center md:space-x-2">
                <span className="text-[#8DC8E8]">*</span>
                Simple, clean ingredients
                <span className="text-[#8DC8E8]">*</span>
              </p>
              <p className="leading-[0.7] md:flex md:justify-center md:space-x-2">
                <span className="text-[#8DC8E8]">*</span>
                Easy to digest
                <span className="text-[#8DC8E8]">*</span>
              </p>
            </div>
          </div>
          <div className="space-y-5 text-justify text-xl text-[#532826]">
            <p>
              Oh, and lastly, that it''s not so far removed from a tortilla (yes, I'm talking to you
              lettuce, egg, and cheese wraps!).
            </p>
            <p>
              I blended oats, water, and salt to create a sturdy, soft, and subtly flavored tortilla
              with simple, clean ingredients.
            </p>
            <p>
              My parents, always supportive and willing to try my creations, loved my tortillas. We
              worked many &ldquo;after hours&rdquo; in the kitchen. *Gets flashbacks of working till
              1am.* However, through so much trial and error, we perfected our oat tortilla.
            </p>
            <p>
              It wouldn''t be a passion project without me obsessing over ways to complicate
              it&hellip; so we got to work on a pink and green tortilla! Because how cool is it to
              eat colorful tacos? We even created a multigrain version perfect for tostadas, chips,
              or nachos.
            </p>
            <p>
              Testing our products at farmers markets proved successful, and we decided to expand.
              <br /> Now, do you remember the second thing we always have on our table? Yes, salsas.
              <br /> We introduced traditional salsas, some recipes over 40 years old, made with the
              best ingredients.
            </p>
            <p>
              On the happiest closing note, creating Nanu healed my relationship with food and my
              body. I will never &ldquo;diet&rdquo; again, I simply focus on eating clean,
              unprocessed foods.
              <br /> At Nanu, we believe food is one of the main components of our cultures; it's
              how we stay close to the ones we love. Nanu is for all those people who don't want to
              give up their culture to have a healthy lifestyle.
            </p>
            <p>
              I'm excited to share this journey to bring our cultural classics back into a
              health-conscious lifestyle. Whether it's chamoy, chilito, tamales, or bu&ntilde;uelos,
              you'll never have to give up your culture again.
            </p>
          </div>
          <figure className="flex flex-col items-center justify-center py-20">
            <Image
              src="/images/fernanda-diaz.png"
              alt="Fernanda Díaz"
              width={480}
              height={480}
              className="w-1/2 max-w-[480px]"
            />
          </figure>
          <h2 className="text-center font-portland text-2xl font-bold uppercase text-[#532826]">
            Feranda Díaz
          </h2>
          <p className="text-center font-plam-canyon-drive text-5xl font-normal text-[#532826]">
            Nanu's Founder
          </p>
        </div>
      </section>
    </>
  );
}
