import ContactForm from '@/components/forms/contact';
import Image from 'next/image';

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
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
