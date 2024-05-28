import ShapeSnowflake from './shape-snowflake';

const HappierGutLife = () => (
  <figure className="relative flex aspect-video items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 141 78"
      className="w-7/12 overflow-visible"
    >
      <path
        d="M111.36 44.83c5.2-20.39-6.93-38.44-6.93-38.44-6.64-9.1-28.43-8.17-34.9 1.69A3.39 3.39 0 0 1 67 9.6c-5.78.4-10.62-1.4-12-7.7a1.6 1.6 0 0 0-.85-1.09 7.66 7.66 0 0 0-6.72-.07 1.5 1.5 0 0 0-.86 1.4c0 2.67.79 10.34 7.92 15 4 2.63 9.73 3 14.5 3a2.85 2.85 0 0 1 2.89 2.3c.86 4.87.91 10.59-1.51 15.84-3.24 7-10.72 8.21-16 8.1a3.72 3.72 0 0 1-2.28-.86c-8.29-6.8-21.75-2.64-23.6 8.38a32.68 32.68 0 0 0 0 6.56 107.44 107.44 0 0 0 2.66 15.6 1.62 1.62 0 0 0 .92 1.12 8.4 8.4 0 0 0 6.9.17 1.54 1.54 0 0 0 1-1.59 161.86 161.86 0 0 1-1-16.63 3.78 3.78 0 0 1 1.2-2.91c2-1.54 4.48-.58 5.94 1.88.83 4.41 2.66 9 6.07 12.11A25.17 25.17 0 0 0 66 76.41c21.14 2.71 39.77-9.65 45.36-31.58Z"
        className="fill-[#f6e7e0]"
      />
    </svg>
    <ShapeSnowflake className="absolute left-[40.3%] top-[38%] w-[24px] animate-spin-reverse text-[#8dc8e8]" />
  </figure>
);

export default HappierGutLife;
