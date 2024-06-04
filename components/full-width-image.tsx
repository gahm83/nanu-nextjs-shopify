import Image from 'next/image';

const FullWidthImage = ({
  src,
  alt,
  width,
  height,
  className
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <figure className={`relative h-auto w-full ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} className="object-cover" />
    </figure>
  );
};

export default FullWidthImage;
