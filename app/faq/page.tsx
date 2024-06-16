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
import Accordion from '@/components/layout/accordion';
import Image from 'next/image';

const FAQItems = [
  {
    title: 'What does Nanu mean?',
    content: (
      <>
        <h2>
          <i>Nanu: the act of hugging oneself</i>
        </h2>
        <p>
          From one of the mother tongues of Mexico, Nanu is a name that embraces and pays homage to
          the origins of the tortilla. It represents the act of embracing oneself through foods that
          warm our hearts and fill our stomachs.
        </p>
      </>
    )
  },
  {
    title: 'How do I heat Nanu’s Tortillas?',
    content: (
      <>
        <p>
          The KEY to a soft and resilient tortilla is found in how you heat it! following these
          instructions will guarantee consistent awesome tortillas. This method works for cold
          tortillas from the refrigerator and even tortillas taken straight from the freezer!
        </p>
        <p>Here are our simple instructions to make your Nanu Tortillas excellent every time:</p>
        <ol>
          <li>Preheat a dry (ungreased) griddle or pan over medium heat. </li>
          <li>Once the pan is hot, place the tortilla on the hot surface.</li>
          <li>Heat on the first side until the tortilla for about 30 seconds. </li>
          <li>
            Flip it, and heat the other side for another 15-20 seconds until the tortilla is soft
            and warm.{' '}
          </li>
          <li>
            Serve immediately or place the hot tortilla into a tortilla warmer (or wrap in a clean
            dish towel) if you are heating multiple tortillas.
          </li>
        </ol>
      </>
    )
  },
  {
    title: 'My Nanu Tortillas arrived with a melted ice pack. Are they still okay to eat?',
    content: (
      <>
        <p>
          100% yes! All of our tortillas safe to consume even if they arrive at room temperature or
          with a melted ice pack. Please refrigerate upon arrival (for up to two weeks) or freeze
          (for up to six months).
        </p>
      </>
    )
  },
  {
    title: 'Can I freeze Nanu’s tortillas?',
    content: (
      <>
        <p>
          Yes! Our Tortillas maintain their quality, texture, and flavor when stored in the freezer.
          You can even heat them immediately after removing them from the freezer.
        </p>
      </>
    )
  },
  {
    title: 'How long do Nanu’s Tortillas last?',
    content: (
      <>
        <p>
          Our Tortillas are made without preservatives, so we use refrigeration (never harsh
          chemicals) to ensure that they maintain their freshness! Once you receive your tortillas,
          they will keep for up to two weeks in the refrigerator or up to six months in the freezer.
          To maintain freshness, remember to reseal the bag when you put it back in the fridge or
          freezer.
        </p>
        <p>* refrigerate upon arrival (for up to two weeks) or freeze (for up to six months).</p>
      </>
    )
  },
  {
    title: 'What are the ingredients in a Nanu Tortilla?',
    content: (
      <>
        <p>
          All our tortillas have the same 3 ingredient base: oats, water, and salt. <br />
          We will never add preservatives, seed oils, gums, fillers…. (or any weird ingredients we
          probably have a hard time pronouncing).{' '}
        </p>
      </>
    )
  },
  {
    title: 'Can I have Nanu’s Tortillas shipped to me?',
    content: (
      <>
        <p>
          Absolutely! Every week, we ship our tortillas in an insulated mailer with an ice pack. To
          guarantee that our tortillas arrive fresh at your doorstep, we only ship on Mondays and
          Tuesdays. Orders received after 12 pm PT on Tuesday will be shipped the following week.
        </p>
      </>
    )
  },
  {
    title: 'Do Nanu’s salsas need to be refrigerated?',
    content: (
      <>
        <p>
          Our salsas are ONLY made with the freshest ingredients, never preservatives, fillers, or
          gums. After opening, store them in the refrigerator and consume within 2 weeks.
        </p>
        <p>(EXCEPT, our chili Oil salsa! It last up to 3 months in the refrigerator).</p>
      </>
    )
  },
  {
    title: 'Allergens? Gluten-free? Peanuts?',
    content: (
      <>
        <p>
          While we strive to avoid cross-contamination, our tortillas and salsas are made in the
          same facility as products containing common allergens such as nuts and gluten.
        </p>
      </>
    )
  }
];

export default async function Page({ params }: { params: { page: string } }) {
  return (
    <>
      <section>
        <div className="border-pyramid-bottom relative max-lg:h-[110vw] max-lg:max-h-[600px]">
          <Image
            src="/images/hero-about.jpg"
            alt="About Us"
            width={1440}
            height={720}
            className="block w-full object-cover object-center max-lg:absolute max-lg:inset-0 max-lg:h-full"
          />
        </div>
      </section>
      <section>
        <div className="mx-auto w-11/12 pb-24">
          <div className="border-bottom-sky-lg relative mx-auto my-14 max-w-[800px] px-10 py-14 text-center">
            <h2 className="font-portland text-4xl font-bold uppercase text-[#532826] md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion accordionData={FAQItems} />
        </div>
      </section>
    </>
  );
}
