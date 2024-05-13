import Image from 'next/image';

export default async function Logo({ className }: { className: string }) {
  return (
    <>
      <figure className={`relative block aspect-[3/1] max-h-10 lg:hidden ${className}`}>
        <Image src="/images/nanu.svg" alt="Nenu Heritage Foods" fill={true} />
      </figure>
      <figure className={`relative hidden aspect-[1.67/1] lg:block ${className}`}>
        <Image src="/images/nanu-logo.svg" fill={true} alt="Nanu Heritage Foods" />
      </figure>
    </>
  );
}
