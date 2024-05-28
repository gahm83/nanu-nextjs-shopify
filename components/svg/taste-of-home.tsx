import ShapeSnowflake from './shape-snowflake';

const TasteOfHome = () => (
  <figure className="relative flex aspect-video items-center justify-center">
    <svg viewBox="0 0 141 78" className="w-7/12 overflow-visible">
      <path
        d="M5.34 0h50.17a4.63 4.63 0 0 1 3 1.13l26.56 23a5.07 5.07 0 0 1 1.76 3L91.18 50a5.09 5.09 0 0 0 3.7 4l15.93 4.26a5.07 5.07 0 0 0 5.84-2.6l5.27-10.25a5.19 5.19 0 0 1 2.65-2.41l10.12-4a4.89 4.89 0 0 1 2.95-.25 3.6 3.6 0 0 1 2.67 2.14 5 5 0 0 1 .41 2.8l-1.41 10.38a5.09 5.09 0 0 1-3.44 4.14l-7.19 2.39a2.21 2.21 0 0 0-1.1 3.38l1.68 2.12a2.22 2.22 0 0 1 .27 2.07c-1.3 3.35-4 5.75-7.5 7.6a2.22 2.22 0 0 1-1.8.12L110 73.78a2.16 2.16 0 0 0-1.23-.09l-19.12 4.19a5 5 0 0 1-3-.27l-33.97-14.1a5.11 5.11 0 0 1-3.09-4L48 47.74a5.18 5.18 0 0 0-1.35-2.81L17.79 14.59a.74.74 0 0 0-1.18.89l15.48 26.65c.14 4.33-7.08 5.74-10 2.4a1.09 1.09 0 0 1-.09-.23L.9 7.48A5 5 0 0 1 5.34 0Z"
        className="fill-[#f6e7e0]"
      />
    </svg>
    <ShapeSnowflake className="absolute right-[31.7%] top-[46%] w-[24px] animate-spin text-[#8dc8e8]" />
  </figure>
);

export default TasteOfHome;
