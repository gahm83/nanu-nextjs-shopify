import clsx from 'clsx';

export default function OutOfStockIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 25" className={clsx('w-6 transition-all duration-300', props.className)}>
      <path
        fillRule="evenodd"
        d="M17.855 7A6.002 6.002 0 0 0 6.021 7h11.834Zm-5.917-7A8.001 8.001 0 0 0 4 7H0v18h24V7h-4.124a8.001 8.001 0 0 0-7.938-7ZM22 9H2v14h20V9Zm-4 11.667L16.667 22 12 17.333 7.333 22 6 20.667 10.667 16 6 11.333 7.333 10 12 14.667 16.667 10 18 11.333 13.333 16 18 20.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
