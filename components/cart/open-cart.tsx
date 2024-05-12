export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-[40px] w-[70px] items-center bg-cart-qty bg-center bg-no-repeat">
      <div className="flex h-[30px] w-[30px] items-center justify-center">
        {quantity ? quantity : '0'}
      </div>
    </div>
  );
}
