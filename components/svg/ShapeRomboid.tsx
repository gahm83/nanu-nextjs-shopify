const ShapeRomboid = ({ className }: { className: string }) => (
  <span className={`aspect-square origin-center transform ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className="absolute h-full w-full"
    >
      <path d="m100 0 100 100-100 100L0 100Z" />
    </svg>
  </span>
);
export default ShapeRomboid;
