import ShoppingBag from '../svg/shopping-bag';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-[30px] w-[70px] items-center">
      <ShoppingBag />
      <div className="flex h-[30px] w-[30px] items-center justify-center">
        {quantity ? quantity : '0'}
      </div>
    </div>
  );
}
