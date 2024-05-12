import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function CloseCart({ className }: { className?: string }) {
  return (
    <div className="group relative flex h-11 w-11 items-center justify-center text-[#532826]">
      <span className="absolute block h-11 w-11 rotate-45 transform bg-[#8DC8E8]"></span>
      <XMarkIcon
        className={clsx(
          'relative h-6 w-6 transition-all duration-300 ease-in-out group-hover:scale-125 ',
          className
        )}
      />
    </div>
  );
}
