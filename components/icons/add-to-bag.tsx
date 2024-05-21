import clsx from 'clsx';

export default function AddToBagIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 46 24"
      {...props}
      className={clsx('h-4 w-4 transition-all duration-300', props.className)}
    >
      <path
        d="M46 11h-6.2V4.8h-2V11h-6.2v2h6.2v6.2h2V13H46zM19 5.8C18.5 2.3 15.8 0 11.9 0S5.2 2.3 4.8 5.8H-.1V24h24V5.8H19zm-7.1-3.7c2.2 0 4.5 1 5 3.7h-10c.4-2.7 2.8-3.7 5-3.7zm9.8 5.8v3.3H1.9V7.9h19.8zm-19.8 14v-8.6h19.8v8.6H1.9z"
        className="st0"
      />
    </svg>
  );
}
