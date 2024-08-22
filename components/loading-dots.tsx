import clsx from 'clsx';

const dots = 'mx-1 inline-block h-2 w-2 animate-blink rounded-md bg-[#532826]';

const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={clsx(dots, className)} />
      <span className={clsx(dots, 'animation-delay-[200ms]', className)} />
      <span className={clsx(dots, 'animation-delay-[400ms]', className)} />
    </span>
  );
};

export default LoadingDots;
