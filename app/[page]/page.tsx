import ShopifyRichText from '@/components/layout/ShopifyRichText';
import Accordion from '@/components/layout/accordion';
import Prose from 'components/prose';
import { getPage } from 'lib/shopify';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params
}: {
  params: { page: string };
}): Promise<Metadata> {
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: 'article'
    }
  };
}

export default async function Page({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  if (!page) return notFound();

  if (page.title === 'About us') {
    type MetaobjectField = {
      key: string;
      value: string;
      reference: null | {
        fields: Array<{
          key: string;
          value: string;
          reference: null | any;
        }>;
      };
    };

    type MetaobjectNode = {
      fields: MetaobjectField[];
    };

    type Input = {
      about: {
        value: string;
        references: {
          nodes: MetaobjectNode[];
        };
      };
    };

    type TextOutput = {
      type: 'text';
      value: string;
    };

    type GoalOutput = {
      type: 'goal';
      value: {
        requeriments: string[];
        subtitle: string;
        title: string;
      };
    };

    type ImageOutput = {
      type: 'image';
      value: {
        title: string;
        subtitle: string;
        image: {
          src: string;
          width: number;
          height: number;
        };
      };
    };

    type Output = (TextOutput | GoalOutput | ImageOutput)[];

    const about: Output = page.about.references.nodes.reduce((acc: Output, node) => {
      node.fields.forEach((field) => {
        if (field.key === 'text') {
          acc.push({
            type: 'text',
            value: field.value
          });
        } else if (field.key === 'goal') {
          const referenceFields = field.reference?.fields;
          if (referenceFields) {
            const goalValue: any = {};
            referenceFields.forEach((refField) => {
              if (refField.key == 'requeriments') {
                goalValue[refField.key] = JSON.parse(refField.value);
              } else {
                goalValue[refField.key] = refField.value;
              }
            });
            acc.push({
              type: 'goal',
              value: {
                requeriments: goalValue['requeriments'],
                subtitle: goalValue['subtitle'],
                title: goalValue['title']
              }
            });
          }
        } else if (field.key === 'image') {
          const referenceFields = field.reference?.fields;
          if (referenceFields) {
            const imageValue: any = {};
            referenceFields.forEach((refField) => {
              if (refField.key === 'image') {
                if (refField.reference?.image) {
                  imageValue[refField.key] = {
                    src: refField.reference.image.src,
                    width: refField.reference.image.width,
                    height: refField.reference.image.height
                  };
                }
              } else {
                imageValue[refField.key] = refField.value;
              }
            });
            acc.push({
              type: 'image',
              value: {
                title: imageValue['title'],
                subtitle: imageValue['subtitle'],
                image: imageValue['image']
              }
            });
          }
        }
      });
      return acc;
    }, []);

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
          <div className="mx-auto w-10/12 max-w-[800px] pb-24">
            <div className="border-bottom-sky-lg relative my-14 px-10 py-14 text-center">
              <h2 className="font-portland text-4xl font-bold uppercase text-[#532826] md:text-5xl">
                The pursuit of Happiness
              </h2>
            </div>
            {about.map((section, index) => {
              if (section.type == 'text')
                return (
                  <div
                    className="space-y-5 text-justify text-xl font-medium text-[#532826]"
                    key={index}
                  >
                    <ShopifyRichText
                      {...JSON.parse(section.value)}
                      options={[
                        { type: 'bold', className: 'twcss-font-bold' },
                        { type: 'italic', className: 'twcss-font-italic' }
                      ]}
                    />
                  </div>
                );

              if (section.type == 'goal')
                return (
                  <div className="my-10 space-y-10 rounded-2xl bg-[#EDD3C5] py-10 text-center text-xl font-medium text-[#532826] lg:my-20 lg:py-20">
                    <p>{section.value.title}</p>
                    <p className="mx-auto font-portland text-2xl font-bold uppercase lg:max-w-[60%]">
                      {section.value.subtitle}
                    </p>
                    <div className="space-y-5 font-plam-canyon-drive text-5xl font-normal">
                      {section.value.requeriments.map((requeriment) => (
                        <p className="leading-[0.7] md:flex md:justify-center md:space-x-2">
                          <span className="text-[#8DC8E8]">*</span>
                          {requeriment}
                          <span className="text-[#8DC8E8]">*</span>
                        </p>
                      ))}
                    </div>
                  </div>
                );

              if (section.type == 'image')
                return (
                  <>
                    <figure className="flex flex-col items-center justify-center py-20">
                      <Image
                        src={section.value.image.src}
                        alt={`${section.value.title} | ${section.value.subtitle}`}
                        width={section.value.image.width}
                        height={section.value.image.height}
                        className="w-1/2 max-w-[480px]"
                      />
                    </figure>
                    <h2 className="text-center font-portland text-2xl font-bold uppercase text-[#532826]">
                      {section.value.title}
                    </h2>
                    <p className="text-center font-plam-canyon-drive text-5xl font-normal text-[#532826]">
                      {section.value.subtitle}
                    </p>
                  </>
                );
            })}
          </div>
        </section>
      </>
    );
  }

  if (page.title == 'FAQs') {
    interface FAQ {
      question: string;
      answer: any;
    }

    const faqs: FAQ[] = page.faqs.references.nodes.map((node) => {
      const faq: FAQ = {
        question: '',
        answer: ''
      };

      node.fields.forEach((field) => {
        if (field.key === 'question') {
          faq.question = field.value;
        } else if (field.key === 'answer') {
          faq.answer = field.value;
        }
      });

      return faq;
    });

    return (
      <>
        <section>
          <div className="border-pyramid-bottom relative max-lg:h-[110vw] max-lg:max-h-[600px]">
            <Image
              src="/images/hero-faq.jpg"
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
            <Accordion accordionData={faqs} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <div className="border-pyramid-bottom relative max-lg:h-[110vw] max-lg:max-h-[600px]">
          <Image
            src="/images/hero-faq.jpg"
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
              {page.title}
            </h2>
          </div>
          <Prose html={page.body as string} />
        </div>
      </section>
    </>
  );
}
