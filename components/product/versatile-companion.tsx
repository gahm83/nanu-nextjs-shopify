import clsx from 'clsx';
import Image from 'next/image';

const versatileCompanionItems = [
  {
    icon: '/images/icon-wrapped.svg',
    title: 'Wrapped'
  },
  {
    icon: '/images/icon-toasted.svg',
    title: 'Toasted'
  },
  {
    icon: '/images/icon-fried.svg',
    title: 'Fried'
  },
  {
    icon: '/images/icon-grilled.svg',
    title: 'Grilled'
  },
  {
    icon: '/images/icon-dipped.svg',
    title: 'Dipped'
  }
];

export function VersatileCompanion() {
  return (
    <div className="before:bg-[auto 6px] after:bg-[auto 5px] relative mx-auto flex w-full flex-col bg-[#532826] px-6 py-24 before:absolute before:left-6 before:right-6 before:top-10 before:block before:h-[6px] before:bg-border-sky before:bg-repeat-space before:content-[''] after:absolute after:bottom-10 after:left-6 after:right-6 after:block after:h-[5px] after:bg-border-sky after:bg-repeat-space after:content-['']">
      <h1 className="mb-5 text-center font-portland text-4xl font-black uppercase">
        Your versatile companion
      </h1>
      <div className="mx-auto flex w-full items-center justify-between lg:max-w-[1120px]">
        {versatileCompanionItems &&
          versatileCompanionItems.map((item, index) => (
            <div key={index} className={clsx({ 'hidden lg:block': index >= 2 })}>
              <figure className="flex items-center justify-center">
                <Image src={item.icon} alt={item.title} height={78} width={141} />
              </figure>
              <div className="mt-4 space-y-4 px-6 text-center">
                <h2 className="mx-auto text-center font-portland text-2xl font-black uppercase leading-none">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
