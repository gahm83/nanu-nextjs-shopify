'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NanuLink = ({ url, link, className }: { url: string; link: string; className?: string }) => {
  const currentPath = usePathname();

  return (
    <Link
      href={url}
      className={clsx(
        `relative flex h-10 items-center before:absolute before:bottom-2 before:left-[-10%] before:block before:h-3 before:w-0 before:bg-[#8DC8E8] before:transition-all before:duration-300 before:content-[''] hover:before:w-[120%] ${className && className}`,
        { 'before:w-[120%]': url === currentPath }
      )}
    >
      <span className="relative drop-shadow-sm">{link}</span>
    </Link>
  );
};

export default NanuLink;
