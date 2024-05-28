import React from 'react';

const ShapeRomboid = ({
  className = '',
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const content = (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="fill-current">
        <path d="m100 0 100 100-100 100L0 100Z" />
      </svg>
      {children}
    </>
  );

  return className ? <span className={`aspect-square ${className}`}>{content}</span> : content;
};

export default ShapeRomboid;
