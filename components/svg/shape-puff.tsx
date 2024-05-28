const ShapeFlower = ({
  className = '',
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const content = (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="fill-current">
        <path d="M173.42 135.57c12.49 30.82-7 50.34-37.84 37.85a6.81 6.81 0 0 0-8.83 3.58c-13 30.67-40.55 30.67-53.5 0a6.81 6.81 0 0 0-8.83-3.58c-30.81 12.49-50.33-7-37.84-37.85a6.8 6.8 0 0 0-3.58-8.82c-30.67-13-30.67-40.56 0-53.5a6.81 6.81 0 0 0 3.58-8.83c-12.49-30.81 7-50.34 37.84-37.84A6.82 6.82 0 0 0 73.25 23c13-30.65 40.55-30.65 53.5 0a6.82 6.82 0 0 0 8.83 3.59c30.81-12.49 50.33 7 37.84 37.84a6.81 6.81 0 0 0 3.58 8.82c30.67 12.94 30.67 40.55 0 53.5a6.8 6.8 0 0 0-3.58 8.82Z" />
      </svg>
      {children}
    </>
  );

  return className ? <span className={`aspect-square ${className}`}>{content}</span> : content;
};

export default ShapeFlower;
