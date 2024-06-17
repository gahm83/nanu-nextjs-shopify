import ContactForm from '@/components/layout/contact-form';
import Image from 'next/image';

/*
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
  */

export default async function Page({ params }: { params: { page: string } }) {
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
              Get in touch
            </h2>
          </div>
          <div className="mx-auto w-11/12 max-w-[960px] bg-[#532826]">
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="font-portland font-bold text-2xl uppercase">We will be happy to hear from you</h2>
              <div className="space-y-5 text-justify text-xl font-medium text-[#532826]">
                <p>Do you have any comments about our products? Would you like to be part of our distributor network? Or you just want to say hello Nanu!</p>
                <p><strong>Just drop us a message!</strong></p>
              </div>
              <div>
                <input defaultValue="test" {...register("example")} />
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
              <button type="submit">Send Message</button>
            </form> */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
