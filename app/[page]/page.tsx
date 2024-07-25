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

  console.log(page);

  if (page.title == 'About us') {
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
      <h1 className="mb-8 text-5xl font-bold">{page.title}</h1>
      <Prose className="mb-8" html={page.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
